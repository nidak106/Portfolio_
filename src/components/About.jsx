const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen mt-28 px-6 py-20 text-[#8DB1A4] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/img.png")' }} // Replace with your actual image
    >
      {/* Dark overlay */}
      <div className="bg-black/70 absolute inset-0 z-0 " />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-[#8DB1A4] transition duration-500 hover:text-white">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">
          {/* Left: Who I Am */}
          <div>
            <h3 className="text-2xl font-bold text-[#8DB1A4] mb-4">Who I Am</h3>
            <div className="space-y-4">
             <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate <span className="text-[#beeedc] font-semibold">Web Developer</span> and a
            <span className="text-[#8DB1A4]font-semibold"> Computer Science undergraduate</span>.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Currently pursuing <span className="text-[#8DB1A4]font-semibold">Agentic AI</span> through PIAIC, and I’m always
            learning about intelligent technologies.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            As a proud <span className="text-[#8DB1A4] font-semibold">millennial</span>, I actively engage with tech
            communities like <span className="text-[#8DB1A4] font-semibold">GDG on campus</span> and enjoy connecting with fellow developers.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm also skilled in <span className="text-[#8DB1A4]font-semibold">Microsoft Excel</span> for tasks like inventory and data coordination.
          </p>

              {/* CV Button */}
              <a
                href="/NidaKhan.pdf" // Make sure your CV is in public/ as Nida-CV.pdf
                download
                className="inline-block mt-6 bg-[#8DB1A4] text-[#0A0F0D] px-6 py-3 rounded-full font-semibold hover:bg-[#7dd8ca] hover:shadow-[0_0_20px_#8DB1A4] transition"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right: Experience */}
          <div>
            <h3 className="text-2xl font-bold text-[#8DB1A4] mb-4">Experience</h3>
            <div className="bg-[#2D4F4A]/40 border text-[#8DB1A4] p-6 rounded-xl shadow-[0_0_20px_#1668A9] text-left transition-transform duration-300 hover:scale-[1.03]">
              <h4 className="text-xl font-semibold text-[#8DB1A4]">Frontend Developer</h4>
              <p className="text-sm text-gray-400 mb-2">Internship at Clouditecture</p>
              <p className="text-gray-300 text-base mb-1">
                <span className="font-medium">Duration:</span> May 2025 – Oct 2025
              </p>
              <p className="text-gray-300 text-base">
                Built responsive UIs using React & Tailwind CSS. Focused on reusable components, futuristic layouts, and clean design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
