import { motion } from "framer-motion";
import { Code2, Zap, Database } from "lucide-react";

interface ServicesSectionProps {
  onChatClick?: (service: string) => void;
}

const services = [
  {
    id: "wordpress",
    title: "WordPress Development",
    experience: "3+ years",
    description:
      "Custom WordPress themes and plugins using Bricks Builder and Elementor. High-performance, SEO-optimized websites.",
    icon: Code2,
    skills: ["PHP", "WordPress", "Bricks Builder", "Elementor", "WooCommerce"],
    color: "from-purple-600 to-purple-500",
    borderColor: "border-purple-500/30",
  },
  {
    id: "react",
    title: "React Development",
    experience: "1+ year",
    description:
      "Modern frontends with React and Next.js. Responsive interfaces with Tailwind CSS and smooth animations.",
    icon: Zap,
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    color: "from-cyan-600 to-cyan-500",
    borderColor: "border-cyan-500/30",
  },
  {
    id: "mern",
    title: "MERN Stack Development",
    experience: "1+ year",
    description:
      "Full-stack applications with MongoDB, Express, React, and Node.js. Scalable backends and beautiful frontends.",
    icon: Database,
    skills: ["MongoDB", "Express", "React", "Node.js", "REST APIs"],
    color: "from-purple-600 to-cyan-500",
    borderColor: "border-purple-500/30",
  },
];

export default function ServicesSection({ onChatClick }: ServicesSectionProps) {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "url('/images/services-bg-pattern.png')",
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            I specialize in building modern web applications across multiple
            technologies and platforms
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                className={`group relative p-8 rounded-xl border ${service.borderColor} bg-slate-900/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-opacity-100 cursor-pointer`}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} text-white mb-4`}
                  >
                    <Icon size={28} />
                  </motion.div>

                  {/* Title and Experience */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-purple-400 font-semibold mb-3">
                    {service.experience}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Skills */}
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">
                      Skills
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs rounded bg-slate-800 text-slate-300 border border-slate-700 group-hover:border-purple-500/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/20 group-hover:via-transparent group-hover:to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
