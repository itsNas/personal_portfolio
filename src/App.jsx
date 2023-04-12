import { useState } from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <main className={`${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="container">
        <ParticlesBackground />
        <Hero darkMode={darkMode} />
      </div>

      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
