import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-techno text-white bg-[#0A0F0D] relative overflow-x-hidden">
      {/* Navbar */}
      <header className="bg-[#0A0F0D] w-full fixed top-0 left-0 z-50 px-6 py-5 md:px-10 flex justify-between items-center border-b border-[#2D4F4A]">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold tracking-widest text-[#8DB1A4]"
        >
          Nida’s Portfolio
        </motion.h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-[#8DB1A4] text-lg">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile menu icon */}
        <div className="md:hidden z-50">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} color="#8DB1A4" /> : <Menu size={28} color="#8DB1A4" />}
          </button>
        </div>
      </header>

      {/* Mobile dropdown */}
   {menuOpen && (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="fixed top-[72px] left-0 w-full bg-[#0A0F0D] text-[#8DB1A4] flex flex-col items-center gap-6 py-6 md:hidden z-40"
  >
    {['Home', 'About', 'Projects', 'Contact'].map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        onClick={() => setMenuOpen(false)}
        className="text-xl hover:text-white"
      >
        {item}
      </a>
    ))}
  </motion.div>
)}

      <Hero/>
      <About />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
