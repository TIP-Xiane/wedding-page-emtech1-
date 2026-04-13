import { motion } from "framer-motion";
import heroImage from "@/assets/hero-couple.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,235,210,0.24),_transparent_35%)]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Romeo and Juliet"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,230,200,0.35),transparent_30%),linear-gradient(180deg,_rgba(55,34,20,0.35),_rgba(20,13,8,0.75))]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="font-body text-sm uppercase tracking-[0.4em] text-wedding-ivory/85 mb-6"
        >
          Together with their families
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-wedding-ivory mb-4 leading-tight"
        >
          Romeo & Juliet
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
          className="w-32 h-[1px] bg-white/60 mx-auto my-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease: "easeOut" }}
          className="font-display text-xl sm:text-2xl md:text-3xl text-wedding-ivory/95 italic font-light mb-4"
        >
          "Two souls, one eternal promise"
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5, ease: "easeOut" }}
          className="font-body text-sm uppercase tracking-[0.3em] text-wedding-ivory/80 mb-2"
        >
          Request the honour of your presence at the celebration of their union
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.8, ease: "easeOut" }}
          className="font-display text-2xl sm:text-3xl text-wedding-ivory mt-8 font-light"
        >
          April 25, 2026
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 2.1, ease: "easeOut" }}
          className="font-body text-xs uppercase tracking-[0.3em] text-wedding-ivory/70 mt-3"
        >
          Manila Cathedral · Intramuros, Manila
        </motion.p>

      </div>
    </section>
  );
};

export default HeroSection;
