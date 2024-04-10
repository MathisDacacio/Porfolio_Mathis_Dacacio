import Image from "next/image";
import Footer from "./footer";
import Header from "./header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between bg-black p-24 text-white">

        <div style={{textAlign: "center", fontSize: '20px'}}>
          <br />
          <p>Je m'appelle <span style={{color: '#FFFF00', fontSize: '28px'}}>Mathis Dacacio</span> je suis actuellement en 1er année à ENIGMA <a href="https://fr.wikipedia.org/wiki/Lille" style={{color: '#4682B4', fontSize: '23px'}} target="_blank">Lille</a>.</p>
          <p>J'ai 19 ans et je suis passionné d'<a href="https://fr.wikipedia.org/wiki/Informatique" style={{color: '#4682B4', fontSize: '23px'}} target="_blank">informatique</a>.</p><br />
        </div>

        <Image
              className="rounded-xl"
              src="/Mathis_Dacacio.jpg"
              alt="Photo de Mathis Dacacio"
              width={300}
              height={100}
              priority
        />

        <br /><br />
        
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        {/* Mes Compétences */}
        <div style={{backgroundColor: '#808080', color: 'black', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', textAlign: 'center', marginBottom: '20px', width: '100%'}}>
          <div>
            <h2 style={{margin: '0 0 20px 0', fontSize: '24px', fontWeight: 'bold', textDecoration: 'underline'}}>Mes Compétences</h2>
            <br />
            <p style={{margin: '0 0 20px 0' }}>J'ai des compétences en:</p>
            <br />
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
            <ul style={{listStyleType: 'none', padding: 0, margin: 0, width: '50%'}}>
              <li>HTML</li><br />
              <li>CSS</li><br />
              <li>Javascript</li><br />
              <li>Node</li><br />
              <li>C</li><br />
            </ul>
            <ul style={{listStyleType: 'none', padding: 0, margin: 0, width: '50%'}}>
              <li>Python</li><br />
              <li>Java</li><br />
              <li>SQL</li><br />
              <li>React</li><br />
              <li>Réseau & Cybersécurité</li><br />
            </ul>
          </div>
        </div>

        {/* Mes Soft skills */}
        <div style={{backgroundColor: '#808080', color: 'black', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', textAlign: 'center', marginBottom: '20px', width: '100%'}}>
          <div>
            <h2 style={{margin: '0 0 20px 0', fontSize: '24px', fontWeight: 'bold', textDecoration: 'underline'}}>Mes Soft skills</h2>
            <br />
          </div>
          <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
            <ul style={{listStyleType: 'none', padding: 0, margin: 0}}>
              <li>Autonome</li><br />
              <li>Curieux</li><br />
              <li>Rigoureux</li><br />
              <li>Travail d'équipe</li><br />
            </ul>
          </div>
        </div>

        {/* Mes Langues */}
        <div style={{backgroundColor: '#808080', color: 'black', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', textAlign: 'center', marginBottom: '20px', width: '100%'}}>
          <div>
            <h2 style={{margin: '0 0 20px 0', fontSize: '24px', fontWeight: 'bold', textDecoration: 'underline'}}>Mes Langues</h2>
            <br />
          </div>
          <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
            <ul style={{listStyleType: 'none', padding: 0, margin: 0}}>
              <li>Français</li><br />
              <li>Anglais(B1)</li><br />
            </ul>
          </div>
        </div>

        {/* Mon Parcours */}
        <div style={{backgroundColor: '#808080', color: 'black', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', textAlign: 'center', marginBottom: '20px', width: '100%'}}>
          <div>
            <h2 style={{margin: '0 0 20px 0', fontSize: '24px', fontWeight: 'bold', textDecoration: 'underline'}}>Mon Parcours</h2>
            <br />
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <ul style={{listStyleType: 'none', padding: 0, margin: 0}}>
              <li>Lycée Watteau, Diplômmée en 2022 - Mention “Assez bien”</li><br />
              <li>Epitech première année - 2022/2023</li><br />
              <li>Enigma School - 2023/2028</li><br />
            </ul>
          </div>
        </div>
      </div>

      <a href="/DACACIO_Mathis.pdf" target="_blank">
      <button className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300">
      Télécharger mon CV</button></a>
      
      </main>
      <Footer />
    </div>
  );
}
