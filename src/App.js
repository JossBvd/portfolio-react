import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <Navbar />

      <Header />

      <main className="m-8">
        <div className="text-xl text-gray-300 text-center mx-3">
          <p className="my-6">
            Actuellement en formation professionnelle en tant que développeur
            web et web mobile, je recherche une entreprise pour une alternance
            afin de commencer mon bachelor en septembre 2023. La durée de cette
            alternance est de 1 an, au rythme de 3 semaines en entreprise, une
            semaine à l'école.
          </p>
          <p>
            J'étudie les techniques de conception et de modélisation des sites
            internet via plusieurs langages, librairies et frameworks. J'ai
            réalisé plusieurs projets avec Symfony et React.
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
