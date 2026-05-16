import { motion } from "motion/react";
import { ChevronRight, Book } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 arabic-pattern" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold opacity-10 rounded-full blur-3xl -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gold opacity-5 rounded-full blur-3xl -ml-40 -mb-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="badge-gold mb-6">Bienvenue à l'institut</div>
            
            <h1 className="font-serif text-5xl md:text-7xl text-white font-normal leading-[1.1] mb-8">
              Transmettre la lumière du Coran avec <span className="text-gold italic">douceur</span>.
            </h1>
            
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-light">
              Un enseignement à distance, accessible à tous et à toutes. 
              Des cours adaptés à chaque niveau pour une éducation spirituelle et académique d'excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#register"
                className="btn-gold min-w-[200px]"
              >
                S’inscrire maintenant
              </motion.a>
              <a
                href="#programs"
                className="border border-white/20 hover:border-gold/50 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs transition-colors flex items-center justify-center gap-2"
              >
                Voir les programmes
                <ChevronRight size={14} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="card-dark p-12 rounded-xl border-gold/30 relative z-10 scale-110 translate-x-12">
               <div className="mb-8">
                 <div className="badge-gold mb-4 border-gold/30 scale-75 origin-left">Certification</div>
                 <h3 className="font-serif text-3xl italic text-gold">"Le meilleur d'entre vous est celui qui apprend le Coran et l'enseigne"</h3>
               </div>
               <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                  <div className="w-12 h-12 bg-gold/10 border border-gold/30 rounded flex items-center justify-center text-gold">
                    <Book size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/50">Méthodologie</p>
                    <p className="text-sm font-bold">Nourania & Al-Jazariya</p>
                  </div>
               </div>
            </div>
            {/* Background elements */}
            <div className="absolute -top-12 -left-12 w-full h-full border border-gold/10 rounded-xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 gold-gradient opacity-10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
