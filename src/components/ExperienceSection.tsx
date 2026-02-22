import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Testing Intern",
    company: "Test Yantra Software Solutions",
    period: "Jun 2024 – Jul 2024",
    points: [
      "Performed manual & automated testing across multiple modules",
      "Tracked and documented bugs using issue-tracking tools",
      "Collaborated with developers to resolve defects efficiently",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Innel Technologies",
    period: "Dec 2023 – Jan 2024",
    points: [
      "Built responsive web pages using HTML, CSS, and JavaScript",
      "Assisted senior developers in front-end development tasks",
      "Used Git for version control and team collaboration",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-secondary/20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          <span className="text-gradient">Experience</span>
        </motion.h2>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.2 }}
              className="glass-card p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Briefcase size={18} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{exp.role}</h3>
                  <p className="text-primary text-sm font-mono">{exp.company}</p>
                  <p className="text-muted-foreground text-xs mt-1">{exp.period}</p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1.5 shrink-0">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
