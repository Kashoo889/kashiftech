import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onChatClick?: () => void;
}

export default function HeroSection({ onChatClick }: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
      },
    },
  };

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-slate-950 flex items-center justify-center pt-20 pb-10"
      style={{
        backgroundImage: "url('/images/hero-gradient-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/60 pointer-events-none" />

      {/* Animated accent orbs */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          backgroundImage: "url('/images/accent-orb-1.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      <motion.div
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
        className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{
          backgroundImage: "url('/images/accent-orb-1.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Main Headline */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
              Frontend &{" "}
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Full-Stack Developer
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-xl sm:text-2xl text-slate-300 font-light max-w-2xl mx-auto">
              Crafting modern web experiences with{" "}
              <span className="text-cyan-400 font-semibold">React</span>,{" "}
              <span className="text-purple-400 font-semibold">Next.js</span>, and{" "}
              <span className="text-cyan-400 font-semibold">MERN Stack</span>
            </p>
          </motion.div>

          {/* Skills Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {["WordPress", "React", "Next.js", "MERN", "Tailwind CSS"].map(
              (skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="px-4 py-2 rounded-full border border-purple-500/50 bg-purple-500/10 text-purple-300 text-sm font-medium hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              )
            )}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white border-0 px-8 py-6 text-lg font-semibold"
            >
              <a
                href="https://wa.me/923376496322?text=Hello, I'm interested in hiring you for a project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                Hire Me
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
