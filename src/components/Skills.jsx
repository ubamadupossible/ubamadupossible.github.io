import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Hardware & Protocols",
      skills: ["ESP32", "Arduino", "PCB Design", "UART", "SPI", "I2C", "Ethernet/W5500", "Sensor Integration"]
    },
    {
      title: "Firmware & Software",
      skills: ["Embedded C/C++", "Nextion HMI", "SD Card Logging", "FreeRTOS"]
    },
    {
      title: "Systems & Web",
      skills: ["IoT Systems", "Web Dashboards", "Power Electronics", "Inverter Monitoring"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative bg-surface/30">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-mono text-primary mb-2 flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-primary"></span> TECHNICAL_ARSENAL <span className="w-8 h-[1px] bg-primary"></span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Core Competencies</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-panel p-8 rounded-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] group-hover:bg-primary/20 transition-all"></div>
              <h4 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">{category.title}</h4>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    variants={itemVariants}
                    className="px-4 py-2 bg-bg-dark border border-white/5 rounded-md text-slate-300 text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
