"use client"

import { Badge } from "@/components/ui/badge"
import { CalendarIcon, StarFilledIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"

// Données corrigées avec des dates et technologies cohérentes
const experiences = [
  {
    id: 1,
    company: "Freelance",
    position: "Développeur Web Front-End",
    startDate: "2019",
    endDate: "Présent",
    description: "Création de sites vitrines sur mesure pour artisans, indépendants et PME. Focus sur l'accessibilité, le SEO et l'expérience utilisateur optimale.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    company: "Projets personnels",
    position: "Développeur web autodidacte",
    startDate: "2018",
    endDate: "2019",
    description: "Apprentissage intensif des technologies web modernes. Développement de compétences en HTML, CSS, JavaScript, puis React, TypeScript et frameworks associés.",
    technologies: ["JavaScript", "HTML", "CSS", "React"],
  },
  {
    id: 3,
    company: "Grande enseigne",
    position: "Cuisinier & Vendeur – Secteur alimentaire",
    startDate: "1998",
    endDate: "2008",
    description: "Expérience professionnelle dans l'alimentation développant rigueur, organisation et sens du service client. Gestion d'équipe et relation client.",
    technologies: ["Organisation", "Gestion client", "Travail d'équipe", "Réactivité"],
  },
]

// Variants d'animation pour une transition fluide
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20
    }
  }
}

const timelineDotVariants = {
  hidden: { scale: 0 },
  visible: { 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      delay: 0.3
    }
  }
}

export function ExperienceTimeline() {
  return (
    <section 
      id="experience" 
      className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      aria-label="Parcours professionnel de David Debarieux"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Parcours Professionnel
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-center max-w-3xl mx-auto mb-16 text-gray-700 dark:text-gray-300"
        >
          Issu d&apos;un parcours dans le secteur alimentaire, je mets aujourd&apos;hui ma rigueur et mon sens du service au profit de mes clients en tant que <strong>développeur web spécialisé dans la création de sites vitrines</strong> pour artisans et PME.
        </motion.p>
        
        <div className="relative mt-20">
          {/* Ligne verticale de la timeline avec animation d'apparition */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute left-1/2 w-1 md:w-1.5 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500" 
            aria-hidden="true" 
            style={{ transform: "translateX(-50%)" }}
          />
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-20"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-16 relative`}
              >
                {/* Point central sur la timeline avec animation */}
                <motion.div 
                  variants={timelineDotVariants}
                  className="absolute left-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 z-10 shadow-lg" 
                  style={{ transform: "translate(-50%, 0)", top: "50%" }}
                >
                  <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                    <StarFilledIcon className="w-3 h-3 text-purple-500" />
                  </div>
                </motion.div>
                
                <div className="w-full md:w-[45%] relative">
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
                        <CalendarIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-base md:text-lg font-medium text-gray-600 dark:text-gray-300">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                      {exp.company}
                    </h4>
                    
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="text-sm py-1.5 px-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-sm border border-blue-200/50 dark:border-purple-700/50 hover:-translate-y-1 transition-all duration-300 hover:shadow-md"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                <div className="hidden md:block md:w-[45%]" aria-hidden="true" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
