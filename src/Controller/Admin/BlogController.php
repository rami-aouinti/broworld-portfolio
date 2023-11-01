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

namespace App\Controller\Admin;

use App\Entity\Post;
use App\Entity\User;
use App\Form\PostType;
use App\Repository\PostRepository;
use App\Security\PostVoter;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\SubmitButton;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/admin/post')]
#[IsGranted(User::ROLE_ADMIN)]
final class BlogController extends AbstractController
{
    #[Route('/', name: 'admin_index', methods: ['GET'])]
    #[Route('/', name: 'admin_post_index', methods: ['GET'])]
    public function index(
        #[CurrentUser]
        User $user,
        PostRepository $posts,
    ): Response {
        $authorPosts = $posts->findBy([
            'author' => $user,
        ], [
            'publishedAt' => 'DESC',
        ]);

        return $this->render('back_office/blog/index.html.twig', [
            'posts' => $authorPosts,
        ]);
    }

    #[Route('/new', name: 'admin_post_new', methods: ['GET', 'POST'])]
    public function new(
        #[CurrentUser]
        User $user,
        Request $request,
        EntityManagerInterface $entityManager,
    ): Response {
        $post = new Post();
        $post->setAuthor($user);

        $form = $this->createForm(PostType::class, $post)
            ->add('saveAndCreateNew', SubmitType::class)
        ;

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($post);
            $entityManager->flush();
            $this->addFlash('success', 'post.created_successfully');

            /** @var SubmitButton $submit */
            $submit = $form->get('saveAndCreateNew');

            if ($submit->isClicked()) {
                return $this->redirectToRoute('admin_post_new');
            }

            return $this->redirectToRoute('admin_post_index');
        }

        return $this->render('back_office/blog/new.html.twig', [
            'post' => $post,
            'form' => $form,
        ]);
    }

    #[Route('/{id<\d+>}', name: 'admin_post_show', methods: ['GET'])]
    public function show(Post $post): Response
    {
        $this->denyAccessUnlessGranted(
            PostVoter::SHOW,
            $post,
            'Posts can only be shown to their authors.'
        );

        return $this->render('back_office/blog/show.html.twig', [
            'post' => $post,
        ]);
    }

    #[Route('/{id<\d+>}/edit', name: 'admin_post_edit', methods: ['GET', 'POST'])]
    #[IsGranted('edit', subject: 'post', message: 'Posts can only be edited by their authors.')]
    public function edit(Request $request, Post $post, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(PostType::class, $post);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash('success', 'post.updated_successfully');

            return $this->redirectToRoute('admin_post_edit', [
                'id' => $post->getId(),
            ]);
        }

        return $this->render('back_office/blog/edit.html.twig', [
            'post' => $post,
            'form' => $form,
        ]);
    }

    #[Route('/{id}/delete', name: 'admin_post_delete', methods: ['POST'])]
    #[IsGranted('delete', subject: 'post')]
    public function delete(Request $request, Post $post, EntityManagerInterface $entityManager): Response
    {
        /** @var string|null $token */
        $token = $request->request->get('token');

        if (!$this->isCsrfTokenValid('delete', $token)) {
            return $this->redirectToRoute('admin_post_index');
        }

        $post->getTags()->clear();

        $entityManager->remove($post);
        $entityManager->flush();

        $this->addFlash('success', 'post.deleted_successfully');

        return $this->redirectToRoute('admin_post_index');
    }
}
