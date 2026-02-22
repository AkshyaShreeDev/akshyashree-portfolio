import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profileImg from "@/assets/profile-placeholder.png";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <img
              src={profileImg}
              alt="Akshya Shree M"
              className="w-full max-w-sm rounded-2xl border border-border object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-semibold">Akshya Shree M</span>, a passionate pre-final year Computer Science Engineering student at Panimalar Engineering College, Chennai. I thrive on building elegant solutions with <span className="text-primary">Java</span>, mastering <span className="text-primary">Data Structures & Algorithms</span>, and crafting modern web experiences with <span className="text-primary">React</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code and continuously learning new technologies. My goal is to contribute meaningful solutions to real-world problems while growing as a software developer.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="https://github.com/AkshyaShreeDev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                GitHub Profile
              </a>
              <a
                href="https://leetcode.com/u/Akshyashree/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg border border-border text-foreground text-sm font-semibold hover:bg-secondary transition-colors"
              >
                LeetCode Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
