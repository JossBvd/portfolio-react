import { useState } from "react";
import { CardFlipSnippet } from "../components";
import {
  todoImg,
  annuaireImg,
  calculatriceImg,
  carteCreditImg,
  tdFootImg,
  rickMortyImg,
} from "../assets/img";

export default function MiniProjetsPage() {
  const [projets, setProjets] = useState([
    {
      name: "Rick & Morty",
      technos: "React.js",
      description:
        "Afficher et rechercher les personnages de la série, grâce à l'API Rick & Morty",
      cover: rickMortyImg,
      url: "https://rick-morty-sand.vercel.app/",
    },
    {
      name: "TODO List",
      technos: "React.js",
      description:
        "Simple d'utilisation, CRUD des tâches et fonction recherche",
      cover: todoImg,
      url: "https://todo-app-tau-ruddy.vercel.app/",
    },
    {
      name: "Annuaire téléphonique",
      technos: "PHP",
      description: "CRUD sans base de données, utilisable sans login",
      cover: annuaireImg,
      url: "https://portfolio-jbonvard.000webhostapp.com/projetsLies/annuaire_tel/index.php",
    },
    {
      name: "TD Joueurs de football",
      technos: "Twig, PHP",
      description: "Affichage de données via le moteur de template Twig",
      cover: tdFootImg,
      url: "https://portfolio-jbonvard.000webhostapp.com/projetsLies/td_twig_football/index.php",
    },
    {
      name: "Carte de crédit interactive",
      technos: "Vanilla JS",
      description:
        "L'utilisateur entre ses données de carte de crédit afin d'avoir un visuel interactif (challenge mentor front-end)",
      cover: carteCreditImg,
      url: "https://portfolio-jbonvard.000webhostapp.com/projetsLies/credit_card_interactive/index.html",
    },
    {
      name: "Calculatrice",
      technos: "Vanilla JS",
      description: "Simple d'utilisation, fonctionnalité de base",
      cover: calculatriceImg,
      url: "https://portfolio-jbonvard.000webhostapp.com/projetsLies/calculJS/index.html",
    },
  ]);

  return (
    <>
      <main className="flex-grow">
        <h1 className="text-3xl font-bold text-gray-300 my-10 ml-10">
          Mini-projets
        </h1>

        <div className="wrapper mb-20">
          <div className="cols">
            {projets.map((projet, index) => {
              return (
                <CardFlipSnippet
                  key={index}
                  name={projet.name}
                  technos={projet.technos}
                  description={projet.description}
                  cover={projet.cover}
                  url={projet.url}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
