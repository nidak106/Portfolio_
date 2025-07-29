import { motion } from 'framer-motion';

const projectData = [
  {
    title: 'Website for a couple',
    url: 'https://wedding-phi-two-70.vercel.app/',
    color: '#2D4F4A',
    image: '/proj1.png'
  },
  {
    title: 'Dashboard design',
    url: 'https://uidesign-gamma.vercel.app/',
    color: '#8DB1A4',
    image: '/proj2.png'
  },
  {
    title: 'Blog website',
    url: 'https://bloggindwebsite.vercel.app/',
    color: '#2D4F4A',
    image: '/proj3.png'
  },
  {
    title: 'React Flow',
    url: 'https://clouditecture-ui.vercel.app/',
    color: '#8DB1A4',
    image: '/proj4.png'
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#0A0F0D] text-[#8DB1A4] py-24 px-6 min-h-screen flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

      <div className="w-full flex justify-center">
      <div
  className="
    grid 
    grid-cols-1 
    sm:grid-cols-2 
    md:flex 
    md:flex-row 
    md:gap-12 
    md:overflow-x-auto 
    md:snap-x 
    md:snap-mandatory 
    px-4 md:px-10 
    gap-8 
    w-full 
    max-w-full 
    scrollbar-hide
  "
>
          {projectData.map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="
                w-full 
                md:min-w-[300px] 
                md:w-[320px] 
                h-[420px] 
                rounded-2xl 
                overflow-hidden 
                border border-[#8DB1A4]/20 
                snap-center 
                flex-shrink-0
              "
              style={{
                backgroundColor: proj.color,
                boxShadow: `0 0 25px ${proj.color}`,
              }}
            >
              <div className="flex flex-col h-full px-4 py-4">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />

                <h3 className="text-white text-lg font-semibold tracking-wide mb-2">
                  {proj.title}
                </h3>

                <button
                  onClick={() => window.open(proj.url, '_blank')}
                  className="mt-auto px-4 py-2 rounded-xl text-white font-medium border border-white/30 bg-white/10 backdrop-blur-md hover:bg-amber-100 hover:text-black transition duration-300 shadow-sm hover:shadow-[0_0_12px_#3DCBFF]"
                >
                  Visit →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
