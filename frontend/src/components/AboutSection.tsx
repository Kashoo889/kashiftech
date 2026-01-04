import { motion } from "framer-motion";
import { Code2, Lightbulb, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "I write maintainable, well-documented code that follows best practices and industry standards.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "I approach challenges with creativity and analytical thinking to deliver innovative solutions.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "I optimize applications for speed and efficiency, ensuring excellent user experiences.",
  },
];

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-slate-400">
            Get to know me and my approach to web development
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 rounded-lg border border-purple-500/30 bg-slate-900/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">
                Passionate Developer & Problem Solver
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                I'm a full-stack developer with a passion for creating beautiful, functional web applications. With expertise in WordPress, React, and the MERN stack, I bring ideas to life through clean code and thoughtful design.
              </p>
              <p className="text-slate-300 leading-relaxed">
                My journey in web development has taught me that great software is built on a foundation of understanding user needs, writing maintainable code, and continuously learning new technologies.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Years Experience", value: "5+" },
                { label: "Projects Completed", value: "20+" },
                { label: "Happy Clients", value: "15+" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-4 rounded-lg border border-slate-700/50 bg-slate-900/30 text-center hover:border-purple-500/50 transition-all"
                >
                  <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="group p-6 rounded-lg border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center text-white"
                    >
                      <Icon size={24} />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-slate-400 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-4">My Approach</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Understand",
                desc: "I start by understanding your goals, requirements, and target audience.",
              },
              {
                step: "02",
                title: "Design",
                desc: "I create thoughtful designs that balance aesthetics with functionality.",
              },
              {
                step: "03",
                title: "Deliver",
                desc: "I build and deploy high-quality solutions with ongoing support.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {item.step}
                </p>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
