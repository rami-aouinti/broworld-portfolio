<?php

declare(strict_types=1);

namespace App\Controller\API;

use App\Repository\ExperienceRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/experiences')]
class ExperienceController extends AbstractController
{
    #[Route('/', name: 'api_experiences_collection_get', methods: ['GET'])]
    public function collection(ExperienceRepository $experienceRepository): JsonResponse
    {
        return $this->json($experienceRepository->findAll());
    }
}
