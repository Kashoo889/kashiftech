import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface ProjectsSectionProps {
  onChatClick?: (project: string) => void;
}

type ProjectCategory = "all" | "wordpress" | "react" | "mern";

interface Project {
  id: string;
  title: string;
  tech: string[];
  description: string;
  image: string;
  imageType?: "gradient" | "url";
  category: ProjectCategory;
  link?: string;
}

const projects: Project[] = [
  // WordPress Projects
  {
    id: "nettsidedesign-no",
    title: "Nettside Design - Web Design Agency",
    tech: ["WordPress", "PHP", "Custom Theme"],
    description: "Professional web design agency website with multilingual support (Norwegian/English). Developed 10+ pages with custom functionality and responsive design.",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    category: "wordpress",
    link: "https://nettsidedesign.no/",
  },
  {
    id: "nettsidedesign-en",
    title: "Nettside Design - English Version",
    tech: ["WordPress", "PHP", "Multilingual"],
    description: "English version of the web design agency website. Developed 10+ pages with seamless language switching and custom features.",
    image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    category: "wordpress",
    link: "https://nettsidedesign.no/en/",
  },
  {
    id: "kognitivterapeut",
    title: "Kognitiv Terapeut - Therapy Services",
    tech: ["WordPress", "PHP", "Custom Theme"],
    description: "Professional therapy services website. Developed 4+ pages with booking system and service information.",
    image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    category: "wordpress",
    link: "https://kognitivterapeut.no/",
  },
  {
    id: "dataanalyticsstack",
    title: "Data Analytics Stack",
    tech: ["WordPress", "PHP", "Custom Development"],
    description: "Data analytics services website. Developed 4 pages with modern design and analytics-focused content.",
    image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    category: "wordpress",
    link: "https://sysinn.net/dataanalyticsstack.com/",
  },
  {
    id: "friendsnetwork",
    title: "Friends Network",
    tech: ["WordPress", "PHP", "Custom Theme"],
    description: "Social networking platform built with WordPress. Features user profiles, connections, and community features.",
    image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    category: "wordpress",
    link: "https://friendsnetwork.pk/",
  },
  {
    id: "mufaddalsafety",
    title: "Mufaddal Safety Equipments",
    tech: ["WordPress", "WooCommerce", "PHP"],
    description: "Safety equipment e-commerce website with product catalog, shopping cart, and secure checkout system.",
    image: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    category: "wordpress",
    link: "https://mufaddalsafetyequipments.com/",
  },
  {
    id: "yourhealthservices",
    title: "Your Health Services",
    tech: ["WordPress", "PHP", "Custom Theme"],
    description: "Healthcare services website with appointment booking, service information, and patient resources.",
    image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    category: "wordpress",
    link: "https://yourhealthservices.ca",
  },
  {
    id: "faizanhayat",
    title: "Faizan Hayat - Personal Portfolio",
    tech: ["WordPress", "PHP", "Custom Theme"],
    description: "Personal portfolio website showcasing professional work, skills, and achievements with modern design.",
    image: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    category: "wordpress",
    link: "https://faizanhayat.com/",
  },
  {
    id: "cardis",
    title: "Cardis - Business Services",
    tech: ["WordPress", "PHP", "Custom Theme"],
    description: "Business services website with service listings, contact forms, and company information.",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    category: "wordpress",
    link: "https://cardis.ca/",
  },
  {
    id: "keycapitalproperties",
    title: "Key Capital Properties",
    tech: ["WordPress", "PHP", "Real Estate Theme"],
    description: "Real estate property website with property listings, search functionality, and property details.",
    image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    category: "wordpress",
    link: "https://keycapitalproperties.com/",
  },
  {
    id: "entreye",
    title: "EntrEye - Business Platform",
    tech: ["WordPress", "PHP", "Custom Development"],
    description: "Business platform website with modern design, service information, and contact features.",
    image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    category: "wordpress",
    link: "https://entreye.co/",
  },
  {
    id: "theluckyroaster",
    title: "The Lucky Roaster",
    tech: ["WordPress", "WooCommerce", "PHP"],
    description: "Coffee roaster e-commerce website with product catalog, online ordering, and coffee subscription features.",
    image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    category: "wordpress",
    link: "https://theluckyroaster.com.au/",
  },
  {
    id: "betterpridehomecare",
    title: "Better Pride Home Care",
    tech: ["WordPress", "PHP", "Healthcare Theme"],
    description: "Home care services website with service information, caregiver profiles, and booking system.",
    image: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    category: "wordpress",
    link: "https://betterpridehomecaree.com.au/",
  },
  {
    id: "gphr-store",
    title: "GPHR Store",
    tech: ["WordPress", "WooCommerce", "PHP"],
    description: "E-commerce store with product catalog, shopping cart, payment integration, and order management.",
    image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    category: "wordpress",
    link: "https://gphr.store/",
  },
  {
    id: "cowan",
    title: "Cowan - Business Services",
    tech: ["WordPress", "PHP", "Custom Theme"],
    description: "Professional business services website with service offerings, company information, and contact features.",
    image: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    category: "wordpress",
    link: "https://cowan.com/",
  },
  {
    id: "australiaacutonics",
    title: "Australia Acutonics",
    tech: ["WordPress", "PHP", "Custom Theme"],
    description: "Alternative therapy services website with treatment information, practitioner profiles, and booking system.",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    category: "wordpress",
    link: "https://australiaacutonics.com/",
  },
  {
    id: "pphs-pk",
    title: "PPHS - Paras Public High School",
    tech: ["WordPress", "PHP", "Custom Theme"],
    description: "School website for Paras Public High School. Features school information, academic programs, student resources, and administrative features.",
    image: "https://pphs.pk/wp-content/uploads/2021/06/ChatGPT-Image-Jun-19-2025-03_10_56-PM.png",
    imageType: "url" as const,
    category: "wordpress",
    link: "https://pphs.pk/",
  },
  // React Projects
  {
    id: "onlyif-react",
    title: "OnlyIf - Real Estate Platform",
    tech: ["React", "MongoDB", "Express", "Node.js", "MERN"],
    description: "Real estate platform where sellers can list homes at their desired price. Features property browsing, seller dashboard, and buyer-seller connections.",
    image: "https://onlyif.com.au/images/01.png",
    imageType: "url" as const,
    category: "react",
    link: "https://onlyif.com.au/",
  },
  {
    id: "studymentorhub-react",
    title: "StudyMentorHub - Finance Dashboard",
    tech: ["React", "MongoDB", "Express", "Node.js", "MERN"],
    description: "Financial management dashboard for tracking finances, managing accounts, and monitoring financial activities. Features secure login, financial analytics, and comprehensive financial tools.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
    imageType: "url" as const,
    category: "react",
    link: "https://www.studymentorhub.shop/",
  },
  // MERN Stack Projects
  {
    id: "onlyif",
    title: "OnlyIf - Real Estate Platform",
    tech: ["MERN", "MongoDB", "Express", "React", "Node.js"],
    description: "Real estate platform where sellers can list homes at their desired price. Features property browsing, seller dashboard, and buyer-seller connections.",
    image: "https://onlyif.com.au/images/01.png",
    imageType: "url" as const,
    category: "mern",
    link: "https://onlyif.com.au/",
  },
  {
    id: "studymentorhub",
    title: "StudyMentorHub - Finance Dashboard",
    tech: ["MERN", "MongoDB", "Express", "React", "Node.js"],
    description: "Financial management dashboard for tracking finances, managing accounts, and monitoring financial activities. Features secure login, financial analytics, and comprehensive financial tools.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
    imageType: "url" as const,
    category: "mern",
    link: "https://www.studymentorhub.shop/",
  },
];

