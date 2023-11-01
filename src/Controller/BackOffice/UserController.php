<?php

declare(strict_types=1);

namespace App\Controller\BackOffice;

use App\Form\UserType1;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

#[Route('/admin/user')]
class UserController extends AbstractController
{
    #[Route('/edit', name: 'app_user_edit', methods: ['GET', 'POST'])]
    public function edit(#[CurrentUser] $user, Request $request, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(UserType1::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_user_edit', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('back_office/user/edit.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }
}
