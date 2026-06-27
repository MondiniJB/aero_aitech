import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  // Manejo de Smooth Scrolling para anclas (links internos)
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const targetId = e.target.getAttribute('href');
      if (targetId && targetId.startsWith('#') && targetId !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
