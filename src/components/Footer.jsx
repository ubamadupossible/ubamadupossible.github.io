import { Cpu } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-surface/50 py-8 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Cpu className="text-primary w-5 h-5" />
          <span className="font-bold tracking-wider text-slate-300">
            Ubamadu<span className="text-primary"> Possible</span>
          </span>
        </div>
        
        <p className="text-slate-500 text-sm font-mono">
          &copy; {new Date().getFullYear()} Ubamadu Possible. All rights reserved.
        </p>
        
        <div className="text-slate-500 text-xs font-mono flex gap-4">
          <span>STATUS: ONLINE</span>
          <span>VERSION: 1.0.0</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
