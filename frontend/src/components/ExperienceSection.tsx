import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const experiences = [
  {
    id: "wordpress",
    role: "WordPress Developer",
    duration: "3+ years",
    description: "Developing custom WordPress sites with advanced customization, theme development, and plugin creation.",
    skills: ["PHP", "WordPress", "Bricks Builder", "Elementor", "WooCommerce"],
  },
  {
    id: "react",
    role: "React Developer",
    duration: "1+ year",
    description: "Creating modern, responsive user interfaces with React and Next.js. Building component-driven architectures.",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },
  {
    id: "fullstack",
    role: "Full-Stack Developer",
    duration: "1+ year",
    description: "Building complete web applications from backend to frontend. Designing databases and creating REST APIs.",
    skills: ["MongoDB", "Express", "Node.js", "React", "PostgreSQL"],
  },
];

export default function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-slate-400">
            A timeline of my professional journey and expertise
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative pl-8 sm:pl-12"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-3 sm:left-4 top-12 w-0.5 h-24 bg-gradient-to-b from-purple-500/50 to-cyan-500/50" />
              )}

              {/* Timeline dot */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="absolute left-0 sm:left-0 top-1 w-7 h-7 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 border-4 border-slate-950 flex items-center justify-center"
              >
                <CheckCircle2 size={16} className="text-white" />
              </motion.div>

              {/* Content */}
              <motion.div
                whileHover={{ x: 10 }}
                className="p-6 rounded-lg border border-slate-700/50 hover:border-purple-500/50 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 group"
              >
                {/* Role and Duration */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                    {exp.role}
                  </h3>
                  <span className="text-purple-400 font-semibold text-sm mt-2 sm:mt-0">
                    {exp.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
