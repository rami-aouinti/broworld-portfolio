<?php

declare(strict_types=1);

namespace App\Form;

use App\Entity\Profile;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProfileType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', TextType::class, [
                'required' => false,
            ])
            ->add('description', TextareaType::class, [
                'required' => false,
            ])
            ->add('birthday', DateType::class, [
                'label' => 'Fin',
                'input' => 'datetime_immutable',
                'widget' => 'single_text',
                'required' => false,
            ])
            ->add('phone', TextType::class, [
                'required' => false,
            ])
            ->add('address', TextType::class, [
                'required' => false,
            ])
            ->add('linkedInUrl', UrlType::class, [
                'required' => false,
            ])
            ->add('googleUrl', UrlType::class, [
                'required' => false,
            ])
            ->add('facebookUrl', UrlType::class, [
                'required' => false,
            ])
            ->add('githubUrl', UrlType::class, [
                'required' => false,
            ])
            ->add('instagramUrl', UrlType::class, [
                'required' => false,
            ])
            ->add('tweeterUrl', UrlType::class, [
                'required' => false,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Profile::class,
        ]);
    }
}
