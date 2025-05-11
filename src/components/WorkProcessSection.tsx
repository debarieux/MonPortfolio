"use client"

import { motion } from "framer-motion"

const processSteps = [
  {
    step: 1,
    title: "Conception",
    description: "Écoute des besoins, échanges personnalisés, et création d’un wireframe simple pour valider la structure du futur site.",
    icon: "📐"
  },
  {
    step: 2,
    title: "Développement",
    description: "Création du site avec un design responsive, clair et rapide. Utilisation de technologies modernes : HTML, Tailwind CSS, TypeScript, React.",
    icon: "💻"
  },
  {
    step: 3,
    title: "Revue & Tests",
    description: "Tests manuels sur mobile, tablette, et ordinateur. Optimisation du code, ajustements visuels, relecture ensemble avant livraison.",
    icon: "🧪"
  },
  {
    step: 4,
    title: "Déploiement",
    description: "Déploiement sur Vercel ou Netlify. Accompagnement sur l’hébergement, nom de domaine, et prise en main du site.",
    icon: "🚀"
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15
    }
  }
}

export function WorkProcessSection() {
  return (
    <section id="work-process" className="py-28 md:py-36 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 pb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block"
          >
            Ma Méthodologie de Travail
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            Une approche simple et efficace pour transformer vos idées en réalité numérique
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Ligne de connexion pour desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-4 gap-10 md:gap-6 lg:gap-10 relative z-10">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative group"
              >
                {/* Numéro d'étape avec animation */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                
                {/* Contenu de l'étape */}
                <div className="text-center pt-6">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">{step.icon}</div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Indicateur de prochaine étape (sauf pour la dernière) */}
                {i < processSteps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 transform -translate-y-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Démarrer votre projet
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
