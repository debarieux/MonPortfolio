"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

// Témoignages optimisés avec des chemins d'images corrects et informations cohérentes
const testimonials = [
  {
    id: 1,
    name: "Christopher T-B",
    role: "Dirigeant PME",
    image: "/images/avatars/profile.jpg",
    content: "Un développeur exceptionnel qui a transformé mes idées en une plateforme efficace et intuitive. Son expertise technique et sa créativité ont été déterminantes pour le succès de mon site web.",
    rating: 5
  },
  {
    id: 2,
    name: "Céline Debarieux",
    role: "Photographe indépendante",
    image: "/images/avatars/profile.jpg",
    content: "Collaboration exemplaire et livraison dans les délais. Les solutions proposées ont dépassé mes attentes en termes de qualité et de performance pour mon portfolio en ligne.",
    rating: 5
  },
  {
    id: 3,
    name: "Yvan Brigitte",
    role: "Artisan menuisier",
    image: "/images/avatars/profile.jpg",
    content: "Une approche unique combinant design et efficacité. Le résultat final capture parfaitement l'esprit de mon entreprise artisanale tout en offrant une présence en ligne optimisée.",
    rating: 5
  }
]

// Composant Star pour éviter la duplication de code SVG
const Star = () => (
  <svg
    className="w-5 h-5 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// Animation variants pour les témoignages
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
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
      type: "spring",
      stiffness: 50,
      damping: 15
    }
  }
}

export default function TestimonialsSection() {
  return (
    <section 
      id="testimonials" 
      className="py-24 md:py-32 bg-gradient-to-b from-white to-blue-50/20 dark:from-gray-950 dark:to-gray-900/80"
      aria-label="Témoignages clients de David Debarieux, développeur web"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 pb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block"
          >
            Ce qu'ils disent de moi
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            La satisfaction de mes clients est ma priorité et ma meilleure récompense
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="h-full"
            >
              <Card 
                className="p-8 md:p-10 h-full flex flex-col rounded-2xl bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 relative overflow-hidden group"
              >
                {/* Elément décoratif */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
                
                {/* Citation décorative */}
                <div className="absolute top-4 right-4 opacity-10 text-6xl text-blue-600 dark:text-blue-400 font-serif">"</div>
                
                <div className="flex-grow flex flex-col">
                  <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-8 italic relative z-10">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex items-start gap-5 mt-6">
                      <Avatar className="w-16 h-16 rounded-full border-4 border-white dark:border-gray-900 shadow-md relative">
                        <AvatarImage 
                          src={testimonial.image} 
                          alt={`Photo de ${testimonial.name}`} 
                          className="object-cover" 
                        />
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{testimonial.name}</h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                          {testimonial.role}
                        </p>
                        <div className="flex gap-1" aria-label={`Note de ${testimonial.rating} étoiles sur 5`}>
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
            >
              <span>Démarrez votre projet</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
