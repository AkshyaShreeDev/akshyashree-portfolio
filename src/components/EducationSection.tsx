import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "Panimalar Engineering College, Chennai",
    period: "2023 – 2027",
    score: "CGPA: 9.032",
  },
  {
    degree: "Higher Secondary (HSC)",
    institution: "Chinmaya Vidyalaya",
    period: "2021 – 2023",
    score: "80%",
  },
  {
    degree: "Secondary School (SSLC)",
    institution: "Chinmaya Vidyalaya",
    period: "2019 – 2021",
    score: "81%",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-secondary/20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          <span className="text-gradient">Education</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="flex flex-col gap-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="flex gap-6 items-start"
              >
                <div className="hidden md:flex w-12 h-12 rounded-full bg-primary/10 border border-primary/30 items-center justify-center shrink-0">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <div className="glass-card p-6 flex-1">
                  <h3 className="font-semibold text-lg">{edu.degree}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{edu.institution}</p>
                  <div className="flex items-center gap-4 mt-3 text-sm">
                    <span className="text-primary font-mono">{edu.period}</span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs">
                      {edu.score}
                    </span>
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

export default EducationSection;
