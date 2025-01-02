export default function Bio() {
  return (
    <aside className="w-1/6 bg-gray-800 p-6 fixed h-auto shadow-lg rounded-lg">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-yellow-500">Biographie</h2>
        <p>
          Étudiant en 2ème année à ENIGMA School. Je suis à la recherche d'un stage en tant que développeur Web de 3 mois à partir de juin 2025 pouvant aboutir sur une alternance de 12 mois lors de l’année 2025/2026. Dans l'objectif de mettre à profit mes compétences acquises durant mes deux premières années d'études.
        </p>
        <br />

        {/* Informations supplémentaires */}
        <div className="space-y-4">
          {/* Âge */}
          <div className="flex items-center">
            <img
              src="/icons/age-icon.png" // Remplacez par l'icône de votre choix
              alt="Âge"
              className="w-6 h-6 mr-2"
            />
            <span className="text-white">20 ans</span>
          </div>
          <br />

          {/* Adresse */}
          <div className="flex items-center">
            <img
              src="/icons/location-icon.png" // Remplacez par l'icône de votre choix
              alt="Adresse"
              className="w-6 h-6 mr-2"
            />
            <span className="text-white">Le Quesnoy (59530), France</span>
          </div>
        </div>
        <br />
        
        {/* Boutons */}
        <div className="space-y-4">
          <a
            href="/Contact"
            className="block text-center p-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
          >
            Contact Me
          </a>

          <a
            href="/DACACIO_Mathis.pdf"
            download
            className="block text-center p-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-300"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </aside>
  );
}
