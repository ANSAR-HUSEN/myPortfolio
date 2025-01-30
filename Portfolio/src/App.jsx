import { useState } from "react";
import { Routes, Route , useLocation} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Skills from "./pages/Skills/Skills";
import Resume from "./pages/Resume/Resume";
import NavBar from "./components/NavBar/NavBar";
import ParticlesComponent from "./components/Particles";
import Particles from "@tsparticles/react";
import "./App.scss";


function App() {
  const location = useLocation();
  // console.log(location);

  const renderParticlesInHome = location.pathname === "/";

 
  return (
    <div className="app">
      {/* particle js */}

      {
        renderParticlesInHome &&  <ParticlesComponent id="particles"  />
      }

     
      

      {/* navbar  */}
      <NavBar />

      {/* main pages */}
      <div className="app__pages">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/about" element={<About />} />
        <Route index path="/portfolio" element={<Portfolio />} />
        <Route index path="/contact" element={<Contact />} />
        <Route index path="/skills" element={<Skills />} />
        <Route index path="/resume" element={<Resume />} />
      </Routes>

      </div>
      
    </div>
  );
}

export default App;
