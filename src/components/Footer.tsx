"use client"

import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa"
import { motion } from "framer-motion"

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-50/90 dark:supports-[backdrop-filter]:bg-gray-900/60 border-t border-gray-200 dark:border-gray-800">
      {/* Citation inspirante */}
      <div className="container px-4 py-12 mx-auto">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 md:p-10 rounded-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          <svg className="w-12 h-12 opacity-10 absolute top-8 left-8 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 6.5C11 8.98528 8.98528 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M22 6.5C22 8.98528 19.9853 11 17.5 11C15.0147 11 13 8.98528 13 6.5C13 4.01472 15.0147 2 17.5 2C19.9853 2 22 4.01472 22 6.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11 17.5C11 19.9853 8.98528 22 6.5 22C4.01472 22 2 19.9853 2 17.5C2 15.0147 4.01472 13 6.5 13C8.98528 13 11 15.0147 11 17.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M22 17.5C22 19.9853 19.9853 22 17.5 22C15.0147 22 13 19.9853 13 17.5C13 15.0147 15.0147 13 17.5 13C19.9853 13 22 15.0147 22 17.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          <svg className="w-12 h-12 opacity-10 absolute bottom-8 right-8 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.25 11.5L4.75 14.5L12 18.75L19.25 14.5L14.6722 11.4444" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          
          <blockquote className="relative z-10">
            <p className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 italic mb-6">
              “Le code a la capacité de transformer une idée en expérience, un concept en réalité. Notre mission est de donner vie à vos ambitions numériques avec passion et précision.”
            </p>
            <footer className="text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-blue-600 dark:text-blue-400">David Debarieux</span>
              <span className="mx-2">•</span>
              <span>Développeur Web Freelance</span>
            </footer>
          </blockquote>
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container px-4 pt-6 pb-10 mx-auto"
      >
        <div className="grid gap-10 md:grid-cols-12">
          {/* Logo et À propos */}
          <motion.div variants={itemVariants} className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 p-0.5">
                <div className="absolute inset-0.5 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">D</span>
                </div>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">David Debarieux</h2>
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Développeur web expert en création de sites vitrines performants, j’assemble design moderne, code optimisé et structure SEO rigoureuse pour bâtir des identités digitales solides et évolutives, taillées pour les auto-entrepreneurs, artisans et petites entreprises.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 text-blue-600 dark:text-blue-400"
                aria-label="Github"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 text-blue-600 dark:text-blue-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 text-blue-600 dark:text-blue-400"
                aria-label="Twitter"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Navigation et liens rapides */}
          <motion.div variants={itemVariants} className="md:col-span-3 space-y-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white after:content-[''] after:block after:w-10 after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:rounded-full after:mt-2">
              Navigation
            </h3>
            <nav className="grid gap-3">
              <Link 
                href="/#about" 
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 group-hover:bg-blue-600 dark:group-hover:bg-blue-400 transition-colors duration-300"></span>
                À propos
              </Link>
              <Link 
                href="/#skills" 
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 group-hover:bg-blue-600 dark:group-hover:bg-blue-400 transition-colors duration-300"></span>
                Compétences
              </Link>
              <Link 
                href="/#featured-projects" 
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 group-hover:bg-blue-600 dark:group-hover:bg-blue-400 transition-colors duration-300"></span>
                Projets
              </Link>
              <Link 
                href="/#services" 
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 group-hover:bg-blue-600 dark:group-hover:bg-blue-400 transition-colors duration-300"></span>
                Services
              </Link>
              <Link 
                href="/#pricing" 
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 group-hover:bg-blue-600 dark:group-hover:bg-blue-400 transition-colors duration-300"></span>
                Tarifs
              </Link>
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="md:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white after:content-[''] after:block after:w-10 after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:rounded-full after:mt-2">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaMapMarkerAlt className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Adresse</h4>
                  <p className="text-gray-600 dark:text-gray-300">Lille, France</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaEnvelope className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                  <a href="mailto:contact@daviddebarieux.fr" className="text-blue-600 dark:text-blue-400 hover:underline">
                    contact@daviddebarieux.fr
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaPhone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Téléphone</h4>
                  <a href="tel:+33600000000" className="text-blue-600 dark:text-blue-400 hover:underline">
                    +33 6 00 00 00 00
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bas de footer avec copyright et liens légaux */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container px-4 py-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} <span className="font-medium">David Debarieux</span>. Tous droits réservés.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link 
              href="/mentions-legales" 
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Mentions légales
            </Link>
            <Link 
              href="/politique-de-confidentialite" 
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Politique de confidentialité
            </Link>
            <Link 
              href="/#contact" 
              className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
