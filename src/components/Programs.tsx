import { motion } from "motion/react";
import { BookOpen, Check, Headphones, Users } from "lucide-react";

export default function Programs() {
  const programsList = [
    {
      title: "Nourania",
      desc: "Apprentissage de la lecture arabe pas à pas. Idéal pour les débutants souhaitant maîtriser les bases de la lecture avec précision.",
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      title: "Tilawa",
      desc: "Cours de lecture fluide. Travail sur la prononciation et la fluidité pour une lecture mélodieuse et correcte.",
      icon: <Headphones className="w-8 h-8" />,
    },
    {
      title: "Coran",
      desc: "Lecture, mémorisation (Hifz) et révision. Un suivi personnalisé pour avancer dans votre cheminement avec le Livre d'Allah.",
      icon: <Check className="w-8 h-8" />,
    },
  ];

  return (
    <section id="programs" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="badge-gold mb-6">Nos Programmes</div>
            <h3 className="font-serif text-4xl md:text-5xl text-white font-normal mb-8">
              Un parcours adapté à <span className="text-gold italic">vos besoins</span>
            </h3>
            <p className="text-white/60 font-light text-lg">
              De l'initiation au perfectionnement, une pédagogie structurée pour tous les profils.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {programsList.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-dark p-10 rounded-xl group transition-all"
            >
              <div className="w-16 h-16 border-b border-r border-gold/30 flex items-center justify-center text-gold mb-8 italic font-serif text-2xl group-hover:scale-110 transition-transform">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h4 className="font-serif text-2xl font-normal text-white mb-4 italic">{program.title}</h4>
              <p className="text-white/50 leading-relaxed font-light text-sm">
                {program.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-dark p-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-12 bg-white/[0.02]"
        >
          <div className="flex items-center gap-8">
            <div className="w-20 h-20 border border-gold/20 rounded-full flex items-center justify-center shrink-0">
              <Users size={32} className="text-gold opacity-50" />
            </div>
            <div>
              <h4 className="text-2xl font-serif italic text-gold mb-2">Public concerné</h4>
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-white/50 text-xs uppercase tracking-widest font-bold">
                <span className="flex items-center gap-2 italic">À partir de 7 ans</span>
                <span className="flex items-center gap-2 italic">Cours individuels</span>
                <span className="flex items-center gap-2 italic">Tous niveaux</span>
              </div>
            </div>
          </div>
          <a
            href="#register"
            className="btn-gold min-w-[200px]"
          >
            Commencez maintenant
          </a>
        </motion.div>
      </div>
    </section>
  );
}
