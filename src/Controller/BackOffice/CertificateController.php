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

use App\Entity\Certificate;
use App\Form\CertificateType;
use App\Repository\CertificateRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/admin/certificate')]
class CertificateController extends AbstractController
{
    #[Route('/', name: 'app_certificate_index', methods: ['GET'])]
    public function index(CertificateRepository $certificateRepository): Response
    {
        return $this->render('back_office/certificate/index.html.twig', [
            'certificates' => $certificateRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_certificate_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $certificate = new Certificate();
        $form = $this->createForm(CertificateType::class, $certificate);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($certificate);
            $entityManager->flush();

            return $this->redirectToRoute('app_certificate_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('back_office/certificate/new.html.twig', [
            'certificate' => $certificate,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_certificate_show', methods: ['GET'])]
    public function show(Certificate $certificate): Response
    {
        return $this->render('back_office/certificate/show.html.twig', [
            'certificate' => $certificate,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_certificate_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Certificate $certificate, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(CertificateType::class, $certificate);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_certificate_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('back_office/certificate/edit.html.twig', [
            'certificate' => $certificate,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_certificate_delete', methods: ['POST'])]
    public function delete(Request $request, Certificate $certificate, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$certificate->getId(), $request->request->get('_token'))) {
            $entityManager->remove($certificate);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_certificate_index', [], Response::HTTP_SEE_OTHER);
    }
}
