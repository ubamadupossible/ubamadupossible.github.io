import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const XIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Contact = () => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    try {
      const response = await fetch('https://formsubmit.co/ajax/ubamadupossible@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New Portfolio Message from ${name}`
        })
      });

      const data = await response.json();

      if (data.success === 'true' || response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background glow for contact section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-2xl border border-primary/20 shadow-[0_0_50px_rgba(14,165,233,0.05)]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-mono text-primary mb-2 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-primary"></span> INITIATE_CONNECTION
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-6">Let's Build <br/>Something <span className="text-gradient">Great.</span></h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Currently open for new opportunities. Whether you have a question about a project, a hardware challenge, or just want to say hi, my inbox is always open.
              </p>
              
              <div className="flex flex-col gap-4">
                <a href="https://x.com/Posy_Ability" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center group-hover:glow-border transition-all">
                    <XIcon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-lg">X</span>
                </a>
                <a href="https://www.linkedin.com/in/ubamadupossible" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center group-hover:glow-border transition-all">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-lg">LinkedIn</span>
                </a>
                <a href="https://github.com/ubamadupossible" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center group-hover:glow-border transition-all">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-lg">GitHub</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-surface/50 p-6 md:p-8 rounded-xl border border-white/5 relative overflow-hidden"
            >
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(14,165,233,0.2)]">
                    <CheckCircle className="w-8 h-8 text-primary animate-pulse" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Transmission Successful</h4>
                  <p className="text-slate-400 text-sm max-w-xs mb-6">
                    Your message has been routed directly. Ubamadu will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2 border border-slate-600 text-slate-300 rounded hover:border-primary hover:text-primary transition-all text-sm font-mono"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-xs font-mono text-slate-400">NAME</label>
                    <input type="text" id="name" name="name" required className="bg-bg-dark border border-white/10 rounded px-4 py-3 text-slate-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-xs font-mono text-slate-400">EMAIL</label>
                    <input type="email" id="email" name="email" required className="bg-bg-dark border border-white/10 rounded px-4 py-3 text-slate-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="john@example.com" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="text-xs font-mono text-slate-400">MESSAGE</label>
                    <textarea id="message" name="message" rows="4" required className="bg-bg-dark border border-white/10 rounded px-4 py-3 text-slate-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="How can we collaborate?"></textarea>
                  </div>
                  
                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 text-xs font-mono bg-red-500/10 border border-red-500/20 p-3 rounded">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Transmission failed. Please try again.</span>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-primary text-bg-dark font-bold rounded hover:bg-primary-light transition-colors shadow-[0_0_15px_rgba(14,165,233,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>Transmitting...</>
                    ) : (
                      <>Send Message <Send className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
