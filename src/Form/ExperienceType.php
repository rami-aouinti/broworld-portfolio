<?php

declare(strict_types=1);

namespace App\Form;

use App\Entity\Experience;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use FOS\CKEditorBundle\Form\Type\CKEditorType;

class ExperienceType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', TextType::class)
            ->add('description', null, [
                'attr' => [
                    'rows' => 20,
                ],
                'help' => 'help.post_content',
                'label' => 'label.content',
            ])
            ->add('company', TextType::class)
            ->add('startedAt', DateType::class, [
                'label' => 'Start',
                'input' => 'datetime_immutable',
                'widget' => 'single_text',
            ])
            ->add('endedAt', DateType::class, [
                'label' => 'End',
                'input' => 'datetime_immutable',
                'widget' => 'single_text',
                'required' => false,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Experience::class,
        ]);
    }
}
