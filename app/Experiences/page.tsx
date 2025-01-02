"use client";
import { useState } from "react";
import styles from "@/styles/experiences.module.css";

type SectionKey = "education" | "stages" | "cdi";

export default function Experiences() {
  const [activeSection, setActiveSection] = useState<SectionKey>("education");

  const Card = ({
    imageSrc,
    title,
    duration,
    date,
    description,
    competences,
    linkName,
    link = "#",
    isImageLeft,
  }: {
    imageSrc: string;
    title: string;
    duration: string;
    date?: string;
    description: string;
    competences?: string;
    linkName?: string;
    link?: string; // plus tard en not null
    isImageLeft?: boolean;
  }) => (
    <div
      className={`${styles.card} ${styles.cardWrapper} ${styles.cardMargin}`}
    >
      {isImageLeft && (
        <a
          href={link}
          className={`${styles.cardImageWrapper} ${styles.imageHover}`}
          target="_blank"
        >
          <img
            src={imageSrc}
            alt={title}
            className={styles.cardImage}
          />
        </a>
      )}
      <div className={styles.cardTextWrapper}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <span className={styles.cardDuration}>{duration}</span>
        </div>
        <p className={styles.competences}>
          {date} <br />
          {competences}
        </p>
        <br />
        <p className={styles.cardDescription}>
          {description}
        </p>

        <br /><br />
        {isImageLeft && (
          <a
            href={link}
            className={styles.link} 
            target="_blank"
          >
            &lt;-- En savoir plus sur {linkName}
          </a> // &lt = <
        )}
        {!isImageLeft && (
          <a
            href={link}
            className={styles.linkRight}
            target="_blank"
          >
            En savoir plus sur {linkName} --&gt;
          </a>
        )}
        

      </div>
      {!isImageLeft && (
        <a
          href={link}
          className={`${styles.cardImageWrapperRight} ${styles.imageHover}`}
          target="_blank"
        >
          <img
            src={imageSrc}
            alt={title}
            className={styles.cardImage}
          />
        </a>
      )}
    </div>
  );

  const sections: Record<SectionKey, JSX.Element> = {
    education: (
      <div className="space-y-10">
        <Card
          imageSrc="Enigma.png"
          title="Enigma School"
          linkName="Enigma School"
          duration="2023 - Présent"
          description="Enigma School est une école de technologie généraliste, où je suis actuellement en deuxième année de formation. L’approche pédagogique de l’école, axée sur des classes à taille humaine, favorise un suivi personnalisé et un apprentissage interactif. Les cours sont dispensés par des intervenants professionnels issus du monde de l’entreprise, ce qui garantit une formation en phase avec les réalités du marché. J’y apprends à développer des projets complexes en équipe, ce qui me permet de renforcer à la fois mes compétences techniques et ma capacité à collaborer dans un cadre professionnel."
          competences="Compétences: HTML, CSS, Javascript, C, C++, Python, Java, SQL, PHP, CCNA 1, IoT, SEO, Git, Docker, Maths, Anglais"
          link="https://www.enigma-school.com/"
          isImageLeft={true}
        />
        <Card
          imageSrc="epitech-lille.png"
          title="Epitech"
          linkName="Epitech"
          duration="2022 - 2023"
          description="Epitech est une école d'informatique réputée où j’ai suivi une année de formation axée principalement sur le langage C et des cours d'anglais. Bien que cette expérience m’ait permis de renforcer mes compétences en programmation, j’ai choisi de ne pas poursuivre car les méthodes d'apprentissage proposées ne correspondaient pas à mes attentes et à ma manière de travailler."
          competences="Compétences: C, Python, Git, Maths, Anglais"
          link="https://www.epitech.eu/ecole-informatique-lille/"
          isImageLeft={false}
        />
        <Card
          imageSrc="LycéeWatteau.jpg"
          title="Lycée Watteau"
          linkName="le Lycée Watteau"
          duration="2021 - 2022"
          description="Au Lycée Watteau, j'ai suivi un baccalauréat scientifique avec une spécialisation en mathématiques et physique, ce qui m'a permis d’acquérir des compétences solides en raisonnement logique, en résolution de problèmes complexes et en modélisation."
          competences="Compétences: Maths, Anglais"
          link="https://www.education.gouv.fr/annuaire/59307/valenciennes/lycee/0590222w/lycee-watteau.html"
          isImageLeft={true}
        />
      </div>
    ),
    stages: (
      <div className="space-y-10">
        <Card
          imageSrc="RestoDuCoeur.JPG"
          title="Resto du cœur"
          linkName="les Resto du cœur"
          duration="~= 3 mois"
          date="De Juin 2024 à Août 2024"
          competences="Compétences: MySQL, React, Next, CSS"
          description="Lors de mon stage aux Restos du Cœur, au sein de l'antenne départementale des Hauts-de-France, j’ai contribué à un projet en équipe de six personnes visant à développer une API dédiée à la gestion des dons. Cette API permet de stocker efficacement les informations relatives aux dons reçus (montant, donateur, date, etc.) et de les répertorier pour un suivi précis. En tant que développeur web fullstack, j'ai participé à la conception et au développement des interfaces utilisateur ainsi qu'à l'intégration des fonctionnalités backend. Cette expérience a renforcé mes compétences techniques tout en répondant aux besoins concrets d’une organisation solidaire."
          link="https://www.restosducoeur.org/"
          isImageLeft={true}
        />
      </div>
    ),
    cdi: (
      <div className="space-y-10">
        <Card
          imageSrc="magasin-lincroyable.jpg"
          title="Manutentionnaire"
          linkName="l'Incroyable"
          duration="~= 3 mois"
          date="De Juin 2022 à Août 2022"
          description="En tant que manutentionnaire en entrepôt pour l'Incroyable, j'ai été responsable de la réception et de l'expédition des produits, ainsi que de la gestion des stocks dans un entrepôt. Ce travail d'été m'a appris à être rigoureux, à respecter les processus établis et à maintenir un haut niveau d'organisation pour assurer le bon fonctionnement des opérations logistiques."
          link="https://www.lincroyable.fr/"
          isImageLeft={true}
        />
      </div>
    ),
  };

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.pageHeader}>
        <br />
        <h1 className={styles.pageTitle}>
          {activeSection === "education"
            ? "Éducation"
            : activeSection === "stages"
            ? "Stages et Alternances"
            : "CDI / CDD"}
        </h1>
      </header>

      <div className={styles.pageContent}>
        <div className={styles.cardContainer}>{sections[activeSection]}</div>
      </div>

      <aside className={styles.menuWrapper}>
        <button
          onClick={() => setActiveSection("education")}
          className={`${styles.menuButton} ${
            activeSection === "education" ? styles.active : ""
          }`}
        >
          Éducation
        </button>
        <button
          onClick={() => setActiveSection("stages")}
          className={`${styles.menuButton} ${
            activeSection === "stages" ? styles.active : ""
          }`}
        >
          Stages et Alternances
        </button>
        <button
          onClick={() => setActiveSection("cdi")}
          className={`${styles.menuButton} ${
            activeSection === "cdi" ? styles.active : ""
          }`}
        >
          CDI / CDD
        </button>
      </aside>
    </div>
  );
}
