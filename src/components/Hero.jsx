import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const text = "Hi, I’m Nida";

const TypingText = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      // After full sentence, reset after 2 sec
      const timeout = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#8DB1A4]">
      <motion.span>
        {displayedText}
        <span className="blinking-cursor">|</span>
      </motion.span>
    </h2>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 md:pt-28 min-h-[100vh] px-6 md:px-20 flex flex-col md:flex-row items-center justify-center gap-10 bg-cover bg-center relative"
       style={{
    backgroundImage: `url('/g1.gif')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="z-10 flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-6xl">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left max-w-xl"
        >
          <TypingText text="Hi, I’m Nida" />
          <p className="text-lg text-gray-300">
           Motivated and detail-oriented Computer Science undergraduate with strong skills in front-end development, 
           UI/UX design, and backend programming. Experienced in building responsive web applications and experimenting with Agentic AI tools.
            Passionate about user-centered design, collaboration, and innovation.
          </p>
        <a href='#projects'>
            <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 bg-[#8DB1A4] text-[#0A0F0D] px-6 py-3 rounded-full hover:shadow-[0_0_20px_#8DB1A4] transition"
    
          >
            View My Work
          </motion.button >
        </a>
        </motion.div>

        {/* Right Image */}
      <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  whileHover={{
    scale: 1.03,
    boxShadow: '0 0 30px #8DB1A4',
    rotate: 1,
  }}
  transition={{ duration: 0.4 }}
  className="w-full max-w-sm md:max-w-md rounded-xl overflow-hidden border-4 border-[#2D4F4A]"
>
  <img
    src="/nidapicture.jpg"
    alt="Nida"
    className="w-full h-full object-cover transition duration-500 ease-in-out"
  />
</motion.div>
      </div>
    </section>
  );
};

export default Hero;
