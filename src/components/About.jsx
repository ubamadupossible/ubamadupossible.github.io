import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HardDrive, Code, Cpu, ArrowRight } from 'lucide-react';

// Animated counter hook
const useCounter = (target, duration = 2000, inView = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
};

const StatCard = ({ value, suffix, label, inView }) => {
  const count = useCounter(value, 1800, inView);
  return (
    <div className="glass-panel p-6 rounded-xl text-center glow-border group hover:-translate-y-1 transition-transform duration-300">
      <div className="text-4xl font-bold text-gradient mb-1">
        {count}{suffix}
      </div>
      <p className="text-slate-400 text-sm font-medium leading-tight">{label}</p>
    </div>
  );
};

const About = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  const stats = [
    { value: 20, suffix: '+', label: 'Multilayer PCBs Manufactured' },
    { value: 10, suffix: '+', label: 'Products in Active Deployment' },
    { value: 35, suffix: '%', label: 'Avg. Cost Reduction via Optimization' },
    { value: 3,  suffix: '+', label: 'Years of Production-Grade Experience' },
  ];

  const pipeline = [
    'System Architecture',
    'Schematic',
    'Layout',
    'Validation',
    'Production',
  ];

  const cards = [
    {
      icon: <HardDrive className="w-8 h-8 text-primary" />,
      title: "Hardware Design",
      desc: "Custom multilayer PCB design, high-voltage inverter topologies, signal integrity, and full manufacturing handoff. Every board is built to survive the real world."
    },
    {
      icon: <Cpu className="w-8 h-8 text-secondary" />,
      title: "Firmware & Embedded Systems",
      desc: "Bare-metal and RTOS-based firmware for ESP32, STM32, and AVR. From sensor drivers and HMI programming to full system state machines — written to be production-ready."
    },
    {
      icon: <Code className="w-8 h-8 text-accent" />,
      title: "IoT & Industrial Systems",
      desc: "End-to-end IoT architectures, industrial data acquisition, real-time dashboards, and remote monitoring — bridging the gap between embedded hardware and the cloud."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 relative">
      <div className="max-w-[1600px] mx-auto w-full">

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-sm font-mono text-primary mb-3 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-primary"></span> ABOUT_ME
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">
            I don't just design circuits —{' '}
            <span className="text-gradient">I engineer certainty.</span>
          </h3>
        </motion.div>

        {/* Main Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <p className="text-slate-300 text-lg leading-relaxed mb-4 text-justify">
            Hardware that performs flawlessly under pressure isn't an accident. It's the result of disciplined engineering, obsessive attention to detail, and a relentless drive to own every stage of the process.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-4 text-justify">
            With <span className="text-white font-semibold">3+ years of production-grade experience</span>, I specialize in taking high-speed embedded designs from initial topology to factory floor. My expertise focuses on dense, multi-layer PCB design where signal integrity analysis, propagation delay matching, and impedance control dictate system reliability. I operate exactly where complex high-frequency hardware meets intelligence.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed text-justify">
            My hardware execution spans advanced <span className="text-primary font-semibold">ARM Cortex, ESP32, and FPGA architectures</span>, focusing heavily on robust power delivery networks (PDN) and high-speed communication interfaces. I don't hand off layout or electromagnetic interference (EMI) problems—I design them out of the system entirely.
          </p>
        </motion.div>

        {/* Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-14"
        >
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">End-to-End Ownership</p>
          <div className="flex flex-wrap items-center gap-2">
            {pipeline.map((step, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="px-4 py-2 bg-primary/10 border border-primary/30 rounded text-primary text-sm font-mono font-semibold tracking-wide"
                >
                  {step}
                </motion.span>
                {idx < pipeline.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-slate-600 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <StatCard {...stat} inView={statsInView} />
            </motion.div>
          ))}
        </div>

        {/* Capability Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-panel p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] group-hover:bg-primary/15 transition-all duration-500"></div>
              <div className="mb-6 p-4 bg-surface rounded-lg inline-block glow-border transition-all">
                {card.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{card.title}</h4>
              <p className="text-slate-400 leading-relaxed text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
