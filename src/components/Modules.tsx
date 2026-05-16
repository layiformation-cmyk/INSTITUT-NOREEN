import { motion } from "motion/react";
import { Clock, Star, Calendar } from "lucide-react";

export default function Modules() {
  const modules = [
    {
      title: "Module 1",
      sessions: "2 passages / semaine",
      duration: "2 x 20 min (40 min / sem)",
      price: "40€",
      popular: false,
    },
    {
      title: "Module 2",
      sessions: "2 cours / semaine",
      duration: "2 x 30 min (60 min / sem)",
      price: "60€",
      popular: true,
    },
    {
      title: "Module 3",
      sessions: "3 cours / semaine",
      duration: "3 x 20 min (60 min / sem)",
      price: "65€",
      popular: false,
    },
    {
      title: "Module 4",
      sessions: "Formule Personnalisée",
      duration: "Selon vos besoins",
      price: "Sur mesure",
      popular: false,
    },
  ];

  return (
    <section id="modules" className="pt-4 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="badge-gold mb-6">Tarifs & Formules</div>
            <h3 className="font-serif text-4xl md:text-5xl text-white font-normal mb-8">
              La formule qui <span className="text-gold italic">vous correspond</span>
            </h3>
            <p className="text-white/60 font-light text-lg">
              Des modules flexibles pour s'adapter à votre rythme de vie.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-10 rounded-xl card-dark transition-all hover:border-gold/50 ${
                m.popular ? "border-gold/60 bg-gold/[0.05]" : ""
              }`}
            >
              {m.popular && (
                <div className="absolute -top-3 left-6 badge-gold bg-gold text-navy px-2 py-0.5 border-none">
                  Conseillé
                </div>
              )}
              
              <h4 className="font-serif text-2xl text-gold mb-6 italic">
                {m.title}
              </h4>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />
                  <p className="text-xs font-bold uppercase tracking-widest text-white/80">{m.sessions}</p>
                </div>
                <p className="text-xs text-white/40 italic ml-4">{m.duration}</p>
              </div>

              <div className="mt-auto">
                <div className="text-3xl font-serif font-normal text-white mb-8">
                  {m.price}
                  {m.price.includes('€') && (
                    <span className="text-xs font-sans font-light text-white/40 ml-1">/ mois</span>
                  )}
                </div>
                <a
                  href="#register"
                  className={`block w-full py-4 rounded-sm font-bold text-xs uppercase tracking-widest text-center transition-all ${
                    m.popular 
                      ? "bg-gold text-navy hover:bg-gold-light" 
                      : "border border-gold/40 text-gold hover:bg-gold hover:text-navy"
                  }`}
                >
                  Choisir ce module
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Schedule Planning Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 card-dark p-12 rounded-xl relative overflow-hidden group"
        >
          <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
             <div className="shrink-0 w-24 h-24 border border-gold/20 rounded-full flex items-center justify-center text-gold/40">
               <Calendar size={48} strokeWidth={1} />
             </div>
             <div>
               <h4 className="font-serif text-3xl font-normal text-white mb-4">Planification des horaires</h4>
               <p className="text-white/60 text-lg font-light leading-relaxed max-w-3xl italic">
                 "Les horaires sont fixés directement avec l'enseignant selon vos disponibilités."
               </p>
               <p className="text-gold/40 text-xs uppercase tracking-[4px] mt-4 font-bold">Flexibilité totale</p>
             </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-gold/10 transition-colors" />
        </motion.div>
      </div>
    </section>
  );
}
