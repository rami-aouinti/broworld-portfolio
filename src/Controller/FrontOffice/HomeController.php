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

use App\Entity\Contact;
use App\Form\ContactType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class HomeController
 * @package App\Controller\FrontOffice
 * @Route("/", name="home")
 */
class HomeController extends AbstractController
{

    public function __invoke(
        Request $request,
        EntityManagerInterface $entityManager,
        MailerInterface $mailer
    ): Response
    {
        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($contact);
            $entityManager->flush();
            $email = (new Email())
                ->from(
                    new Address(
                        'info@ramyworld.de',
                        $contact->getFirstName() .  " " . $contact->getLastName()
                    )
                )
                ->to('info@ramyworld.de')
                ->subject('Contact from BroWorld from ' . $contact->getEmail())
                ->text($contact->getMessage())
                ->html($contact->getMessage());

            $mailer->send($email);
            $form = $this->createForm(ContactType::class, $contact);
            $this->addFlash('success', 'Your message was successfully sent');
            return $this->redirectToRoute('home', ['form' => $form], Response::HTTP_SEE_OTHER);
        }

        return $this->render(
            'front_office/home.html.twig', [
                'form' => $form,
            ]
        );
    }
}