export default function ProjectsSection({ onChatClick }: ProjectsSectionProps) {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeTab === "all"
      ? // Remove duplicates by link when showing all projects
        projects.filter(
          (project, index, self) =>
            index === self.findIndex((p) => p.link === project.link)
        )
      : projects.filter((project) => project.category === activeTab);

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

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  };

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "wordpress", label: "WordPress" },
    { value: "react", label: "React" },
    { value: "mern", label: "MERN Stack" },
  ] as const;

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A selection of projects I've built showcasing my skills across different technologies
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as ProjectCategory)}
            className="w-full"
          >
            <TabsList className="bg-slate-900/50 border border-slate-700/50 p-1.5 inline-flex h-auto rounded-lg backdrop-blur-sm">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white data-[state=active]:border-0 text-slate-300 hover:text-white px-6 py-2.5 rounded-md transition-all duration-300 border border-transparent data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/20"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                whileHover="hover"
                className="group relative rounded-xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 bg-slate-900/30 backdrop-blur-sm"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                  {project.imageType === "url" ? (
                    <div
                      className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-300 bg-cover bg-center"
                      style={{ 
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    />
                  ) : (
                    <div
                      className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: project.image }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="relative p-6">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-300 group-hover:border-cyan-500/50 group-hover:text-cyan-300 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (project.link && project.link !== "#") {
                          window.open(project.link, "_blank", "noopener,noreferrer");
                        }
                      }}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:via-transparent group-hover:to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
