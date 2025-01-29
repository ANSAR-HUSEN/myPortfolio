import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Skills from "./pages/Skills/Skills";
import Resume from "./pages/Resume/Resume";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";


function App() {

 
  return (
    <div>
      {/* particle js */}
      

      {/* navbar  */}
      <NavBar />

      {/* main pages */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/about" element={<About />} />
        <Route index path="/portfolio" element={<Portfolio />} />
        <Route index path="/contact" element={<Contact />} />
        <Route index path="/skills" element={<Skills />} />
        <Route index path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
