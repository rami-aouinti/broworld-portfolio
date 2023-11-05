<?php

declare(strict_types=1);

namespace App\Form;

use App\Entity\Contact;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add(
                'firstName', TextType::class, [
                'label' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'firstname'
                ]
                ]
            )
            ->add(
                'lastName', TextType::class, [
                'label' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'lastname'
                ]
                ]
            )
            ->add(
                'email', EmailType::class, [
                'label' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'email'
                ]
                ]
            )
            ->add(
                'message', TextareaType::class, [
                'label' => false,
                'attr' => [
                    'class' => 'form-control',
                    'rows' => 3,
                    'placeholder' => 'message'
                ]
                ]
            );
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(
            [
            'data_class' => Contact::class,
            ]
        );
    }
}
