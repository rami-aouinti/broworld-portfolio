<?php

declare(strict_types=1);

/*
 * This file is part of the Symfony package.
 *
 * (c) Rami Aouinti <rami.aouinti@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Controller\BackOffice;

use App\Entity\Reference;
use App\Form\ReferenceType;
use App\Repository\ReferenceRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/admin/references')]
class ReferenceController extends AbstractController
{
    #[Route('/', name: 'reference_manage', methods: ['GET'])]
    public function manage(ReferenceRepository $referenceRepository): Response
    {
        $references = $referenceRepository->findAll();

        return $this->render('back_office/reference/manage.html.twig', [
            'references' => $references,
        ]);
    }

    #[Route('/create', name: 'reference_create', methods: ['GET', 'POST'])]
    public function create(Request $request, EntityManagerInterface $entityManager): Response
    {
        $reference = new Reference();
        $form = $this->createForm(ReferenceType::class, $reference)->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($reference);
            $entityManager->flush();
            $this->addFlash('success', 'La référence a été ajoutée avec succès !');

            return $this->redirectToRoute('reference_manage');
        }

        return $this->render('back_office/reference/create.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}/update', name: 'reference_update', methods: ['GET', 'POST'])]
    public function update(Reference $reference, Request $request, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(ReferenceType::class, $reference)->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash('success', 'La référence a été modifiée avec succès !');

            return $this->redirectToRoute('reference_manage');
        }

        return $this->render('back_office/reference/update.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}/delete', name: 'reference_delete', methods: ['POST'])]
    public function delete(Reference $reference, EntityManagerInterface $entityManager): RedirectResponse
    {
        $entityManager->remove($reference);
        $entityManager->flush();
        $this->addFlash('success', 'La référence a été supprimée avec succès !');

        return $this->redirectToRoute('reference_manage');
    }
}
