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

namespace App\Controller\FrontOffice;

use App\Repository\CertificateRepository;
use App\Repository\ExperienceRepository;
use App\Repository\FormationRepository;
use App\Repository\HobbyRepository;
use App\Repository\LanguageRepository;
use App\Repository\ProjectRepository;
use App\Repository\SkillRepository;
use App\Repository\UserRepository;
use App\Service\PdfService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/resume/generate')]
class ResumeController extends AbstractController
{
    #[Route('/', name: 'app_resume_index', methods: ['GET'])]
    public function indexAction(
        UserRepository $userRepository,
        SkillRepository $skillRepository,
        FormationRepository $formationRepository,
        ExperienceRepository $experienceRepository,
        LanguageRepository $languageRepository,
        HobbyRepository $hobbyRepository,
        ProjectRepository $projectRepository,
        CertificateRepository $certificateRepository,
        PdfService $pdfService
    ): void
    {
        $user = $userRepository->findOneBy([
            'email' => 'rami.aouinti@gmail.com'
        ]);
        $photoUser =  $this->imageToBase64($this->getParameter('kernel.project_dir') . '/public/images/rami.jpg');
        $html = $this->render('front_office/resume/index.html.twig', [
            'photoUser' => $photoUser,
            'user' => $user,
            'experiences' => $experienceRepository->findAll(),
            'formations' => $formationRepository->findAll(),
            'skills' => $skillRepository->findAll(),
            'languages' => $languageRepository->findAll(),
            'hobbies' => $hobbyRepository->findAll(),
            'projects' => $projectRepository->findAll(),
            'certifications' => $certificateRepository->findAll()
        ])->getContent();

        $pdfService->generatePdf($html, $user->getUsername());
    }

    /**
     * @param $path
     * @return string
     */
    private function imageToBase64($path) {
        $type = pathinfo($path, PATHINFO_EXTENSION);
        $data = file_get_contents($path);
        $base64 = "data:image/" . $type . ";base64," . base64_encode($data);
        return $base64;
    }

}
