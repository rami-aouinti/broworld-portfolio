<?php

declare(strict_types=1);

namespace App\Controller\BackOffice;

use App\Entity\Profile;
use App\Form\ProfileType;
use App\Repository\ProfileRepository;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

#[Route('/admin/profile')]
class ProfileController extends AbstractController
{
    #[Route('/', name: 'app_profile_index', methods: ['GET'])]
    public function index(
        #[CurrentUser]
        $user,
        ProfileRepository $profileRepository,
        EntityManagerInterface $entityManager
    ): Response {
        $profile = $profileRepository->findOneBy([
            'user' => $user,
        ]);
        if (!$profile) {
            $profile = new Profile();
            $profile->setUser($user);
            $profile->setTitle('Ing');
            $profile->setPhone('+4917635587613');
            $profile->setAddress('Vogelweide 4b, 85375 Neufahrn bei Freising');
            $profile->setBirthday(new DateTimeImmutable('now'));
            $profile->setDescription('Leidenschaftlicher Fullstack Web Entwickler mit 6 Jahren Erfahrung in
             der Konzeption, Entwicklung und Wartung ansprechender und Funktionaler Webanwendungen.');
            $entityManager->persist($profile);
            $entityManager->flush();
        }

        return $this->render('back_office/profile/show.html.twig', [
            'profile' => $profile,
        ]);
    }

    #[Route('/new', name: 'app_profile_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $profile = new Profile();
        $form = $this->createForm(ProfileType::class, $profile);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($profile);
            $entityManager->flush();

            return $this->redirectToRoute('app_profile_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('back_office/profile/new.html.twig', [
            'profile' => $profile,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_profile_show', methods: ['GET'])]
    public function show(Profile $profile): Response
    {
        return $this->render('back_office/profile/show.html.twig', [
            'profile' => $profile,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_profile_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Profile $profile, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(ProfileType::class, $profile);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_profile_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('back_office/profile/edit.html.twig', [
            'profile' => $profile,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_profile_delete', methods: ['POST'])]
    public function delete(Request $request, Profile $profile, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $profile->getId(), $request->request->get('_token'))) {
            $entityManager->remove($profile);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_profile_index', [], Response::HTTP_SEE_OTHER);
    }
}
