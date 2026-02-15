import React from "react";
import SectionTitle from "./SectionTitle";
import { experience } from "../data/portfolioData";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-secondary-bg relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent-1 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-20">
        <SectionTitle>Experiences</SectionTitle>

        <div className="mt-16 relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-1 via-accent-2 to-transparent opacity-30"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } items-start md:items-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-bg border-2 border-accent-1 rounded-full -translate-x-[calc(50%-0.5px)] z-10 shadow-[0_0_10px_rgba(0,245,195,0.8)]"></div>

                {/* Date (Opposite side) */}
                <div
                  className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12 text-left" : "md:pr-12 md:text-right"} mb-2 md:mb-0`}
                >
                  <span className="font-mono text-sm text-accent-1">
                    {exp.duration}
                  </span>
                </div>

                {/* Content Card */}
                <div
                  className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                >
                  <div className="bg-primary-bg/80 backdrop-blur-md p-6 rounded-xl border border-white/5 shadow-lg hover:border-accent-1/30 transition-colors group">
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-1 transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-semibold text-accent-2 mb-4">
                      {exp.organization}
                    </h4>
                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm text-text-secondary/90"
                        >
                          <span className="text-accent-1 mr-2 mt-1.5">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
