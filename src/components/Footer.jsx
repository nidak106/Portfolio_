import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#0A0F0D] border-t border-[#2D4F4A] py-8 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h3 className="text-2xl font-semibold text-[#8DB1A4] mb-2">
          Built by Nida
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          Inspired by futuristic design, powered by React + Tailwind CSS.
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://github.com/nidak106"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8DB1A4] hover:text-white transition text-lg hover:shadow-[0_0_15px_#8DB1A4]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nida-khan106/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8DB1A4] hover:text-white transition text-lg hover:shadow-[0_0_15px_#8DB1A4]"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/nida.k__11/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8DB1A4] hover:text-white transition text-lg hover:shadow-[0_0_15px_#8DB1A4]"
          >
            Instagram 
          </a>
        </div>

        <p className="mt-6 text-xs text-gray-500">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
