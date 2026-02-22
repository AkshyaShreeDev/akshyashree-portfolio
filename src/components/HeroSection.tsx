import { motion } from "framer-motion";
import { Github, FileText, ChevronDown, Code2, Globe, Database } from "lucide-react";
import profileImg from "@/assets/profile-placeholder.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-glow overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center pt-20">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <p className="text-primary font-mono text-sm tracking-wider">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Akshya Shree{" "}
            <span className="text-gradient">M</span>
          </h1>
          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground text-lg">Computer Science Engineering Student</p>
            <p className="text-primary font-semibold text-lg">Aspiring Software Developer</p>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Passionate about building clean, user-friendly web applications with Java and modern web technologies. Ready to bring fresh ideas and dedication to your team.
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://github.com/AkshyaShreeDev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://leetcode.com/u/Akshyashree/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Code2 size={20} />
            </a>
            <a
              href="mailto:akshyashree435@gmail.com"
              className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <FileText size={20} />
            </a>
          </div>

          {/* Strength pills */}
          <div className="flex flex-wrap gap-3 mt-4">
            {[
              { icon: <Database size={16} />, label: "Java & DSA" },
              { icon: <Globe size={16} />, label: "Web Development" },
              { icon: <Code2 size={16} />, label: "React & JS" },
            ].map((item) => (
              <span
                key={item.label}
                className="flex items-center gap-2 px-4 py-2 glass-card text-sm text-muted-foreground"
              >
                <span className="text-primary">{item.icon}</span>
                {item.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right - profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center items-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-primary/40 p-2 animate-glow-pulse">
              <img
                src={profileImg}
                alt="Akshya Shree M"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 right-4 px-4 py-2 glass-card text-sm font-mono">
              <span className="text-muted-foreground">CGPA: </span>
              <span className="text-primary font-bold">9.03</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-scroll-hint"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
};

export default HeroSection;
