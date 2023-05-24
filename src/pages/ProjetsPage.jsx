import { useState } from "react";
import { wavunity } from "../assets/img";
import { CardFlipSnippet } from "../components";

export default function ProjetsPage() {
  const [projets, setProjets] = useState([
    {
      name: "Wavunity",
      technos: "Symfony",
      description:
        "Plateforme de mise en relation entre artistes et producteurs, réseau social",
      cover: wavunity,
      url: "https://rick-morty-sand.vercel.app/",
    },
  ]);

  return (
    <>
      <main className="flex-grow">
        <h1 className="text-3xl font-bold text-gray-300 my-10 ml-10">
          Projets
        </h1>
        <h2 className="text-2xl font-bold text-gray-300 my-10 mx-10 text-center">Projet en cours, bientôt disponible</h2>

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
