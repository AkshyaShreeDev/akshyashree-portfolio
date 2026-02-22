import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Github } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });


  return (
    <section id="contact" className="section-padding bg-secondary/20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          GET IN <span className="text-gradient">TOUCH</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-8 text-lg"
        >
          Contact Me
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="text-muted-foreground mb-12 max-w-2xl"
        >
          I'm currently looking for internship opportunities and entry-level roles. Feel free to reach out if you'd like to connect!
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-3 glass-card p-6"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Mail size={22} className="text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Email</p>
            <a href="mailto:akshyashree435@gmail.com" className="text-foreground hover:text-primary transition-colors text-sm">
              akshyashree435@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-3 glass-card p-6"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Github size={22} className="text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">GitHub</p>
            <a href="https://github.com/AkshyaShreeDev" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors text-sm">
              github.com/AkshyashreeM
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-3 glass-card p-6"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <MapPin size={22} className="text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Location</p>
            <p className="text-foreground text-sm">Chennai, India</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
