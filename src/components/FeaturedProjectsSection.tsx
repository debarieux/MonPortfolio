"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import projects from "@/data/projects.json"

// Animations et effets pour la section Projets Phares
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

const imageVariants = {
  hidden: { scale: 1.1, opacity: 0.8 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.08,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
}

export function FeaturedProjectsSection() {
  return (
    <section id="featured-projects" className="py-24 md:py-28 bg-gradient-to-b from-white to-blue-50/30 dark:from-gray-900 dark:to-gray-900/50">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm inline-block">
            Projets Phares
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez mes réalisations pour des artisans et PME souhaitant valoriser leur présence en ligne
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group"
            >
              <div className="h-full overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 flex flex-col bg-white dark:bg-gray-800/90 relative border border-gray-100 dark:border-gray-700/30
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:to-blue-500/10 dark:before:to-blue-500/5 before:opacity-0 before:transition-opacity before:duration-500 
                  group-hover:before:opacity-100 group-hover:translate-y-[-5px] group-hover:border-blue-200 dark:group-hover:border-blue-700/30"
              >
                {/* Overlay d'image avec effet de survol */}
                <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-800/50">
                  <motion.div 
                    variants={imageVariants}
                    whileHover="hover"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                  </motion.div>
                  
                  {/* Badge flottant sur l'image */}
                  <div className="absolute top-4 right-4 bg-white/95 dark:bg-gray-900/95 px-3 py-1.5 rounded-full text-xs font-medium text-blue-600 dark:text-blue-400 shadow-sm backdrop-blur-sm border border-blue-100/50 dark:border-blue-900/50">
                    {project.icon} <span className="ml-1">Site Vitrine</span>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5 flex-grow text-sm">
                    {project.description}
                  </p>
                  
                  {/* Badges des technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-700/50 rounded-md text-xs transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/10 dark:hover:text-blue-400 hover:border-blue-100 dark:hover:border-blue-900/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Bouton avec effet de survol */}
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-md bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/30 font-medium hover:bg-blue-100 dark:hover:bg-blue-800/30 transform hover:-translate-y-0.5 transition-all duration-300 text-xs"
                  >
                    Voir le projet
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
