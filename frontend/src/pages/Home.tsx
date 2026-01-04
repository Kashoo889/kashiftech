import { useRef } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";

export default function Home() {
  const chatbotRef = useRef<HTMLDivElement>(null);

  const handleChatClick = () => {
    // Trigger chatbot opening - this will be handled by the Chatbot component
    const chatButton = document.querySelector(
      'button[aria-label="Toggle chatbot"]'
    ) as HTMLButtonElement;
    if (chatButton) {
      chatButton.click();
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-950 overflow-x-hidden">
      {/* Navigation */}
      <Navigation onChatClick={handleChatClick} />

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home">
          <HeroSection onChatClick={handleChatClick} />
        </section>

        {/* Services Section */}
        <section id="services">
          <ServicesSection onChatClick={handleChatClick} />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <ProjectsSection onChatClick={handleChatClick} />
        </section>

        {/* Experience Section */}
        <section id="experience">
          <ExperienceSection />
        </section>

        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Chatbot */}
      <div ref={chatbotRef}>
        <Chatbot />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
