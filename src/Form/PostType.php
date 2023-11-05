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

namespace App\Form;

use App\Entity\Post;
use App\Form\Type\DateTimePickerType;
use App\Form\Type\TagsInputType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\String\Slugger\SluggerInterface;

/**
 * Defines the form used to create and manipulate blog posts.
 *
 * @author Rami Aouinti <rami.aouinti@gmail.com>
 */
final class PostType extends AbstractType
{
    // Form types are services, so you can inject other services in them if needed
    public function __construct(
        private readonly SluggerInterface $slugger
    ) {
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', null, [
                'attr' => [
                    'autofocus' => true,
                ],
                'label' => 'label.title',
            ])
            ->add('summary', TextareaType::class, [
                'help' => 'help.post_summary',
                'label' => 'label.summary',
            ])
            ->add('content', null, [
                'attr' => [
                    'rows' => 20,
                ],
                'help' => 'help.post_content',
                'label' => 'label.content',
            ])
            ->add('publishedAt', DateTimePickerType::class, [
                'label' => 'label.published_at',
                'help' => 'help.post_publication',
            ])
            ->add('tags', TagsInputType::class, [
                'label' => 'label.tags',
                'required' => false,
            ])
            ->addEventListener(FormEvents::SUBMIT, function (FormEvent $event) {
                /** @var Post $post */
                $post = $event->getData();
                if ($post->getSlug() === null && $post->getTitle() !== null) {
                    $post->setSlug((string)$this->slugger->slug($post->getTitle())->lower());
                }
            })
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Post::class,
        ]);
    }
}
