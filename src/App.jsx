import React, { useEffect } from "react";
import HeroPage from "./components/Hero";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false,
    });

    // Tambahkan ini biar animasi Hero jalan di awal
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);

  return (
    <>
      <div className="font-sans scroll-smooth">
        <Navbar />
        <HeroPage />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
