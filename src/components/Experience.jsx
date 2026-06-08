import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "Senior Embedded Systems Engineer",
      company: "Kodion Consulting/Energy LLC, Kansas, US",
      period: "2020 - Present",
      responsibilities: [
        "Lead end-to-end design of embedded hardware platforms from concept and system definition to validated PCB assemblies.",
        "Design high-current inverter and power stage PCBs, optimizing copper pours, trace widths, grounding, and thermal paths.",
        "Architect and implement microcontroller-based systems integrating Ethernet (W5500), SD card storage, sensors, and web-based interfaces.",
        "Generate complete manufacturing documentation: schematics, multilayer PCB layouts, Gerbers, BOMs, and assembly notes."
      ]
    },
    {
      role: "Embedded Hardware Developer",
      company: "Freelance",
      period: "2024 - Present",
      responsibilities: [
        "Led end-to-end design of 10+ production PCBs (2–8 layer) for clients across IoT, power monitoring, and embedded systems; 98% design acceptance rate with zero manufacturing rework on first production batch.",
        "Designed high-current inverter PCBs (3kW single-phase, 5kW three-phase prototypes): optimized copper pours for 80°C peak operating temps, achieved 96% efficiency through layout-driven component placement, reduced EMI by 18dB through layer stack up redesign.",
        "Architected real-time data logging systems (1–10kHz sampling, Ethernet + SD card): integrated W5500 Ethernet module, FAT32 file system on microSD, web dashboard for remote monitoring; deployed across 12+ customer installations.",
        "Generated production-ready manufacturing documentation (schematics, 8-layer Gerbers, BOMs, assembly notes); coordinated with 4 contract manufacturers (China, US, Nigeria); reduced BOM cost by 32% through component substitution while maintaining specs.",
        "Validated PCBs in field: conducted thermal imaging, EMI pre-compliance testing, long-duration stress tests (500+ hour burn-in); achieved 99.2% uptime across deployed systems.",
        "Design and program HMI interfaces"
      ]
    },
    {
      role: "Electronics Engineer Intern",
      company: "Innovate Electronics",
      period: "2019 - 2020",
      description: "Assisted in PCB layout design, component selection, and prototype testing for power electronic monitoring systems."
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 relative bg-surface/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-mono text-primary mb-2 flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-primary"></span> CAREER_TRAJECTORY <span className="w-8 h-[1px] bg-primary"></span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Experience Timeline</h3>
        </motion.div>

        <div className="relative border-l border-primary/30 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-bg-dark glow-border shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>
              
              <div className="glass-panel p-6 md:p-8 rounded-xl hover:glow-border transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <span className="text-sm font-mono text-secondary mt-2 md:mt-0 px-3 py-1 bg-secondary/10 rounded border border-secondary/20 inline-block w-max">
                    {exp.period}
                  </span>
                </div>
                <h5 className="text-primary font-medium mb-4">{exp.company}</h5>
                {exp.responsibilities ? (
                  <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm leading-relaxed">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx}>{resp}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
