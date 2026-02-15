import React from "react";
import SectionTitle from "./SectionTitle";
import { personalInfo } from "../data/portfolioData";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 bg-secondary-bg flex items-center justify-center text-center relative overflow-hidden"
    >
      {/* Glowing circle behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-1/5 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 max-w-2xl relative z-10"
      >
        <p className="text-accent-1 font-mono mb-4 text-lg">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
          Get In Touch
        </h2>
        <p className="text-text-secondary text-lg mb-10 leading-relaxed">
          I am currently looking for new opportunities and my inbox is always
          open. Whether you have a question or just want to say hi, I'll try my
          best to get back to you!
        </p>

        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-block px-10 py-4 border-2 border-accent-1 text-accent-1 font-bold rounded-md hover:bg-accent-1/10 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-accent-1/20"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
