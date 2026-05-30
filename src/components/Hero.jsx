import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Cpu } from 'lucide-react';

const Hero = () => {
  const handleDownload = () => {
    // Create and show custom premium toast
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-6 right-6 z-[9999] glass-panel px-6 py-4 rounded-xl border border-primary/40 text-white font-mono text-sm tracking-wide shadow-[0_0_30px_rgba(14,165,233,0.3)] flex items-center gap-3 transition-all duration-500 transform translate-y-10 opacity-0';
    toast.style.background = 'rgba(15, 22, 41, 0.85)';
    toast.style.backdropFilter = 'blur(12px)';
    toast.innerHTML = `
      <div class="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></div>
      <span>📥 Ubamadu_Possible_Resume.html downloaded successfully!</span>
    `;
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
      toast.style.transform = 'translateY(10px)';
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 500);
    }, 3500);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6">
            <Terminal size={14} />
            <span>SIGNAL_INTEGRITY // IMPEDANCE_MATCHED</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Engineering{' '}
            <span className="text-gradient">High-Speed Hardware</span>{' '}
            &amp; Embedded Architectures.
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-300 font-semibold mb-6 tracking-wide">
            High-Speed PCB Design &amp; Embedded Systems Engineer
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed text-base md:text-lg text-justify">
            Specializing in high-density, multi-layer PCB layouts where signal integrity, power distribution, and EMI/EMC mitigation are critical. From precision impedance matching to robust low-level firmware execution, I design resilient hardware systems optimized for high-performance deployment.
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
              href="./resume.html"
              download="Ubamadu_Possible_Resume.html"
              onClick={handleDownload}
              className="px-6 py-3 border border-primary/50 text-primary font-bold rounded hover:bg-primary/10 transition-all glow-border flex items-center gap-2"
            >
              Download CV
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-slate-600 text-slate-300 rounded hover:border-primary hover:text-primary transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full"
        >
          {/* Profile Picture */}
          <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[340px] md:max-w-md mx-auto">
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
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
