<?php

declare(strict_types=1);

namespace App\Controller\API;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/api/user')]
class UserController extends AbstractController
{
    #[Route('/', name: 'api_user_collection_get', methods: ['GET'])]
    public function collection(UserRepository $userRepository, SerializerInterface $serializer): JsonResponse
    {
        return new JsonResponse(
            $serializer->serialize($userRepository->findOneBy([
                'email' => 'rami.aouinti@gmail.com',
            ]), 'json', [
                'groups' => 'get',
            ]),
            200,
            [],
            true
        );
    }
}
