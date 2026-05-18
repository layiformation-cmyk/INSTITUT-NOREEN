import { motion } from "motion/react";
import { Award, GraduationCap, Heart, Star } from "lucide-react";

export default function About() {
  const qualities = [
    { icon: <GraduationCap />, title: "Formation IESH", desc: "Études à l'IESH de Château-Chinon." },
    { icon: <Award />, title: "Ijazahs", desc: "Titulaire en Nourania et Al-Jazariya." },
    { icon: <Heart />, title: "Pédagogie douce", desc: "Adaptée à chaque élève, petit ou grand." },
    { icon: <Star />, title: "Inspiration", desc: "Inspiré par Cheikh Noreen Mohamed Siddiq." },
  ];

  return (
    <section id="about" className="pt-8 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 card-dark p-4 rounded-xl border-gold/40">
              <div className="bg-navy-light aspect-[4/5] flex items-center justify-center rounded-lg overflow-hidden">
                 {/* This would be the founder's photo. Using a placeholder profile look */}
               <div className="text-white/10 flex flex-col items-center w-full h-full relative">
                 <div className="w-full h-full overflow-hidden">
                   <img 
                     src="https://image.noelshack.com/fichiers/2026/20/6/1778965314-chatgpt-image-16-mai-2026-23-01-45.jpg" 
                     alt="Idriss Sow" 
                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                     referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy to-transparent" />
                 </div>
                 <div className="absolute bottom-6 flex flex-col items-center">
                   <p className="font-serif italic text-2xl text-white">Idriss Sow</p>
                   <div className="badge-gold mt-2 py-0.5 scale-75 opacity-80">Fondateur</div>
                 </div>
               </div>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/10 rounded-full blur-[100px]" />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="badge-gold mb-6">À Propos</div>
              <h3 className="font-serif text-4xl md:text-5xl text-white font-normal leading-tight mb-8">
                Diplômé de l'IESH,<br /> passionné par la <span className="text-gold italic font-serif">transmission</span>.
              </h3>
              
              <div className="space-y-6 text-white/70 text-lg font-light leading-relaxed">
                <p>
                  Je suis <span className="font-bold text-gold">Idriss Sow</span>, fondateur de l’Institut Noreen – Nourun ‘Ala Nour.
                </p>
                <p>
                  Avec plus de 5 ans d’expérience dans l’enseignement, j’ai acquis une formation solide en langue arabe et en Qur’an à l’IESH de Château-Chinon. Mon parcours m’a permis d’obtenir des ijazahs renommées en <span className="text-gold italic font-medium underline decoration-gold/30 underline-offset-4">Nourania</span> et en <span className="text-gold italic font-medium underline decoration-gold/30 underline-offset-4">Al-Jazariya</span>.
                </p>
                <p>
                  Inspiré par la belle récitation de <span className="font-medium text-white italic underline decoration-gold/20">Cheikh Noreen Mohamed Siddiq</span> (qu’Allah lui fasse miséricorde), notre institut met l’accent sur une pédagogie douce, bienveillante et adaptée à chaque cœur.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-12">
                {qualities.map((q, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-5 rounded-lg card-dark"
                  >
                    <div className="text-gold shrink-0">
                      {q.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm uppercase tracking-widest">{q.title}</h4>
                      <p className="text-xs text-white/50 mt-1">{q.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
