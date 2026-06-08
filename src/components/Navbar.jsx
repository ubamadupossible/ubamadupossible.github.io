import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar = ({ onLinkClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" onClick={onLinkClick} className="flex items-center gap-2 group">
          <Cpu className="text-primary w-8 h-8 group-hover:text-primary-light transition-colors" />
          <span className="text-xl font-bold tracking-wider text-white">
            Ubamadu<span className="text-primary"> Possible</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={onLinkClick}
              className="text-sm font-medium text-slate-300 hover:text-primary transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="./resume.html?download=true"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded border border-primary/50 text-primary hover:bg-primary/10 transition-colors glow-border font-bold text-xs tracking-widest"
          >
            RESUME
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden glass-panel border-t border-white/5 mt-3"
        >
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => { setIsMobileMenuOpen(false); onLinkClick(); }}
                className="text-sm font-medium text-slate-300 hover:text-primary transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
