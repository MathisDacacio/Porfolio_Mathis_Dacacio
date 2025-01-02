"use client";
import React from "react";

// Composant pour les liens
const HeaderLink = ({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) => (
  <a
    href={href}
    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-black"
    rel="noopener noreferrer"
  >
    <h2 className="mb-3 text-2xl font-semibold">{title}</h2>
    <p className="m-0 max-w-[30ch] text-sm opacity-50">{description}</p>
  </a>
);

export default function Header() {
  return (
    <header className="flex flex-col lg:flex-row items-center justify-center lg:justify-center p-10 bg-gray-800 text-white">
      {/* Photo profil */}
      <div className="mb-8 lg:mb-0 lg:flex lg:items-center lg:mr-10">
        <img
          src="/Mathis_Dacacio.jpg"
          alt="Mathis Dacacio"
          className="w-32 h-32 rounded-full object-cover border-4 border-white"
        />
      </div>

      {/* Section des liens */}
      <div className="grid text-center lg:max-w-5xl lg:w-full lg:grid-cols-4 lg:text-left">
        {/* Lien vers la page d'accueil */}
        <HeaderLink
          href="/"
          title="A propos de moi"
          description="Retour à la page principale. Apprenez-en plus sur moi et mes loisirs."
        />

        {/* Lien vers la page 'Competences' */}
        <HeaderLink
          href="/Competences"
          title="Compétences"
          description="Explorez mes compétences."
        />

        {/* Lien vers la page 'Experience' */}
        <HeaderLink
          href="/Experiences"
          title="Expériences"
          description="Plongez dans mon parcours professionnel."
        />

        {/* Lien vers la page 'Contact' */}
        <HeaderLink
          href="/Contact"
          title="Contact"
          description="Découvrez comment entrer en contact avec moi."
        />
      </div>
    </header>
  );
}
