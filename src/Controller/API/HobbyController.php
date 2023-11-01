<?php

declare(strict_types=1);

namespace App\Controller\API;

use App\Repository\HobbyRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/api/hobbies')]
class HobbyController extends AbstractController
{
    #[Route('/', name: 'api_hobbies_collection_get', methods: ['GET'])]
    public function collection(
        HobbyRepository $hobbyRepository,
        SerializerInterface $serializer
    ): JsonResponse {
        return new JsonResponse(
            $serializer->serialize($hobbyRepository->findAll(), 'json', [
                'groups' => 'get',
            ]),
            200,
            [],
            true
        );
    }
}
