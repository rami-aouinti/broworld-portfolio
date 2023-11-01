<?php

declare(strict_types=1);

namespace App\Controller\API;

use App\Repository\ProfileRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/api/profile')]
class ProfileController extends AbstractController
{
    #[Route('/', name: 'api_profile_collection_get', methods: ['GET'])]
    public function collection(
        ProfileRepository $profileRepository,
        UserRepository $userRepository,
        SerializerInterface $serializer
    ): JsonResponse {
        $user = $userRepository->findOneBy([
            'email' => 'rami.aouinti@gmail.com',
        ]);

        return new JsonResponse(
            $serializer->serialize($profileRepository->findOneBy([
                'user' => $user,
            ]), 'json', [
                'groups' => 'get',
            ]),
            200,
            [],
            true
        );
    }
}
