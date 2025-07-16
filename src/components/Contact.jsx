import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to FormSubmit
      await fetch('https://formsubmit.co/ajax/nidaaffankhan3@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Clear form + show thank you
      setFormData({ name: '', email: '', message: '' });
      setShowMessage(true);

      // Hide thank you message after 4 seconds
      setTimeout(() => setShowMessage(false), 4000);
    } catch (error) {
      alert('Something went wrong. Try again!');
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-28 bg-[#0A0F0D] text-[#8DB1A4] flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-xl bg-[#2D4F4A] p-8 rounded-xl shadow-[0_0_30px_#2D4F4A] relative"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

        {/* Thank you message */}
   {showMessage && (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 flex items-center justify-center z-50"
  >
    <div className="bg-[#58796d] text-[#e2ede8] px-6 py-4 rounded-xl shadow-lg text-lg font-semibold text-center max-w-sm w-full">
      Thank you! Your message has been sent 🎉.
    </div>
  </motion.div>
)}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-[#0A0F0D]">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-3 rounded-md bg-[#0A0F0D] text-[#8DB1A4] border border-[#8DB1A4] placeholder-[#8DB1A4] focus:outline-none focus:ring-2 focus:ring-[#8DB1A4]"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-3 rounded-md bg-[#0A0F0D] text-[#8DB1A4] border border-[#8DB1A4] placeholder-[#8DB1A4] focus:outline-none focus:ring-2 focus:ring-[#8DB1A4]"
          />
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="px-4 py-3 rounded-md bg-[#0A0F0D] text-[#8DB1A4] border border-[#8DB1A4] placeholder-[#8DB1A4] focus:outline-none focus:ring-2 focus:ring-[#8DB1A4]"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="bg-[#8DB1A4] text-[#0A0F0D] py-3 rounded-md font-semibold text-lg hover:shadow-[0_0_20px_#8DB1A4] transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
