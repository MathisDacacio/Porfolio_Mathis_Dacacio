"use client";
import { useState } from "react";
import styles from "./../styles/aboutme.module.css";

type SectionKey = "actu" | "famille" | "animaux" | "jeux";

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionKey>("actu");

  const sections: Record<SectionKey, JSX.Element> = {
    actu: (
      <div className={styles.contentdiv}>
        <h2 className={styles.pageTitle}>Actualité</h2>
        <br />
        <p>
        Je m'appelle Mathis Dacacio j'ai 19 ans et je suis étudiant en 2eme année à {" "}
          <a
            href="https://www.enigma-school.com/"
            className={styles.linkStyle}
            target="_blank"
          >
            ENIGMA School
          </a>
          . Je suis à la recherche d'un stage en tant que développeur Web de 2 à 3 mois à partir de juin 2025 pouvant aboutir sur une alternance de 12 mois lors de l’année 2025/2026. Et ce dans l'objectif de mettre à profit mes compétences acquises.
        </p>
        <br />
        <img
          src="/Mathis_Dacacio.jpg"
          alt="Mathis Dacacio"
          className={styles.imageStyle}
          height={300}
          width={300}
        />
      </div>
    ),
    famille: (
      <div className={styles.contentdiv}>
        <h2 className={styles.pageTitle}>Famille</h2>
        <br />
        <p>
          Dans ma famille j'ai 2 grands frères. Le premier a 25 ans, il habite maintenant à Annecy (74). 
          Mon autre grand frère a 28 ans, habite à Comelles, une petite commune entre Lyon et Annecy, et est depuis deux ans il est papa. 
          Par conséquent, je suis maintenant {" "}
          <a
            href="https://dictionnaire.lerobert.com/definition/oncle#:~:text=Fr%C3%A8re%20du%20p%C3%A8re%20ou%20de,%E2%9E%99%20tonton."
            className={styles.linkStyle}
            target="_blank"
          >
            tonton
          </a>
          . Il s'appelle Manohé et il est trop trop chou.
        </p>
        <br />
        <img
          src="/Photo_famille.png"
          alt="Famille"
          className={styles.imageStyle}
        />
      </div>
    ),
    animaux: (
      <div className={styles.contentdiv}>
        <h2 className={styles.pageTitle}>Animaux</h2>
        <br />
        <p>
          J'aime les animaux, principalement les chiens, et plus précisément mon chien qui est absolument magnifique (oui, je suis gaga). 
          Il est né le 27 août 2021, donc il a 3 ans et s'appelle Sun (c'était l'année des "S" et c'était son nom de base que nous avons gardé). 
          C'est un mâle {" "}
          <a
            href="https://www.woopets.fr/chien/race/beagle-harrier/"
            className={styles.linkStyle}
            target="_blank"
          >
            beagle Harrier
          </a>
          , un croisé entre un beagle très énergique et un Harrier, un chien de chasse. C'est donc un beagle plus grand, plus costaud et qui chasse.
        </p>
        <br />
        <img
          src="/Photo_sun.jpeg"
          alt="Sun, mon chien"
          className={styles.imageStyle}
        />
      </div>
    ),
    jeux: (
      <div className={styles.contentdiv}>
        <h2 className={styles.pageTitle}>Jeux</h2>
        <br />
        <p>
          Comme beaucoup d'étudiants en informatique, je joue souvent aux jeux vidéo. 
          Mon premier jeu, dès mes 8 ans, a été {" "}
          <a
            href="https://fr.wikipedia.org/wiki/League_of_Legends"
            className={styles.linkStyle}
            target="_blank"
          >
            League of Legends
          </a>
          , auquel je joue toujours plus de 10 ans plus tard. En deuxième position, 
          en termes d'heures de jeu et de chronologie, vient Minecraft, avec un pic d'activité important pendant le confinement. 
          Rocket League et Fortnite sont deux jeux auxquels je joue de temps en temps, tout comme PUBG qui complète mon top 5.
        </p>
        <br />
        <img
          src="/Photo_jeu.png"
          alt="Jeux"
          className={styles.imageStyle}
        />
      </div>
    ),
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Contenu central */}
      <div className="flex-grow p-8">
        <div className="max-w-3xl mx-auto">{sections[activeSection]}</div>
      </div>

      {/* Boutons à droite */}
      <aside className={styles.menuWrapper}>
      <button
          onClick={() => setActiveSection("actu")}
          className={`${styles.menuButton} ${
            activeSection === "actu" ? styles.active : ""
          }`}
        >
          Actualité
        </button>
        <button
          onClick={() => setActiveSection("famille")}
          className={`${styles.menuButton} ${
            activeSection === "famille" ? styles.active : ""
          }`}
        >
          Famille
        </button>
        <button
          onClick={() => setActiveSection("animaux")}
          className={`${styles.menuButton} ${
            activeSection === "animaux" ? styles.active : ""
          }`}
        >
          Animaux
        </button>
        <button
          onClick={() => setActiveSection("jeux")}
          className={`${styles.menuButton} ${
            activeSection === "jeux" ? styles.active : ""
          }`}
        >
          Jeux
        </button>
      </aside>
    </div>
  );
}
