<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\ProfileRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ProfileRepository::class)]
class Profile
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups('get')]
    private ?string $title = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups('get')]
    private ?string $description = null;

    #[ORM\Column(type: Types::DATE_IMMUTABLE)]
    #[Groups('get')]
    private ?\DateTimeInterface $birthday = null;

    #[ORM\Column(length: 255)]
    #[Groups('get')]
    private ?string $phone = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups('get')]
    private ?string $address = null;

    #[ORM\OneToOne(inversedBy: 'profile', cascade: ['persist', 'remove'])]
    private ?User $user = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups('get')]
    private ?string $linkedInUrl = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups('get')]
    private ?string $googleUrl = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups('get')]
    private ?string $facebookUrl = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups('get')]
    private ?string $githubUrl = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups('get')]
    private ?string $instagramUrl = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $tweeterUrl = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getBirthday(): ?\DateTimeInterface
    {
        return $this->birthday;
    }

    public function setBirthday(\DateTimeInterface $birthday): static
    {
        $this->birthday = $birthday;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): static
    {
        $this->phone = $phone;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): static
    {
        $this->address = $address;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function getLinkedInUrl(): ?string
    {
        return $this->linkedInUrl;
    }

    public function setLinkedInUrl(?string $linkedInUrl): static
    {
        $this->linkedInUrl = $linkedInUrl;

        return $this;
    }

    public function getGoogleUrl(): ?string
    {
        return $this->googleUrl;
    }

    public function setGoogleUrl(string $googleUrl): static
    {
        $this->googleUrl = $googleUrl;

        return $this;
    }

    public function getFacebookUrl(): ?string
    {
        return $this->facebookUrl;
    }

    public function setFacebookUrl(string $facebookUrl): static
    {
        $this->facebookUrl = $facebookUrl;

        return $this;
    }

    public function getGithubUrl(): ?string
    {
        return $this->githubUrl;
    }

    public function setGithubUrl(string $githubUrl): static
    {
        $this->githubUrl = $githubUrl;

        return $this;
    }

    public function getInstagramUrl(): ?string
    {
        return $this->instagramUrl;
    }

    public function setInstagramUrl(string $instagramUrl): static
    {
        $this->instagramUrl = $instagramUrl;

        return $this;
    }

    public function getTweeterUrl(): ?string
    {
        return $this->tweeterUrl;
    }

    public function setTweeterUrl(string $tweeterUrl): static
    {
        $this->tweeterUrl = $tweeterUrl;

        return $this;
    }
}
