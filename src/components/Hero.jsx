import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6">
            <Terminal size={14} />
            <span>SYSTEM.READY // V1.0</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            Building The <br/>
            <span className="text-gradient">Hardware</span> Future.
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-400 font-medium mb-6">
            PCB Design Engineer <span className="text-primary">|</span> Embedded System Engineer <span className="text-primary">|</span> Electronics Engineer
          </h2>
          <p className="text-slate-400 max-w-lg mb-8 leading-relaxed">
            Specializing in IoT solutions, firmware development, PCB design, and bridging the gap between sophisticated hardware and intuitive software interfaces.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="group flex items-center gap-2 px-6 py-3 bg-primary text-bg-dark font-bold rounded hover:bg-primary-light transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-slate-600 text-slate-300 rounded hover:border-primary hover:text-primary transition-all glow-border"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative hidden md:block"
        >
          {/* Profile Picture */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-[80px] animate-pulse"></div>
            <div className="relative z-10 w-full h-full rounded-full border border-primary/30 p-2 glow-border">
              <div className="w-full h-full rounded-full overflow-hidden bg-surface relative group">
                <img 
                  src="./images/profile.jpg" 
                  alt="Ubamadu Possible" 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400x400/0f1629/38bdf8?text=Upload+Your+Pic";
                  }}
                />
              </div>
            </div>

          </div>
          
          {/* Name below picture */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-6"
          >
            <h3 className="text-2xl font-bold tracking-wide"><span className="text-gradient">Ubamadu Possible</span></h3>
            <p className="text-xs font-mono text-primary mt-1 tracking-widest uppercase">Embedded Systems Engineer</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
