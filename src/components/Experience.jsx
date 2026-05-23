import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "Senior Embedded Systems Engineer",
      company: "IoT Solutions Inc.",
      period: "2023 - Present",
      description: "Leading the development of industrial IoT gateways based on ESP32 and STM32 architectures. Designed custom PCBs and implemented RTOS-based firmware for real-time sensor data acquisition."
    },
    {
      role: "Embedded Hardware Developer",
      company: "TechHardware Corp",
      period: "2020 - 2023",
      description: "Developed and maintained firmware for smart home devices. Integrated various sensors via I2C/SPI and developed low-power wireless communication protocols."
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
                <p className="text-slate-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
