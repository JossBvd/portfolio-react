import cv from "../assets/img/Jocelyn_Bonvard_CV_2023_alternance.pdf";

export default function Header() {
  return (
    <header className="text-gray-300 flex flex-col items-center text-center m-8">
      <h1 className="text-3xl font-bold">Jocelyn Bonvard</h1>
      <h2 className="italic my-4">Développeur Fullstack</h2>
      <div className="flex justify-around items-center w-[100%]">
        <a href="https://www.linkedin.com/in/jocelyn-bonvard" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin fa-2xl fa-shake"></i>
        </a>
        <div className="bg-white h-[300px] w-[300px] my-4 rounded-full"></div>
        <a href="https://github.com/JossBvd" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github fa-2xl fa-shake"></i>
        </a>
      </div>
      <div className="my-7">
        <a
          className="rounded-md p-2 bg-purple-900 "
          href={cv}
          target="_blank"
          rel="noreferrer"
        >
          Mon CV
        </a>
      </div>
    </header>
  );
}
