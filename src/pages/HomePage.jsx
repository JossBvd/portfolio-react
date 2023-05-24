import { Header } from "../components";

function HomePage() {
  return (
    <>
      <Header />

      <main className="m-8 flex-grow">
        <div data-aos="zoom-in-down" className="text-xl text-gray-300 text-center mx-3">
          <p>
            Actuellement en formation professionnelle en tant que développeur
            web et web mobile, je recherche une entreprise pour une alternance
            afin de commencer mon bachelor "Concepteur et développeur d'application" en septembre 2023.
          </p>
          <p className="my-6">📋: 1 an / 3 semaines en entreprise / une semaine à l'école en Île-de-France </p>
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

export default HomePage;
