import { Route, Routes } from "react-router-dom";
import { HomePage, ProjetsPage, MiniProjetsPage } from "./pages";
import { Footer, Navbar } from "./components";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';




function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/projets" element={<ProjetsPage />} />
        <Route path="/mini-projets" element={<MiniProjetsPage />} />
      </Routes>
      
      <Footer/>
    </>
  );
}

export default App;
