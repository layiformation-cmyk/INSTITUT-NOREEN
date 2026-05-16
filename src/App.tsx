/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Modules from "./components/Modules";
import RegistrationForm, { Footer } from "./components/RegistrationForm";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen font-sans selection:bg-gold/30 selection:text-navy navy-gradient">
      {/* Scroll indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Quote / Mission Section */}
        <section className="pt-16 pb-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 arabic-pattern" />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="mb-8 flex justify-center">
                <img 
                  src="https://image.noelshack.com/fichiers/2026/20/6/1778962164-chatgpt-image-16-mai-2026-21-41-08.jpg" 
                  alt="Institut Noreen Logo" 
                  className="w-20 h-20 object-cover rounded-full border border-gold/20"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h2 className="text-white font-serif text-3xl md:text-5xl italic leading-tight mb-8">
                Transmettre la lumière du Coran avec <span className="text-gold">douceur</span> et excellence pour chaque élève.
              </h2>
              <div className="h-1 w-24 bg-gold mx-auto mb-8 rounded-full" />
              <p className="text-gold uppercase tracking-[0.2em] font-bold text-[10px]">
                Objectif de l'Institut
              </p>
            </motion.div>
          </div>
        </section>

        <About />
        <Programs />
        <Modules />
        <RegistrationForm />
      </main>

      <Footer />
    </div>
  );
}
