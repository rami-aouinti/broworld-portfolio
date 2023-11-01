<?php

declare(strict_types=1);

namespace App\Controller\API;

use App\Repository\FormationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/formations')]
class FormationController extends AbstractController
{
    #[Route('/', name: 'api_formations_collection_get', methods: ['GET'])]
    public function collection(FormationRepository $formationRepository): JsonResponse
    {
        return $this->json($formationRepository->findAll());
    }
}
