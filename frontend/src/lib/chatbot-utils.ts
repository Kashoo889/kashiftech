import knowledgeBase from "@/data/knowledge-base.json";

interface ChatbotResponse {
  text: string;
  type: "greeting" | "service" | "project" | "experience" | "contact" | "faq" | "default";
}

const keywords = {
  services: ["service", "services", "offer", "offerings", "what do you", "expertise", "skills"],
  wordpress: ["wordpress", "wp", "php", "elementor", "bricks"],
  react: ["react", "frontend", "next.js", "nextjs", "tailwind"],
  mern: ["mern", "mongodb", "express", "node", "nodejs", "full-stack", "fullstack"],
  projects: ["project", "projects", "portfolio", "work", "showcase", "built"],
  experience: ["experience", "years", "background", "expertise", "how long"],
  contact: ["contact", "email", "whatsapp", "reach", "hire", "message", "call"],
  greeting: ["hello", "hi", "hey", "greetings", "start", "help"],
};

function calculateSimilarity(input: string, keywords: string[]): number {
  const lowerInput = input.toLowerCase();
  let matches = 0;
  for (const keyword of keywords) {
    if (lowerInput.includes(keyword)) {
      matches++;
    }
  }
  return matches;
}

function findBestMatch(input: string): string {
  let bestMatch = "default";
  let bestScore = 0;

  for (const [key, keywordList] of Object.entries(keywords)) {
    const score = calculateSimilarity(input, keywordList);
    if (score > bestScore) {
      bestScore = score;
      bestMatch = key;
    }
  }

  return bestMatch;
}

export function generateChatbotResponse(userMessage: string): ChatbotResponse {
  const match = findBestMatch(userMessage);
  const lowerMessage = userMessage.toLowerCase();

  // Greeting responses
  if (match === "greeting") {
    const greetings = [
      `Hi! I'm an AI assistant here to help you learn about ${knowledgeBase.name}'s services and projects. What would you like to know?`,
      `Hello! I'm here to answer questions about ${knowledgeBase.name}'s expertise. Feel free to ask about services, projects, or experience.`,
      `Hey there! I'm ${knowledgeBase.name}'s AI assistant. How can I help you today?`,
    ];
    return {
      text: greetings[Math.floor(Math.random() * greetings.length)],
      type: "greeting",
    };
  }

  // Services responses
  if (match === "services") {
    if (lowerMessage.includes("wordpress")) {
      const service = knowledgeBase.services[0];
      return {
        text: `**${service.name}** (${service.experience})\n\n${service.description}\n\nSkills: ${service.skills.join(", ")}`,
        type: "service",
      };
    }
    if (lowerMessage.includes("react")) {
      const service = knowledgeBase.services[1];
      return {
        text: `**${service.name}** (${service.experience})\n\n${service.description}\n\nSkills: ${service.skills.join(", ")}`,
        type: "service",
      };
    }
    if (lowerMessage.includes("mern")) {
      const service = knowledgeBase.services[2];
      return {
        text: `**${service.name}** (${service.experience})\n\n${service.description}\n\nSkills: ${service.skills.join(", ")}`,
        type: "service",
      };
    }
    // Default services overview
    const servicesList = knowledgeBase.services
      .map((s) => `• **${s.name}** (${s.experience}): ${s.description}`)
      .join("\n\n");
    return {
      text: `I offer three main services:\n\n${servicesList}`,
      type: "service",
    };
  }

  // Projects responses
  if (match === "projects") {
    const projectsList = knowledgeBase.projects
      .map((p) => `• **${p.title}** (${p.tech.join(", ")})\n  ${p.description}`)
      .join("\n\n");
    return {
      text: `Here are some of my recent projects:\n\n${projectsList}`,
      type: "project",
    };
  }

  // Experience responses
  if (match === "experience") {
    const expList = knowledgeBase.experience
      .map((e) => `• **${e.role}** (${e.duration}): ${e.description}`)
      .join("\n\n");
    return {
      text: `My experience includes:\n\n${expList}`,
      type: "experience",
    };
  }

  // Contact responses
  if (match === "contact") {
    return {
      text: `You can reach out to me via:\n\n📧 Email: ${knowledgeBase.contact.email}\n💬 WhatsApp: ${knowledgeBase.contact.whatsapp}\n\nI'm happy to discuss your project requirements!`,
      type: "contact",
    };
  }

  // Default response
  const defaultResponses = [
    "I'm not sure about that. Feel free to ask me about services, projects, experience, or how to contact!",
    "That's a great question! Try asking me about my services, recent projects, or experience.",
    "I'm here to help! You can ask me about WordPress, React, MERN development, or my projects.",
  ];

  return {
    text: defaultResponses[Math.floor(Math.random() * defaultResponses.length)],
    type: "default",
  };
}
