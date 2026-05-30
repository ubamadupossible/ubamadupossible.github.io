import { motion } from 'framer-motion';
import { ExternalLink, Database, Activity, Zap, Radio, Cpu, ArrowRight } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

// Glowing circuit icon for the featured card header
const CircuitIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" rx="1" />
    <path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" />
    <path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" />
  </svg>
);

const Projects = () => {
  // Featured project (Project 1) — separate data
  const featuredProject = {
    image: "./images/project1.png",
    headerLabel: "PROJECT 1 | INDUSTRIAL MONITORING & CONTROL BRAIN",
    title: "KODION ENERGY - TRANSFORMER PLC CORE",
    subtitle: "Deployment: 12+ Months Continuous Operation | Kansas US | 5 Validated Deployments (4MVA & 132KVA Transformers) in California.",
    description: "A high-performance processing unit designed using ALTIUM and engineered for high-availability grid monitoring. Features redundant data logging, full industrial sensor integration (thermocouple, pressure, high-voltage telemetry), and hardware-level EMI/EMC mitigation. Optimized for low-latency TCP/UDP streaming across industrial networks with secure, HTTP-based asynchronous firmware updates.",
    tags: ["Altium Designer", "High-Speed Layout", "PLC Engineering", "Signal Integrity (SI)", "W5500 Ethernet", "EMI/EMC Compliance", "Secure OTA"],
  };

  const projects = [
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
      <div className="max-w-[1600px] mx-auto w-full">
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

        {/* ═══════════════════════════════════════════════════════════════
            FEATURED PROJECT 1 — Premium full-width card
        ═══════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 rounded-2xl overflow-hidden border border-primary/15 relative group"
          style={{ background: 'linear-gradient(135deg, rgba(6,9,19,0.95) 0%, rgba(15,22,41,0.9) 50%, rgba(6,9,19,0.95) 100%)' }}
        >
          {/* Subtle animated glow on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
               style={{ boxShadow: 'inset 0 0 80px rgba(14,165,233,0.06)' }} />

          {/* Header bar */}
          <div className="px-6 md:px-10 py-4 border-b border-primary/10 flex items-center gap-3">
            <CircuitIcon className="w-5 h-5 text-primary drop-shadow-[0_0_6px_rgba(14,165,233,0.6)]" />
            <span className="text-white font-bold text-xs md:text-sm tracking-[0.15em] font-mono">
              {featuredProject.headerLabel}
            </span>
          </div>

          {/* Card body: image left, text right */}
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image side */}
            <div className="relative h-72 md:h-auto min-h-[360px] overflow-hidden">
              {/* Teal overlay for cinematic look */}
              <div className="absolute inset-0 z-10 pointer-events-none"
                   style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.08) 0%, transparent 60%)' }} />
              <div className="absolute inset-0 z-10 pointer-events-none"
                   style={{ background: 'linear-gradient(to right, transparent 70%, rgba(6,9,19,0.8) 100%)' }} />
              <img 
                src={featuredProject.image} 
                alt={featuredProject.title}
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 filter contrast-110 brightness-90"
              />
              {/* Subtle scan-line effect */}
              <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03]"
                   style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)' }} />
            </div>

            {/* Text side */}
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight leading-tight">
                {featuredProject.title}
              </h4>
              <p className="text-slate-400 text-sm md:text-[0.9rem] leading-relaxed mb-5 font-medium">
                {featuredProject.subtitle}
              </p>
              <p className="text-slate-300 text-[0.95rem] leading-relaxed mb-7 text-justify">
                {featuredProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {featuredProject.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[0.7rem] font-mono text-primary bg-primary/5 px-3 py-1.5 rounded border border-primary/25 tracking-wide hover:bg-primary/10 hover:border-primary/40 transition-all duration-300">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-bg-dark font-bold text-sm rounded hover:bg-primary-light transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]">
                  View Hardware Specs <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-light text-slate-400 font-bold text-sm rounded border border-white/10 hover:border-white/20 hover:text-slate-300 transition-all">
                  Read Firmware Narrative <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════
            REMAINING PROJECTS — Standard grid
        ═══════════════════════════════════════════════════════════════ */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel rounded-xl overflow-hidden group hover:glow-border transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden bg-surface-light border-b border-white/5">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-125"
                />
                <div className="absolute top-4 left-4 z-20 glass-panel px-3 py-2 rounded flex items-center gap-2 text-primary font-mono text-xs">
                  {project.icon} {String(idx + 2).padStart(2, '0')}
                </div>
              </div>
              
              <div className="p-8">
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-slate-400 mb-6 leading-relaxed text-sm">
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
