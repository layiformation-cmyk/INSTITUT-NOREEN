import { motion } from "motion/react";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "#home" },
    { name: "À propos", href: "#about" },
    { name: "Programmes", href: "#programs" },
    { name: "Modules", href: "#modules" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-1">
            <div className="w-10 h-10 border border-gold/40 rounded flex items-center justify-center text-gold font-serif text-xl border-dashed">N</div>
            <span className="font-serif text-2xl font-normal tracking-tight text-white flex flex-col">
              <span>Institut <span className="text-gold">Noreen</span></span>
              <span className="text-[10px] font-sans text-gold/60 uppercase tracking-[2px]">Nourun ‘Ala Nour</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/70 hover:text-gold transition-colors font-medium text-xs uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/33660548592"
              className="btn-gold"
            >
              WhatsApp
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gold"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-navy/95 backdrop-blur-xl border-t border-gold/20 px-4 pt-2 pb-6 flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-serif italic py-3 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/33660548592"
            className="btn-gold w-full"
          >
            S’inscrire sur WhatsApp
          </a>
        </motion.div>
      )}
    </nav>
  );
}
