"use client";
import { useState } from "react";
import styles from "./../../styles/competences.module.css";


type CompetenceKey =
  | "Html"
  | "Css"
  | "Javascript"
  | "C"
  | "Cpp"
  | "Python"
  | "Java"
  | "SQL"
  | "Php"
  | "Unreal Engine"
  | "Cybersécurité/Réseau"
  | "SEO"
  | "Logiciels";

export default function Competences() {
  const [activeCompetence, setActiveCompetence] = useState<CompetenceKey | null>(
    null
  );

  const competences: Record<CompetenceKey, JSX.Element> = {
    Html: (
      <CompetenceSection
        title="HTML"
        description="L'HTML est un langage incontournable pour tout développeur web, souvent utilisé pour structurer et remplir les pages web. Cependant, il ne constitue pas le langage principal dans la majorité des projets, qui incluent généralement des technologies complémentaires."
        usedIn="Utilisé dans : Page débutant HTML et beaucoup d'autres projets web"
        projects={[
          {
            name: "Page pour débutant HTML",
            image: "https://via.placeholder.com/100",
            link: "https://github.com/MathisDacacio/Page-pour-d-butant-HTML",
            linksentence: "Voir le projet sur Github",
            date: "2024",
            contexte: "Projet personnel pour ce portfolio",
            description: "Création d'une page web pour débutants en HTML.",
          },
        ]}
      />
    ),
    Css: (
      <CompetenceSection
        title="CSS"
        description="Le CSS est essentiel pour gérer le style des pages web, qu'il s'agisse de définir les couleurs, les tailles, ou les positions des éléments. Il complète parfaitement l'HTML, les deux formant une base incontournable pour le développement web. Ensemble, ils permettent de structurer et de styliser les sites. Cependant, pour des sites interactifs ou dynamiques, une technologie principale, est souvent nécessaire pour enrichir les fonctionnalités et l'expérience utilisateur."
        usedIn="Utilisé dans : Page débutant CSS et beaucoup d'autres projets web"
        projects={[
          {
            name: "Page pour débutant CSS",
            image: "/images/projet-css.png",
            link: "https://github.com/MathisDacacio/Page-pour-debutant-CSS",
            linksentence: "Voir le projet sur Github",
            date: "2024",
            contexte: "Projet personnel pour ce portfolio",
            description: "Création d'un portfolio avec animations et transitions CSS avancées qui retracent les possibilités du CSS.",
          },
        ]}
      />
    ),
    Javascript: (
      <CompetenceSection
        title="JavaScript"
        description="JavaScript permet de rendre les pages web interactives en ajoutant des fonctionnalités dynamiques. Avec React, j’ai la possibilité de créer des interfaces utilisateur modulaires et réactives, en optimisant la gestion des états et des composants. Next.js, basé sur React, offre des avantages supplémentaires tels que le rendu côté serveur (SSR) et la génération de sites statiques (SSG), améliorant ainsi les performances et le SEO des applications web. Ces technologies combinées permettent de développer des applications modernes, rapides et interactives."
        usedIn="Utilisé dans:"
        projects={[
          {
            name: "Resto Dons",
            image: "/images/projet-javascript2.png",
            date: "2024",
            link: "https://github.com/Sterbenfr/CRM",
            linksentence: "Voir le projet sur Github",
            contexte: "Projet en équipe de 6 six personnes, durant mon stage de 3 mois chez les Restos du Coeur",
            description: "Un outil pour manipuler dynamiquement les réceptions de dons.",
          },
          {
            name: "Portfolio Mathis Dacacio",
            image: "/images/projet-javascript.png",
            date: "2025",
            link: "https://github.com/MathisDacacio/Portfolio_Mathis_Dacacio",
            linksentence: "Voir le projet sur Github",
            contexte: "Projet personnel pour accompagner mon CV",
            description: "Dans ce projet j'ai utilisé React.js et Next.js pour créer un portfolio interactif.",
          },
        ]}
      />
    ),
    C: (
      <CompetenceSection
        title="C"
        description="Le C est un langage algorithmique puissant, utilisé pour résoudre des problèmes complexes de manière efficace. Grâce à sa structure simple et sa syntaxe proche de l'assembleur, il permet une gestion fine de la mémoire et un contrôle précis des ressources. C’est un langage idéal pour développer des algorithmes performants, notamment dans des contextes où l’optimisation des ressources est cruciale, comme la programmation système, les applications embarquées, ou les logiciels à forte exigence de performance."
        usedIn="Utilisé dans:"
        projects={[
          {
            name: "Bataille navale",
            image: "/images/projet-c.png",
            date: "2023",
            link: "https://github.com/MathisDacacio/Bataille_Navale_C",
            linksentence: "Voir le projet sur Github",
            contexte: "Projet réalisé lors de mon cursus scolaire",
            description: "Création d'un jeu de bataille navale en C.",
          },
          {
            name: "Casse Brique",
            image: "/images/projet-c2.png",
            date: "2024",
            link: "https://github.com/MathisDacacio/Casse_Brique_C",
            linksentence: "Voir le projet sur Github",
            contexte: "Projet réalisé lors de mon cursus scolaire",
            description: "Création d'un jeu de casse brique en C avec la librairie graphique SDL.",
          },
        ]}
      />
    ),
    Cpp: (
      <CompetenceSection
        title="C++"
        description="C++ est un langage puissant que j'ai utilisé pour des projets de développement de jeux, de programmation système et de calcul scientifique. Ma maîtrise des concepts avancés de C++ me permet de créer des applications performantes et fiables. J'ai utilisé le C++ dans des projet de simulation de circuit électronique et pratiqué des cablages de circuit électronique."
        usedIn="Utilisé dans:"
        projects={[
          {
            name: "Jeu Snake",
            image: "/images/projet-cpp.png",
            date: "2024",
            link: "https://www.tinkercad.com/things/8Q33b7YFgs4-jeu-snake?sharecode=ncGy_kMJmo2T9c6lzfR3fyQLx2LANXMwf36P0B04Pao",
            linksentence: "Voir le projet sur Tinkercad",
            contexte: "Projet realisé lors de mon cursus scolaire",
            description: "Développement d'un jeu Snake avec des alummage LED géré par un ESP32.",
          },
          {
            name: "Station de communication entre M5Stack",
            image: "/images/projet-cpp2.png",
            date: "2024",
            link: "https://github.com/MathisDacacio/Communication-M5stack",
            linksentence: "Voir le projet sur Github",
            contexte: "Projet réalisé lors de mon cursus scolaire",
            description: "Création d'une station de communication entre M5Stack en C++. Un code gère l'état d'une porte, un detecteur de mouvement et une alarme en cas d'intrusion. Un autre gère une lumière de luminosité modifiable. Le suivant communique avec une API pour récupérer la météo et un capteur d'humidité et de température. Enfin, le dernier code gère un écran LCD pour afficher les informations récupérées par les autres codes ainsi qu'établir une connexion wifi avec une interface web.",
          },
          {
            name: "Register 8bits en cascade",
            image: "/images/projet-cpp2.png",
            date: "2024",
            link: "https://www.tinkercad.com/things/0pHT1gI3MbI-register-8bits-en-cascade?sharecode=2jRSAKsvcO8_jFKrAyTK59h1umPIatHwH29IXTNVPBw",
            linksentence: "Voir le projet sur Tinkercad",
            contexte: "Projet réalisé lors de mon cursus scolaire",
            description: "Développement d'un register 8bits en cascade formant un réseaux complexe de courant et de tension.",
          },
          {
            name: "Simulation feu d'un Carrefour",
            image: "/images/projet-cpp2.png",
            date: "2024",
            link: "https://www.tinkercad.com/things/hK3vLGZ3o19-feu-carrefour-pieton?sharecode=8Hp4DbEGBEESsZLNdQcK6Sq6Oa3Y2pZNcbQVE9MSKMg",
            linksentence: "Voir le projet sur Tinkercad",
            contexte: "Projet réalisé lors de mon cursus scolaire",
            description: "Simulation d'un feu de carrefour avec un bouton pour les piétons.",
          },
        ]}
      />
    ),
    Python: (
      <CompetenceSection
        title="Python"
        description="Python est un langage de programmation polyvalent et puissant, particulièrement apprécié pour sa simplicité et sa lisibilité. Grâce à sa syntaxe claire, il permet de développer des algorithmes rapidement et efficacement. Python est largement utilisé dans des domaines variés, tels que l'intelligence artificielle, l'analyse de données, et le développement web."
        usedIn="Utilisé dans:"
        projects={[
          {
            name: "Initiation à pandas",
            image: "/images/projet-python2.png",
            date: "2024",
            link: "https://github.com/MathisDacacio/Pratique-de-Pandas-",
            linksentence: "Voir le projet sur Github",
            contexte: "Projet réalisé lors de mon cursus scolaire",
            description: "Analyse de données avec la bibliothèque pandas en Python.",
          },
          {
            name: "Scrapping IMDb",
            image: "/images/projet-python3.png",
            date: "2024",
            link: "https://github.com/MathisDacacio/Scrapping-en-Python",
            linksentence: "Voir le projet sur Github",
            contexte: "Projet réalisé lors de mon cursus scolaire",
            description: "Scrapping de données sur IMDb avec Python et ranger les données dans un dataframe pandas.",
          },
          {
            name: "Initiation au developpement d'IA",
            image: "/images/projet-python4.png",
            date: "2024",
            link: "https://github.com/MathisDacacio/Initiation-au-developpement-d-IA",
            linksentence: "Voir le projet sur Github",
            contexte: "Projet réalisé lors de mon cursus scolaire",
            description: "Initiation au developpement d'IA avec Python.",
          },
          {
            name: "Battaile navale",
            image: "/images/projet-python.png",
            date: "2024",
            link: "https://github.com/monprofil/projet-python",
            linksentence: "Voir le projet sur Github",
            contexte: "Projet personnel pour ce portfolio",
            description: "Création d'un jeu de bataille navale en Python.",
          },
        ]}
      />
    ),
    Java: (
      <CompetenceSection
        title="Java"
        description="Java est un langage orienté objet, idéal pour développer des algorithmes efficaces et des applications robustes. Grâce à sa syntaxe structurée et sa gestion automatique de la mémoire, il est largement utilisé dans des domaines comme les applications d'entreprise, les systèmes distribués, et les applications mobiles Android."
        usedIn="Utilisé dans:"
        projects={[
          {
            name: "Battaile navale",
            image: "/images/projet-java.png",
            date: "2024",
            link: "https://github.com/MathisDacacio/Bataille_Navale_Java",
            linksentence: "Voir le projet sur Github",
            contexte: "Projet réalisé lors de mon cursus scolaire",
            description: "Création d'un jeu de bataille navale en Java.",
          },
          {
            name: "Zoo",
            image: "/images/projet-java2.png",
            link: "#",
            date: "2024",
            contexte: "Projet réalisé lors de mon cursus scolaire",
            description: "Développement d'une application de gestion de zoo en programation orienté objet (POO) en Java.",
          },
        ]}
      />
    ),
    SQL: (
      <CompetenceSection
        title="SQL"
        description="SQL (Structured Query Language) est un langage utilisé pour gérer et manipuler des bases de données relationnelles. Il permet de définir, interroger, insérer, mettre à jour et supprimer des données, offrant ainsi des moyens puissants pour traiter des informations complexes de manière structurée et efficace. De nos jours, presque tous les sites web utilisent des bases de données SQL pour stocker et gérer leurs données."
        usedIn="Utilisé dans:"
        projects={[
          {
            name: "Restos Dons",
            image: "/images/projet-sql.png",
            date: "2024",
            link: "https://github.com/Sterbenfr/CRM",
            linksentence: "Voir le projet sur Github",  
            contexte: "Projet en équipe de 6 six personnes, durant mon stage de 3 mois chez les Restos du Coeur",
            description: "Un outil pour manipuler dynamiquement les réceptions de dons.",
          },
          {
            name: "My_Instagram",
            image: "/images/projet-sql2.png",
            date: "2024",
            link: "https://github.com/MathisDacacio/Instagram_php/tree/main/Instagram",
            linksentence: "Voir le projet sur Github",
            contexte: "Projet realisé lors de mon cursus scolaire",
            description: "Développement d'un blog personnel inspiré d'instagram avec PHP.",
          },
        ]}
      />
    ),
    Php: (
      <CompetenceSection
        title="PHP"
        description="PHP est un langage de programmation côté serveur, largement utilisé pour créer des sites web dynamiques et interactifs. Il permet de générer du contenu HTML, de gérer des bases de données SQL et d'intégrer des fonctionnalités avancées sur le web."
        usedIn="Utilisé dans : Projets personnels, hackathons"
        projects={[
          {
            name: "My_Instagram",
            image: "/images/projet-php.png",
            date: "2024",
            link: "https://github.com/MathisDacacio/Instagram_php/tree/main/Instagram",
            linksentence: "Voir le projet sur Github",
            contexte: "Projet realisé lors de mon cursus scolaire",
            description: "Développement d'un blog personnel inspiré d'instagram avec MySQL.",
          },
        ]}
      />
    ),
    "Unreal Engine": (
      <CompetenceSection
        title="Unreal Engine"
        description="Unreal Engine est un moteur de jeu puissant utilisé pour créer des jeux vidéo, des simulations, et des expériences interactives en 3D. Grâce à ses graphismes haute qualité et à son système de programmation visuel, Blueprint, Unreal Engine permet de développer des applications immersives et performantes, tant pour les jeux que pour des projets en réalité virtuelle ou augmentée."
        usedIn="Utilisé dans:"
        projects={[
          {
            name: "Koruss",
            image: "/images/projet-unreal.png",
            date: "2024",
            contexte: "Projet personnel fait par amour des jeux vidéo",
            description: "Développement d'un jeu à monde ouvert en 3D avec Unreal Engine.",
          },
        ]}
      />
    ),
    "Cybersécurité/Réseau": (
      <CompetenceSection
        title="Cybersécurité/Réseau"
        description="La cybersécurité et le réseau sont des domaines clés pour garantir la protection des systèmes informatiques et des échanges de données. La cybersécurité englobe les techniques visant à prévenir les attaques, à sécuriser les infrastructures et à protéger les informations sensibles. Les réseaux, essentiels pour interconnecter des systèmes, nécessitent une gestion rigoureuse pour assurer la fiabilité, la performance et la sécurité des communications."
        usedIn="Utilisé dans:"
        projects={[
          {
            name: "CCNA 1",
            image: "/images/projet-ccna.png",
            date: "2024",
            contexte: "Examen passé lors de ma formation en réseau",
            description: "Certification Cisco CCNA 1 : Notions de base sur les réseaux.",
          },
        ]}
      />
    ),
    SEO: (
      <CompetenceSection
        title="SEO"
        description="Le SEO (Search Engine Optimization) regroupe les techniques visant à améliorer la visibilité et le positionnement d’un site web dans les résultats des moteurs de recherche. En optimisant le contenu, les mots-clés, la structure des pages, et les performances du site, le SEO permet d'attirer un trafic organique de qualité et d’augmenter la notoriété en ligne."
        usedIn="Utilisé dans: Porfolio Dacacio Mathis et beaucoup d'autres projets"
        projects={[
          {
            name: "Porfolio Mathis Dacacio",
            image: "/images/projet-javascript.png",
            date: "2024",
            link: "https://github.com/monprofil/projet-javascript",
            linksentence: "Voir le projet sur Github",
            contexte: "Projet personnel pour accompagner mon CV",
            description: "Dans ce projet j'ai utilisé mes connaissancess en SEO pour optimiser le référencement de mon portfolio.",
          },
        ]}
      />
    ),
    Logiciels: (
      <CompetenceSection
        title="Logiciels"
        description="J'ai eu l'opportunité de travailler avec divers logiciels informatiques essentiels au développement moderne, allant des plateformes de gestion de code et de collaboration, aux outils de virtualisation et de conteneurisation. Ces expériences m’ont permis de maîtriser des solutions adaptées à chaque étape du cycle de développement, qu’il s’agisse de versionner du code, de déployer des applications dans des environnements cohérents"
        usedIn="Utilisé dans:"
        projects={[
          {
            name: "Git",
            image: "/images/projet-iot.png",
            link: "https://github.com/MathisDacacio",
            linksentence: "Voir mon profil Github",
            date: "2022",
            contexte: "J'ai commencé à utilisé Github en 2022.",
            description: "Github est un outil de gestion de code source et de collaboration que j'utilise pour stocker mes projets et travailler en équipe.",
          },
          {
            name: "Docker",
            image: "/images/projet-iot2.png",
            link: "https://github.com/CommodiTroc/siteweb",
            linksentence: "Voir le projet sur Github",
            date: "2024",
            contexte: "J'ai utilisé Docker dans un projet dit réaliste en 2024.",
            description: "Docker est un outil de conteneurisation que j'ai utilisé pour déployer des applications dans des environnements isolés et cohérents.",
          },
        ]}
      />
    ),

  };

  return (
    <div className={styles.pageWrapper}>
      {/* Contenu central */}
      <div className="flex-grow p-8 overflow-y-auto">
        {activeCompetence ? (
          <div className="max-w-3xl mx-auto">{competences[activeCompetence]}</div>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold">Compétences</h2>
            <br />
            <p>
              Découvrez mes compétences techniques à travers des projets concrets que j'ai réalisés.
            </p>
            <br />
            <p>
              Cliquez sur une compétence pour en savoir plus. --&gt;
            </p>
          </div>
        )}
      </div>

      {/* Boutons de compétences */}
      <aside className={styles.menuWrapper}>
        {Object.keys(competences).map((key) => (
          <button
            key={key}
            onClick={() => setActiveCompetence(key as CompetenceKey)}
            className={`${styles.menuButton} ${
              activeCompetence === key ? styles.active : ""
            }`}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </aside>
    </div>
  );
}

// Composant pour une section de compétence
function CompetenceSection({
  title,
  description,
  usedIn,
  projects,
}: {
  title: string;
  description: string;
  usedIn: string;
  projects: { name: string; image: string; link?: string; linksentence?: string; date: string; contexte: string; description: string }[];
}) {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p>{description}</p>
      <p className="font-semibold">{usedIn}</p>
      <hr className="border-t border-white opacity-40" />
      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            date={project.date}
            contexte={project.contexte}
            image={project.image}
            link={project.link}
            linksentence={project.linksentence}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  name,
  image,
  link,
  linksentence,
  date,
  contexte,
  description,
}: {
  name: string;
  image: string;
  link?: string;
  linksentence?: string;
  date: string;
  contexte: string;
  description: string;
}) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0">
      <img src={image} alt={name} className="w-full md:w-48 h-48 object-cover" />
      <div className="p-4 space-y-2 flex-grow">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-gray-400">{date}</p>
        <p className="text-sm text-gray-400">{contexte}</p>
        <p className="text-sm text-gray-400">{description}</p>
        {link && linksentence && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-400"
          >
            {linksentence}
          </a>
        )}
      </div>
    </div>
  );
}

