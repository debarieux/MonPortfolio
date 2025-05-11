"use client"

import { Code, Cpu, Rocket, Search } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import Button from "@/components/ui/button"

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Développement Front-end",
    description: "Création de sites vitrines modernes, rapides et compatibles sur tous les appareils. J’utilise des technologies actuelles comme HTML, Tailwind CSS, TypeScript et React pour offrir des interfaces claires, accessibles et efficaces."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Accessibilité Web",
    description: "Parce qu’un bon site doit être lisible et utilisable par tous, j’intègre les bonnes pratiques d’accessibilité (contrastes, structure claire, navigation fluide) pour offrir une meilleure expérience à tous les utilisateurs."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Optimisation SEO",
    description: "J’optimise chaque site vitrine pour le référencement naturel : structure propre, balises bien placées, rapidité de chargement, et contenu clair. L’objectif : avant tout être le plus visible localement sur Google."
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Audit Technique",
    description: "Pas besoin d’être expert pour savoir si un site peut mieux faire. Je vous accompagne avec un regard technique simple et précis pour corriger les ralentissements, les erreurs, ou encore les défauts d'affichage."
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">
            Mes Services
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Des solutions web sur mesure pour booster votre présence en ligne et valoriser votre activité
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="rounded-xl overflow-hidden bg-white dark:bg-gray-800/80 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardHeader className="pb-0">
                <div className="flex items-center justify-center mb-6 mt-2">
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md group-hover:scale-110 transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-center text-xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-500 dark:to-purple-500 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 transition-all duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-2">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            href="#contact" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            aria-label="Discuter de votre projet de site web"
          >
            Discuter de votre projet
          </Button>
        </div>
      </div>
    </section>
  )
}
