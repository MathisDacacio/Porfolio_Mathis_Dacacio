
/*

  Compétences:
    bouton en hidden
    pour chaque compétence un projet avec: une photo/lien github/description du projet
    - HTML
    - CSS
    - Javascript
    - Node
    - C
    - PHP
    - Python
    - Java
    - SQL
    - React
    - Réseau & Cybersécurité
  
  Home:
    une div au centre de la page qui contient un contenu choisi a l'aide de bouton sur la droite de la page grace a des hidden
    petite bio de moi + lien vers /contact a gauche de la page

  Contact me:
    github, linkedin, mail, telephone, CV

  Expériences:
    education: 
      - Lycée Watteau
      - Epitech
      - Enigma School
    stages & alternance:
      - resto du coeur
    CDI/CDD:
      aucun


*/
"use client";
import { useState } from "react";

type SectionKey = "famille" | "animaux" | "jeux";

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionKey>("famille");

  const sections: Record<SectionKey, JSX.Element> = {
    famille: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Famille</h2>
        <p>
          Dans ma famille j'ai 2 grands frères. Le premier a 24 ans et c'est lui qui m'a fait découvrir League of Legends, il habite maintenant à Annecy (74). 
          Mon autre grand frère a 27 ans, habite à Comelles, une petite commune entre Lyon et Annecy, et est depuis un peu plus d'un an papa. 
          Par conséquent, je suis maintenant{" "}
          <a
            href="https://dictionnaire.lerobert.com/definition/oncle#:~:text=Fr%C3%A8re%20du%20p%C3%A8re%20ou%20de,%E2%9E%99%20tonton."
            style={{ color: "#4682B4", fontSize: "23px" }}
            target="_blank"
          >
            tonton
          </a>
          . Il s'appelle Manohé et il est trop trop chou.
        </p>
        <img
          src="/Photo_famille.png"
          alt="Famille"
          className="rounded-md shadow-lg w-full h-auto"
        />
      </div>
    ),
    animaux: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Animaux</h2>
        <p>
          J'aime les animaux, principalement les chiens, et plus précisément mon chien qui est absolument magnifique (oui, je suis gaga). 
          Il est né le 27 août 2021, donc il a 2 ans et s'appelle Sun (c'était l'année des "S" et c'était son nom de base que nous avons gardé). 
          C'est un mâle{" "}
          <a
            href="https://www.woopets.fr/chien/race/beagle-harrier/"
            style={{ color: "#4682B4", fontSize: "23px" }}
            target="_blank"
          >
            beagle Harrier
          </a>
          , un croisé entre un beagle très énergique et un Harrier, un chien de chasse. C'est donc un beagle plus grand, plus costaud et qui chasse.
        </p>
        <img
          src="/Photo_sun.jpeg"
          alt="Sun, mon chien"
          className="rounded-md shadow-lg w-full h-auto"
        />
      </div>
    ),
    jeux: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Jeux</h2>
        <p>
          Comme beaucoup d'étudiants en informatique, je joue souvent aux jeux vidéo. 
          Mon premier jeu, dès mes 8 ans, a été{" "}
          <a
            href="https://fr.wikipedia.org/wiki/League_of_Legends"
            style={{ color: "#4682B4", fontSize: "23px" }}
            target="_blank"
          >
            League of Legends
          </a>
          , auquel je joue toujours plus de 10 ans plus tard. En deuxième position, 
          en termes d'heures de jeu et de chronologie, vient Minecraft, avec un pic d'activité important pendant le confinement. 
          Rocket League et Fortnite sont deux jeux auxquels je joue de temps en temps, contrairement à PUBG, mais il reste dans mon top 5.
        </p>
        <img
          src="/Photo_jeu.png"
          alt="Jeux"
          className="rounded-md shadow-lg w-full h-auto"
        />
      </div>
    ),
  };

  return (
    <div className="flex h-screen bg-bodyColor text-white">
      {/* Contenu central défilable */}
      <div className="flex-grow p-8">
        <div className="max-w-3xl mx-auto">{sections[activeSection]}</div>
      </div>

      {/* Boutons à droite */}
      <aside className="flex flex-col space-y-4 fixed right-4 top-1/4 bg-white shadow-lg rounded-md p-4">
        <button
          onClick={() => setActiveSection("famille")}
          className={`p-3 rounded-md flex items-center justify-center transition-all duration-300 ${
            activeSection === "famille"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          Famille
        </button>
        <button
          onClick={() => setActiveSection("animaux")}
          className={`p-3 rounded-md flex items-center justify-center transition-all duration-300 ${
            activeSection === "animaux"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          Animaux
        </button>
        <button
          onClick={() => setActiveSection("jeux")}
          className={`p-3 rounded-md flex items-center justify-center transition-all duration-300 ${
            activeSection === "jeux"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          Jeux
        </button>
      </aside>
    </div>
  );
}
