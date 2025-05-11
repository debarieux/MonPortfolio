"use client"

import { motion } from "framer-motion"

interface Skill {
  name: string;
  level: number;
  icon: string;
  description: string;
  color: string;
}

const skills: Skill[] = [
  {
    name: "HTML/CSS",
    level: 90,
    icon: "html-css.svg",
    description: "Structure et mise en page responsive de sites web professionnels",
    color: "linear-gradient(to bottom, #FF5722, #264DE4)"
  },
  
  {
    name: "Bootstrap", 
    level: 90,
    icon: "bootstrap.svg",
    description: "Utilisation de composants prêts à l’emploi pour des mises en page rapides",
    color: "linear-gradient(to bottom, #D3D3D3, rgba(0, 0, 0.50, 0.95))"
  },

  {
    name: "React / Next.js",
    level: 80,
    icon: "react.svg",
    description: "Création d’interfaces web dynamiques et optimisées avec des frameworks modernes",
    color: "linear-gradient(to bottom, #87CEFA, #0000FF)"
  },
  
  {
    name: "TypeScript",
    level: 75,
    icon: "typescript.svg",
    description: "Écriture de code typé et plus fiable pour des projets maintenables",
    color: "linear-gradient(to bottom, #87CEEB, #000080)"
  },
 
  {
    name: "Tailwind CSS",
    level: 90,
    icon: "tailwindcss.svg",
    description: "Stylisation rapide et responsive avec des classes utilitaires sur mesure",
    color: "linear-gradient(to bottom, #38BDF8, #0F172A)"
  },

  {
    name: "Node.js (débutant)",
    level: 50,
    icon: "nodejs.svg",
    description: "Bases du développement backend avec JavaScript côté serveur",
    color: "linear-gradient(to bottom, #90EE90, #006400)"
  },
  
]

// Variants d'animation pour les différents éléments
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    }
  }
}

const progressVariants = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: {
      duration: 1.2,
      ease: [0.165, 0.84, 0.44, 1]
    }
  })
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900/80">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block"
          >
            Compétences Techniques
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6"></div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            Des technologies modernes que j'utilise pour créer des sites web performants et élégants
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {skills.map((skill, index) => {
            // Extraction de la couleur pour les effets
            const gradientColor = skill.color.split(',')[1]?.trim() || '#000000';
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-8 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Effet de bordure supérieure au survol */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
                
                {/* En-tête avec l'icône */}
                <div className="flex items-center gap-5 mb-6">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 transform group-hover:rotate-3"
                    style={{ 
                      background: skill.color,
                      backgroundImage: skill.color,
                      boxShadow: `0 8px 20px -4px ${gradientColor}50`
                    }}
                  >
                    <img 
                      src={`/images/skills/${skill.icon}`}
                      alt={skill.name}
                      className="w-9 h-9 transition-all duration-500 group-hover:scale-110 filter drop-shadow-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{skill.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-xs">
                      {skill.description}
                    </p>
                  </div>
                </div>
                
                {/* Barre de progression */}
                <div className="relative mt-6">
                  <div className="h-2 w-full bg-gray-100 dark:bg-gray-700/50 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full rounded-full"
                      style={{ 
                        background: skill.color,
                        backgroundImage: skill.color
                      }}
                      variants={progressVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={skill.level}
                    />
                  </div>
                  
                  <div className="mt-3 flex justify-between items-center text-sm">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Niveau de maîtrise</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">{skill.level}%</span>
                  </div>
                </div>
                
                {/* Décoration de fond */}
                <div 
                  className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-10 transition-all duration-500 group-hover:scale-150 group-hover:opacity-20" 
                  style={{ background: skill.color }}
                />
              </motion.div>
            )
          })}
        </motion.div>
        
        {/* Bloc d'appel à l'action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Mes compétences sont constamment mises à jour pour répondre aux standards du web moderne.
          </p>
          <a 
            href="#services" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-300 font-medium"
          >
            Découvrir mes services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
