import { motion } from "motion/react";
import { ChevronRight, Book } from "lucide-react";

export default function Hero() {
  const carouselImages = [
    "https://image.noelshack.com/fichiers/2026/20/6/1778962828-chatgpt-image-16-mai-2026-22-20-00.jpg",
    "https://image.noelshack.com/fichiers/2026/20/6/1778962830-chatgpt-image-16-mai-2026-22-17-39.jpg",
    "https://image.noelshack.com/fichiers/2026/20/6/1778962828-chatgpt-image-16-mai-2026-22-16-16.jpg",
    "https://image.noelshack.com/fichiers/2026/20/6/1778962940-chatgpt-image-16-mai-2026-22-18-35.jpg"
  ];

  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 arabic-pattern" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold opacity-10 rounded-full blur-3xl -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gold opacity-5 rounded-full blur-3xl -ml-40 -mb-40" />

      {/* Infinite Carousel at the Top */}
      <div className="relative z-20 mt-4 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-navy via-navy/50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-navy via-navy/50 to-transparent z-10" />
        
        <motion.div 
          className="flex gap-4 md:gap-6 w-fit h-56 md:h-72 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 40, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {[...carouselImages, ...carouselImages].map((img, i) => (
            <div key={i} className="h-44 md:h-64 aspect-video shrink-0 rounded-lg md:rounded-xl overflow-hidden border border-gold/20 shadow-2xl transition-transform hover:scale-105 duration-500 bg-navy-light">
              <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Elegant Welcome Message */}
      <div className="relative z-20 pt-8 pb-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto px-4"
        >
          <div className="w-24 h-px bg-gold/50 mx-auto mb-4" />
          <h2 className="font-serif text-5xl md:text-8xl text-white mb-4 tracking-tight leading-tight">
            Bienvenue à l'<span className="text-gold italic">institut</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold/30" />
            <span className="text-gold/60 text-xs uppercase tracking-[0.3em] font-sans">Noreen</span>
            <div className="w-12 h-px bg-gold/30" />
          </div>
          <div className="w-24 h-px bg-gold/50 mx-auto mt-4" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
