import { motion } from "motion/react";
import { MessageCircle, Phone, Mail, Instagram, MapPin } from "lucide-react";
import React, { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    level: "",
    program: "",
    module: "",
    availability: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*Nouvelle Inscription - Institut Noreen*%0A%0A` +
      `*Nom et Prénom:* ${formData.fullName}%0A` +
      `*Âge de l’élève:* ${formData.age}%0A` +
      `*Niveau actuel:* ${formData.level}%0A` +
      `*Programme souhaité:* ${formData.program}%0A` +
      `*Module choisi:* ${formData.module}%0A` +
      `*Disponibilités:* ${formData.availability}%0A` +
      `*Numéro de téléphone:* ${formData.phone}%0A` +
      `*Message complémentaire:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/33660548592?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="register" className="pt-8 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 arabic-pattern opacity-[0.05] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="badge-gold mb-6">Inscription</div>
            <h3 className="font-serif text-5xl text-white font-normal leading-tight mb-10">
              Prêt à commencer votre <span className="text-gold italic underline decoration-gold/20 underline-offset-8 font-serif">cheminement</span> ?
            </h3>
            <p className="text-white/60 font-light text-lg mb-12 max-w-md italic">
              Remplissez le formulaire. Nous vous recontacterons sur WhatsApp pour finaliser l'inscription.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold/10 transition-colors">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gold/40 uppercase tracking-[3px] mb-1">WhatsApp</p>
                  <p className="text-xl font-serif font-normal text-white">+33 (0)6 60 54 85 92</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold/10 transition-colors">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gold/40 uppercase tracking-[3px] mb-1">Email</p>
                  <p className="text-xl font-serif font-normal text-white">institutnoreen@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap gap-4">
               <a 
                 href="https://wa.me/33660548592" 
                 className="btn-gold min-w-[240px]"
               >
                 S’inscrire sur WhatsApp
               </a>
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-dark p-10 rounded-xl relative z-10"
          >
            <div className="mb-10 text-center">
              <h4 className="font-serif text-2xl italic text-gold mb-2">Formulaire Rapide</h4>
              <p className="text-white/30 text-[10px] uppercase tracking-[3px]">Les champs marqués d'une * sont obligatoires</p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="col-span-full">
                <input
                  required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Nom & Prénom *"
                  className="w-full bg-white/5 border border-gold/20 rounded-sm px-4 py-3 placeholder:text-white/20 text-white focus:border-gold outline-none transition-all text-sm"
                />
              </div>

              <div>
                <input
                  required
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Âge de l'élève *"
                  className="w-full bg-white/5 border border-gold/20 rounded-sm px-4 py-3 placeholder:text-white/20 text-white focus:border-gold outline-none transition-all text-sm"
                />
              </div>

              <div>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-gold/20 rounded-sm px-4 py-3 text-white/50 focus:border-gold outline-none transition-all text-sm"
                >
                  <option value="" className="bg-navy">Niveau actuel</option>
                  <option value="Débutant" className="bg-navy">Débutant</option>
                  <option value="Moyen" className="bg-navy">Moyen</option>
                  <option value="Avancé" className="bg-navy">Avancé</option>
                </select>
              </div>

              <div className="col-span-full">
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-gold/20 rounded-sm px-4 py-3 text-white/50 focus:border-gold outline-none transition-all text-sm"
                >
                  <option value="" className="bg-navy">Programme souhaité</option>
                  <option value="Nourania" className="bg-navy">Nourania</option>
                  <option value="Tilawa" className="bg-navy">Tilawa</option>
                  <option value="Coran" className="bg-navy">Coran</option>
                </select>
              </div>

              <div className="col-span-full">
                <select
                  name="module"
                  value={formData.module}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-gold/20 rounded-sm px-4 py-3 text-white/50 focus:border-gold outline-none transition-all text-sm"
                >
                  <option value="" className="bg-navy">Module choisi</option>
                  <option value="Module 1" className="bg-navy">Module 1 (40€)</option>
                  <option value="Module 2" className="bg-navy">Module 2 (60€)</option>
                  <option value="Module 3" className="bg-navy">Module 3 (65€)</option>
                  <option value="Personnalisé" className="bg-navy">Module 4 (Sur mesure)</option>
                </select>
              </div>

              <div className="col-span-full">
                <input
                  type="text"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  placeholder="Disponibilités (ex: Lundi soir)"
                  className="w-full bg-white/5 border border-gold/20 rounded-sm px-4 py-3 placeholder:text-white/20 text-white focus:border-gold outline-none transition-all text-sm"
                />
              </div>

              <div className="col-span-full">
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Numéro WhatsApp *"
                  className="w-full bg-white/5 border border-gold/20 rounded-sm px-4 py-3 placeholder:text-white/20 text-white focus:border-gold outline-none transition-all text-sm"
                />
              </div>

              <div className="col-span-full">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Message complémentaire..."
                  className="w-full bg-white/5 border border-gold/20 rounded-sm px-4 py-3 placeholder:text-white/20 text-white focus:border-gold outline-none transition-all resize-none text-sm"
                />
              </div>

              <button
                type="submit"
                className="col-span-full btn-gold !py-4"
              >
                S’inscrire via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-20 relative overflow-hidden border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="mb-12">
            <div className="flex flex-col items-center justify-center gap-4 mb-8">
              <div className="w-14 h-14 overflow-hidden rounded-xl shadow-2xl border border-gold/20">
                <img 
                  src="https://image.noelshack.com/fichiers/2026/20/6/1778962164-chatgpt-image-16-mai-2026-21-41-08.jpg" 
                  alt="Institut Noreen Logo" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="font-serif text-4xl text-white tracking-tight">Institut <span className="text-gold">Noreen</span></span>
                <span className="text-[10px] font-sans text-white/30 uppercase tracking-[4px]">Nourun ‘Ala Nour</span>
              </div>
            </div>
            <p className="text-white/40 text-base font-light italic leading-relaxed max-w-xl mx-auto">
              Une école d’apprentissage du Coran et de la langue arabe à distance, alliant modernité, douceur et excellence pédagogique.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 w-full">
            <div className="flex flex-col items-center">
              <h4 className="text-[10px] font-bold text-gold uppercase tracking-[4px] mb-8">Navigation</h4>
              <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-white/50 text-xs font-light tracking-widest uppercase">
                <li><a href="#home" className="hover:text-gold transition-colors">Accueil</a></li>
                <li><a href="#about" className="hover:text-gold transition-colors">À propos</a></li>
                <li><a href="#programs" className="hover:text-gold transition-colors">Programmes</a></li>
                <li><a href="#modules" className="hover:text-gold transition-colors">Modules</a></li>
              </ul>
            </div>
            
            <div className="flex flex-col items-center">
               <h4 className="text-[10px] font-bold text-gold uppercase tracking-[4px] mb-8">Contact</h4>
               <ul className="space-y-6 text-white/60 text-sm italic">
                 <li className="flex items-center justify-center gap-4">
                   <Phone size={14} className="text-gold opacity-50" />
                   +33 (0)6 60 54 85 92
                 </li>
                 <li className="flex items-center justify-center gap-4">
                   <Mail size={14} className="text-gold opacity-50" />
                   institutnoreen@gmail.com
                 </li>
               </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30">
          <p className="text-[10px] uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} Noreen - Nourun ‘Ala Nour
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white">Légal</a>
            <a href="#" className="hover:text-white">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
