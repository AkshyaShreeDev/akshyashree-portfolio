import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "Bank Management System",
    description:
      "A Java console application simulating a banking system with account creation, deposit, withdrawal, balance checking, and transaction management.",
    tags: ["Java", "OOP", "Console App"],
    github: "https://github.com/AkshyaShreeDev",
  },
  {
    title: "Academic Mini Projects",
    description:
      "A collection of mini projects demonstrating Java, HTML, CSS, JavaScript, and algorithm implementations built during coursework.",
    tags: ["Java", "HTML/CSS", "JavaScript", "DSA"],
    github: "https://github.com/AkshyaShreeDev",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          <span className="text-gradient">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="glass-card p-6 md:p-8 group hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code2 size={22} className="text-primary" />
                <h3 className="font-bold text-lg">{project.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <Github size={16} /> View Code
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
