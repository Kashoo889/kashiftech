import { motion } from "framer-motion";
import { Mail, MessageCircle, Github, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
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

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "mkashifshah10@gmail.com",
      href: "mailto:mkashifshah10@gmail.com",
      color: "from-purple-600 to-purple-500",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+92 3376496322",
      href: "https://wa.me/923376496322",
      color: "from-green-600 to-green-500",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/MuhammadKashif10",
      href: "https://github.com/MuhammadKashif10",
      color: "from-slate-700 to-slate-600",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/muhammad-kashif-867223229",
      href: "https://www.linkedin.com/in/muhammad-kashif-867223229/",
      color: "from-blue-600 to-blue-500",
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>

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
            Let's{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Get in touch through any of these channels.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-lg border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center text-white`}
                  >
                    <Icon size={24} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {method.title}
                    </h3>
                    <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                      {method.value}
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="text-slate-400 group-hover:text-purple-400 transition-colors"
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to start your project?
          </h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Whether you need a new website, want to improve an existing one, or
            need a custom web application, I'm here to help. Let's discuss your
            project and find the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white border-0"
            >
              <a 
                href="mailto:mkashifshah10@gmail.com?subject=Project Inquiry&body=Hello, I'm interested in discussing a project with you."
                className="flex items-center justify-center"
              >
                Send Me an Email
                <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
            >
              <a
                href="https://wa.me/923376496322?text=Hello, I'm interested in discussing a project with you."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                Message on WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
