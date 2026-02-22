import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Java", level: 90 },
  { name: "DSA", level: 85 },
  { name: "HTML & CSS", level: 88 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "SQL", level: 78 },
  { name: "Python", level: 65 },
  { name: "Git & GitHub", level: 82 },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Core <span className="text-gradient">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="glass-card p-5"
            >
              <div className="flex justify-between mb-3">
                <span className="font-semibold text-sm">{skill.name}</span>
              </div>
              <div className="h-2 rounded-full bg-background overflow-hidden">
                <motion.div
                  className="skill-bar-fill"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
