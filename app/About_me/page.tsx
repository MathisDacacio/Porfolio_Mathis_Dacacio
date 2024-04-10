import Image from "next/image";
import Footer from "../footer";
import Header from "../header";


export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between bg-black p-24 text-white">

      <br />
        {/* Mon chien */}
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2">
          <div className="lg:grid-rows-2" style={{fontSize: '20px'}}>
            <p>J'aime les animaux principalement les chiens et plus précisément mon chien qui est absolument magnifique et oui 
              je suis gaga. Il est né le 27 aout 2021, donc il a 2 ans et il s'appelle Sun (C'était l'année des "S" et c'était son nom 
              de base qu'on a gardé). C'est un male <a href="https://www.woopets.fr/chien/race/beagle-harrier/" style={{color: '#4682B4', fontSize: '23px'}} target="_blank">beagle Harrier</a> donc un 
              croisé entre un beagle qui est très énergique et un Harrier qui est un chien de chasse. C'est donc un beagle plus grand, plus costaud et qui chasse. 
            </p>
          </div>
          <div className="bg-no-repeat bg-contain bg-center bg-[url('/Photo_sun.jpeg')] relative dark:drop-shadow-[00_0.3rem#ffffff70] dark:invert">
          </div>
        </div>

        <br /><br /><br />
        {/* Mes jeux */}
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2">
          <div className="bg-no-repeat bg-contain bg-center bg-[url('/Photo_jeu.png')] relative dark:drop-shadow-[00_0.3rem#ffffff70] dark:invert">
          </div>
          <div className="lg:grid-rows-2" style={{fontSize: '19px'}}>
            <p>Comme beaucoup d'étudiant en informatique je joue souvent aux jeux vidéos, pour moi depuis mes 8 ans quand j'harcelais mon grand frère 
              de me laisser joué à <a href="https://fr.wikipedia.org/wiki/League_of_Legends" style={{color: '#4682B4', fontSize: '23px'}} target="_blank">League of Legends</a> sur son pc. C'est le premier jeu auquel j'ai joué et j'y joue toujours plus de 10 ans plus tard.
              Vu comment je suis fidèle c'est clairement mon jeu avec le plus d'heure joué. En deuxième position que ce soit en nombre d'heure et en chronologie 
              c'est Minecraft avec un très important pique d'activité pendant le confinement. Rocket League et Fornite sont deux jeux auquel je joue 
              de temps à temps contrairement à PUBG mais il fait quand meme partie de mon top 5. 
            </p>
          </div>
        </div>

        <br /><br /><br />
        {/* Ma Famille */}
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2">
          <div className="lg:grid-rows-2" style={{fontSize: '20px'}}>
            <p>Dans ma famille j'ai 2 grand frères. Le premier a 24 ans et c'est lui qui m'a fait découvrir League of Legend, il habite maintenant sur Annecy(74).
              Mon autre grand frère a 27 ans qui lui habite Comelles une petite commune entre Lyon et Annecy et est depuis un peu plus d'un an papa. Donc par 
              logique je suis maintenant <a href="https://dictionnaire.lerobert.com/definition/oncle#:~:text=Fr%C3%A8re%20du%20p%C3%A8re%20ou%20de,%E2%9E%99%20tonton." style={{color: '#4682B4', fontSize: '23px'}} target="_blank">tonton</a>. Il s'appelle Manohé et il est trop trop chou.
            </p>
          </div>
          <div className="bg-no-repeat bg-contain bg-center bg-[url('/Photo_famille.png')] relative dark:drop-shadow-[00_0.3rem#ffffff70] dark:invert">
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
