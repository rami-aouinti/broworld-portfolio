<?php

declare(strict_types=1);

namespace App\Controller\API;

use App\Repository\ReferenceRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * Class ReferenceController
 * @package App\Controller\API
 * @Route("/api/references")
 */
class ReferenceController
{
    /**
     * @Route("", methods={"GET"}, name="api_references_collection_get")
     */
    public function collection(ReferenceRepository $referenceRepository, SerializerInterface $serializer): JsonResponse
    {
        return new JsonResponse(
            $serializer->serialize($referenceRepository->findAll(), 'json', [
                'groups' => 'get',
            ]),
            200,
            [],
            true
        );
    }
}
