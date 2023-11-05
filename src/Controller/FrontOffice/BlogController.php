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

use App\Entity\Comment;
use App\Entity\Post;
use App\Entity\User;
use App\Event\CommentCreatedEvent;
use App\Form\CommentType;
use App\Repository\PostRepository;
use App\Repository\TagRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\Cache;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/blog')]
final class BlogController extends AbstractController
{
    #[Route('/', name: 'blog_index', defaults: [
        'page' => '1',
        '_format' => 'html',
    ], methods: ['GET'])]
    #[Route('/rss.xml', name: 'blog_rss', defaults: [
        'page' => '1',
        '_format' => 'xml',
    ], methods: ['GET'])]
    #[Route('/page/{page<[1-9]\d{0,8}>}', name: 'blog_index_paginated', defaults: [
        '_format' => 'html',
    ], methods: ['GET'])]
    #[Cache(smaxage: 10)]
    public function index(
        Request $request,
        int $page,
        string $_format,
        PostRepository $posts,
        TagRepository $tags
    ): Response {
        $tag = null;
        if ($request->query->has('tag')) {
            $tag = $tags->findOneBy([
                'name' => $request->query->get('tag'),
            ]);
        }
        $latestPosts = $posts->findLatest($page, $tag);

        return $this->render('front_office/blog/index.' . $_format . '.twig', [
            'paginator' => $latestPosts,
            'tagName' => $tag?->getName(),
        ]);
    }

    #[Route('/posts/{slug}', name: 'blog_post', methods: ['GET'])]
    public function postShow(Post $post): Response
    {
        return $this->render('front_office/blog/post_show.html.twig', [
            'post' => $post,
        ]);
    }

    #[Route('/comment/{postSlug}/new', name: 'comment_new', methods: ['POST'])]
    #[IsGranted('IS_AUTHENTICATED')]
    public function commentNew(
        #[CurrentUser]
        User $user,
        Request $request,
        #[MapEntity(mapping: [
            'postSlug' => 'slug',
        ])]
        Post $post,
        EventDispatcherInterface $eventDispatcher,
        EntityManagerInterface $entityManager,
    ): Response {
        $comment = new Comment();
        $comment->setAuthor($user);
        $post->addComment($comment);

        $form = $this->createForm(CommentType::class, $comment);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($comment);
            $entityManager->flush();
            $eventDispatcher->dispatch(new CommentCreatedEvent($comment));

            return $this->redirectToRoute('blog_post', [
                'slug' => $post->getSlug(),
            ]);
        }

        return $this->render('front_office/blog/comment_form_error.html.twig', [
            'post' => $post,
            'form' => $form,
        ]);
    }

    public function commentForm(Post $post): Response
    {
        $form = $this->createForm(CommentType::class);

        return $this->render('front_office/blog/_comment_form.html.twig', [
            'post' => $post,
            'form' => $form,
        ]);
    }

    #[Route('/search', name: 'blog_search', methods: ['GET'])]
    public function search(Request $request): Response
    {
        return $this->render('front_office/blog/search.html.twig', [
            'query' => (string)$request->query->get('q', ''),
        ]);
    }
}
