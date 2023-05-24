export default function Footer() {
  return (
    <>
      <footer className="text-gray-300 bg-gray-800 min-h-[80px] flex flex-wrap justify-around items-center">
        <span className="my-6">React.js | Tailwind CSS</span>
        <ul className="flex justify-center items-center my-8">
          <li className="nav-item">
            <a
              className="px-8 py-2"
              href="https://www.linkedin.com/in/jocelyn-bonvard/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin fa-2x"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-8 py-2"
              href="https://github.com/JossBvd"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github fa-2x"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-8 py-2"
              href="mailto:jbonvard@aol.fr"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-regular fa-envelope fa-2x"></i>
            </a>
          </li>
        </ul>
        <span className="my-6">© JossBvd | 2023</span>
      </footer>
    </>
  );
}
