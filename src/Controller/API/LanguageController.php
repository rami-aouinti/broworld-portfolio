<?php

declare(strict_types=1);

namespace App\Controller\API;

use App\Repository\LanguageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/api/languages')]
class LanguageController extends AbstractController
{
    #[Route('/', name: 'api_languages_collection_get', methods: ['GET'])]
    public function collection(
        LanguageRepository $languageRepository,
        SerializerInterface $serializer
    ): JsonResponse {
        return new JsonResponse(
            $serializer->serialize($languageRepository->findAll(), 'json', [
                'groups' => 'get',
            ]),
            200,
            [],
            true
        );
    }
}
