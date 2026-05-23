import { motion } from 'framer-motion';
import { ExternalLink, Database, Activity, Zap, Radio } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const Projects = () => {
  const projects = [
    {
      title: "ESP32 + W5500 Ethernet Datalogger",
      description: "Industrial datalogger with real-time sensor monitoring, SD card logging capabilities, web dashboard integration, and comprehensive CSV download support.",
      image: "./images/project1.png",
      tags: ["ESP32", "W5500 Ethernet", "SD Logging", "Web Dashboard"],
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "Nextion HMI Industrial Controller",
      description: "Advanced touchscreen interface for industrial automation featuring temperature monitoring, dynamic setpoint configuration, and automated relay control systems.",
      image: "./images/project2.png",
      tags: ["Nextion HMI", "Relay Automation", "Embedded C++", "UI/UX"],
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: "IoT Inverter Monitoring System",
      description: "Complete power electronics monitoring system with precise voltage/current sensing, real-time power analytics, alarm protection, and a remote web visualization portal.",
      image: "./images/project3.png",
      tags: ["Power Sensing", "IoT", "Web Viz", "Alarm Systems"],
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "ESP32 Remote Telemetry System",
      description: "Wireless sensor streaming framework allowing for long-range data collection, real-time wireless monitoring, and intuitive data visualization.",
      image: "./images/project4.png",
      tags: ["Telemetry", "Wireless", "Sensor Streaming", "Visualization"],
      icon: <Radio className="w-5 h-5" />
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-primary mb-2 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-primary"></span> FIELD_TESTED_SYSTEMS
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold">Featured Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel rounded-xl overflow-hidden group hover:glow-border transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden bg-surface-light border-b border-white/5">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-125"
                />
                <div className="absolute top-4 left-4 z-20 glass-panel px-3 py-2 rounded flex items-center gap-2 text-primary font-mono text-xs">
                  {project.icon} {String(idx + 1).padStart(2, '0')}
                </div>
              </div>
              
              <div className="p-8">
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono text-secondary bg-secondary/10 px-3 py-1 rounded border border-secondary/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <a href="#" className="flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-colors">
                    <GithubIcon className="w-4 h-4" /> Source Code
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-light transition-colors ml-auto">
                    Live Demo <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