/*
Html: (
      <CompetenceSection
        title="HTML"
        description="L'HTML est un langage incontournable pour tout développeur web, souvent utilisé pour structurer et remplir les pages web. Cependant, il ne constitue pas le langage principal dans la majorité des projets, qui incluent généralement des technologies complémentaires."
        usedIn="Utilisé dans : Page débutant HTML et beaucoup d'autres projets web"
        projects={[
          {
            name: "Page pour débutant HTML",
            image: "https://via.placeholder.com/100",
            link: "https://github.com/monprofil/projet-css",
            date: "2024",
            contexte: "Projet personnel pour ce portfolio",
            description: "Création d'une page web pour débutants en HTML.",
          },
        ]}
      />
    ),
    Css: (
      <CompetenceSection
        title="CSS"
        description="Le CSS est essentiel pour gérer le style des pages web, qu'il s'agisse de définir les couleurs, les tailles, ou les positions des éléments. Il complète parfaitement l'HTML, les deux formant une base incontournable pour le développement web. Ensemble, ils permettent de structurer et de styliser les sites. Cependant, pour des sites interactifs ou dynamiques, une technologie principale, est souvent nécessaire pour enrichir les fonctionnalités et l'expérience utilisateur."
        usedIn="Utilisé dans : Page débutant CSS et beaucoup d'autres projets web"
        projects={[
          {
            name: "Page pour débutant CSS",
            image: "/images/projet-css.png",
            link: "https://github.com/monprofil/projet-css",
            date: "2024",
            contexte: "Projet personnel pour ce portfolio",
            description: "Création d'un portfolio avec animations et transitions CSS avancées.",
          },
        ]}
      />
    ),
    Javascript: (
      <CompetenceSection
        title="JavaScript"
        description="JavaScript permet de rendre les pages web interactives en ajoutant des fonctionnalités dynamiques. Avec React, j’ai la possibilité de créer des interfaces utilisateur modulaires et réactives, en optimisant la gestion des états et des composants. Next.js, basé sur React, offre des avantages supplémentaires tels que le rendu côté serveur (SSR) et la génération de sites statiques (SSG), améliorant ainsi les performances et le SEO des applications web. Ces technologies combinées permettent de développer des applications modernes, rapides et interactives."
        usedIn="Utilisé dans:"
        projects={[
          {
            name: "Resto Dons",
            image: "/images/projet-javascript2.png",
            date: "2024",
            link: "https://github.com/monprofil/projet-dom",
            contexte: "Projet en équipe de 6 six personnes, durant mon stage de 3 mois chez les Restos du Coeur",
            description: "Un outil pour manipuler dynamiquement le DOM.",
          },
          {
            name: "Porfolio Mathis Dacacio",
            image: "/images/projet-javascript.png",
            date: "2024",
            link: "https://github.com/monprofil/projet-javascript",
            contexte: "Projet personnel pour accompagner mon CV",
            description: "Développement d'un jeu Snake interactif en JavaScript pur.",
          },
        ]}
      />
    ),
    C: (
      <CompetenceSection
        title="C"
        description="Le C est un langage algorithmique puissant, utilisé pour résoudre des problèmes complexes de manière efficace. Grâce à sa structure simple et sa syntaxe proche de l'assembleur, il permet une gestion fine de la mémoire et un contrôle précis des ressources. C’est un langage idéal pour développer des algorithmes performants, notamment dans des contextes où l’optimisation des ressources est cruciale, comme la programmation système, les applications embarquées, ou les logiciels à forte exigence de performance."
        usedIn="Utilisé dans:"
        projects={[
          {
            name: "Bataille navale",
            image: "/images/projet-c.png",
            date: "2023",
            link: "#",
            contexte: "Projet réalisé lors de mon cursus scolaire",
            description: "Implémentation d'un système de fichiers simple en C.",
          },
          {
            name: "Casse Brique",
            image: "/images/projet-c2.png",
            date: "2024",
            link: "#",
            contexte: "Projet réalisé lors de mon cursus scolaire",
            description: "Création d'une API REST pour un service de streaming.",
          },
        ]}
      />
    ),
    Cpp: (
      <CompetenceSection
        title="C++"
        description="C++ est un langage puissant que j'ai utilisé pour des projets de développement de jeux, de programmation système et de calcul scientifique. Ma maîtrise des concepts avancés de C++ me permet de créer des applications performantes et fiables."
        usedIn="Utilisé dans:"
        projects={[
          {
            name: "Jeu Snake",
            image: "/images/projet-cpp.png",
            date: "2024",
            link: "https://www.tinkercad.com/things/8Q33b7YFgs4-jeu-snake?sharecode=ncGy_kMJmo2T9c6lzfR3fyQLx2LANXMwf36P0B04Pao",
            contexte: "Projet realisé lors de mon cursus scolaire",
            description: "Développement d'un jeu de plateforme en C++ avec SFML.",
          },
          {
            name: "Station de communication entre M5Stack",
            image: "/images/projet-cpp2.png",
            date: "2024",
            link: "#",
            contexte: "Projet réalisé lors de mon cursus scolaire",
            description: "Implémentation d'algorithmes de calcul scientifique en C++.",
          },
          {
            name: "Register 8bits en cascade",
            image: "/images/projet-cpp2.png",
            date: "2024",
            link: "https://www.tinkercad.com/things/0pHT1gI3MbI-register-8bits-en-cascade?sharecode=2jRSAKsvcO8_jFKrAyTK59h1umPIatHwH29IXTNVPBw",
            contexte: "Projet réalisé lors de mon cursus scolaire",
            description: "Implémentation d'algorithmes de calcul scientifique en C++.",
          },
          {
            name: "Simulation feu d'un Carrefour",
            image: "/images/projet-cpp2.png",
            date: "2024",
            link: "https://www.tinkercad.com/things/hK3vLGZ3o19-feu-carrefour-pieton?sharecode=8Hp4DbEGBEESsZLNdQcK6Sq6Oa3Y2pZNcbQVE9MSKMg",
            contexte: "Projet réalisé lors de mon cursus scolaire",
            description: "Implémentation d'algorithmes de calcul scientifique en C++.",
          },
        ]}
      />
    ),
    Python: (
      <CompetenceSection
        title="Python"
        description="Python est un langage de programmation polyvalent et puissant, particulièrement apprécié pour sa simplicité et sa lisibilité. Grâce à sa syntaxe claire, il permet de développer des algorithmes rapidement et efficacement. Python est largement utilisé dans des domaines variés, tels que l'intelligence artificielle, l'analyse de données, et le développement web."
        usedIn="Utilisé dans:"
        projects={[
          {
            name: "Battaile navale",
            image: "/images/projet-python.png",
            date: "2024",
            link: "https://github.com/monprofil/projet-python",
            contexte: "Projet personnel pour ce portfolio",
            description: "Création d'un script pour scraper des données sur un site web.",
          },
        ]}
      />
    ),
    Java: (
      <CompetenceSection
        title="Java"
        description="Java est un langage orienté objet, idéal pour développer des algorithmes efficaces et des applications robustes. Grâce à sa syntaxe structurée et sa gestion automatique de la mémoire, il est largement utilisé dans des domaines comme les applications d'entreprise, les systèmes distribués, et les applications mobiles Android."
        usedIn="Utilisé dans:"
        projects={[
          {
            name: "Battaile navale",
            image: "/images/projet-java.png",
            date: "2024",
            link: "#",
            contexte: "Projet réalisé lors de mon cursus scolaire",
            description: "Développement d'une application Android pour la gestion de tâches.",
          },
          {
            name: "Zoo",
            image: "/images/projet-java2.png",
            link: "#",
            date: "2024",
            contexte: "Projet réalisé lors de mon cursus scolaire",
            description: "Implémentation d'algorithmes de traitement d'images en Java.",
          },
        ]}
      />
    ),
    SQL: (
      <CompetenceSection
        title="SQL"
        description="SQL (Structured Query Language) est un langage utilisé pour gérer et manipuler des bases de données relationnelles. Il permet de définir, interroger, insérer, mettre à jour et supprimer des données, offrant ainsi des moyens puissants pour traiter des informations complexes de manière structurée et efficace. De nos jours, presque tous les sites web utilisent des bases de données SQL pour stocker et gérer leurs données."
        usedIn="Utilisé dans:"
        projects={[
          {
            name: "Restos Dons",
            image: "/images/projet-sql.png",
            date: "2024",
            link: "#",
            contexte: "Projet réalisé lors de mon stage de 3 mois chez les Restos du Coeur",
            description: "Conception d'une base de données pour une application de gestion de bibliothèque.",
          },
          {
            name: "My_Instagram",
            image: "/images/projet-sql2.png",
            date: "2024",
            link: "#",
            contexte: "Projet realisé lors de mon cursus scolaire",
            description: "Requêtes SQL complexes pour l'analyse de données financières.",
          },
        ]}
      />
    ),
    Php: (
      <CompetenceSection
        title="PHP"
        description="PHP est un langage de programmation côté serveur, largement utilisé pour créer des sites web dynamiques et interactifs. Il permet de générer du contenu HTML, de gérer des bases de données SQL et d'intégrer des fonctionnalités avancées sur le web."
        usedIn="Utilisé dans : Projets personnels, hackathons"
        projects={[
          {
            name: "My_Instagram",
            image: "/images/projet-php.png",
            date: "2024",
            link: "#",
            contexte: "Projet realisé lors de mon cursus scolaire",
            description: "Création d'un blog personnel avec PHP et MySQL.",
          },
        ]}
      />
    ),
    "Unreal Engine": (
      <CompetenceSection
        title="Unreal Engine"
        description="Unreal Engine est un moteur de jeu puissant utilisé pour créer des jeux vidéo, des simulations, et des expériences interactives en 3D. Grâce à ses graphismes haute qualité et à son système de programmation visuel, Blueprint, Unreal Engine permet de développer des applications immersives et performantes, tant pour les jeux que pour des projets en réalité virtuelle ou augmentée."
        usedIn="Utilisé dans:"
        projects={[
          {
            name: "Koruss",
            image: "/images/projet-unreal.png",
            date: "2024",
            contexte: "Projet personnel pour ce portfolio",
            description: "Développement d'un jeu de tir à la première personne avec Unreal Engine.",
          },
        ]}
      />
    ),
    "Cybersécurité/Réseau": (
      <CompetenceSection
        title="Cybersécurité/Réseau"
        description="La cybersécurité et le réseau sont des domaines clés pour garantir la protection des systèmes informatiques et des échanges de données. La cybersécurité englobe les techniques visant à prévenir les attaques, à sécuriser les infrastructures et à protéger les informations sensibles. Les réseaux, essentiels pour interconnecter des systèmes, nécessitent une gestion rigoureuse pour assurer la fiabilité, la performance et la sécurité des communications."
        usedIn="Utilisé dans:"
        projects={[
          {
            name: "CCNA 1",
            image: "/images/projet-ccna.png",
            link: "#",
            description: "Configuration d'un réseau local avec des routeurs et des commutateurs Cisco.",
          },
        ]}
      />
    ),
    SEO: (
      <CompetenceSection
        title="SEO"
        description="Le SEO (Search Engine Optimization) regroupe les techniques visant à améliorer la visibilité et le positionnement d’un site web dans les résultats des moteurs de recherche. En optimisant le contenu, les mots-clés, la structure des pages, et les performances du site, le SEO permet d'attirer un trafic organique de qualité et d’augmenter la notoriété en ligne."
        usedIn="Utilisé dans: Porfolio Dacacio Mathis et beaucoup d'autres projets"
        projects={[
          {
            name: "Porfolio Mathis Dacacio",
            image: "/images/projet-javascript.png",
            date: "2024",
            link: "https://github.com/monprofil/projet-javascript",
            contexte: "Projet personnel pour accompagner mon CV",
            description: "Développement d'un jeu Snake interactif en JavaScript pur.",
          },
        ]}
      />
    ),
    Logiciels: (
      <CompetenceSection
        title="Logiciels"
        description="J'ai eu l'opportunité de travailler avec divers logiciels informatiques essentiels au développement moderne, allant des plateformes de gestion de code et de collaboration, aux outils de virtualisation et de conteneurisation. Ces expériences m’ont permis de maîtriser des solutions adaptées à chaque étape du cycle de développement, qu’il s’agisse de versionner du code, de déployer des applications dans des environnements cohérents"
        usedIn="Utilisé dans:"
        projects={[
          {
            name: "Git",
            image: "/images/projet-iot.png",
            link: "#",
            contexte: "Github est un outil de gestion de code source et de collaboration que j'ai commencé à utilisé en 2022.",
            description: "Développement d'un système de surveillance à l'aide de capteurs IoT.",
          },
          {
            name: "Docker",
            image: "/images/projet-iot2.png",
            link: "#",
            contexte: "Docker est un outil de conteneurisation que j'ai utilisé pour déployer des applications en 2024.",
            description: "Création d'un système de suivi d'actifs en temps réel avec des microcontrôleurs.",
          },
        ]}
      />
    ),

*/