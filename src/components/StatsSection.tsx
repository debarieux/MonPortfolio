"use client"

import { motion } from "framer-motion"

const stats = [
  {
    value: "5+",
    label: "Sites vitrines réalisés",
    description: "100% Autodidacte. Formé par la pratique, la passion et la rigueur depuis 2019."
  },
  {
    value: "3+",
    label: "Métiers exercés",
    description: "Cuisinier, vendeur & SAV aujourd’hui transformés en force humaine dans le web."
  },
  {
    value: "10+",
    label: "Veille technologique",
    description: "Veille active, je suis les tendances et bonnes pratiques du développement web"
  },
  {
    value: "5",
    label: "Technos principales utilisées",
    description: "HTML/CSS, Tailwind CSS, TypeScript, React."
  }
]

export function StatsSection() {
  return (
    <section id="stats" className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">
            En Chiffres
          </h2>
          <p className="text-gray-400">
            Quelques statistiques clés de mon parcours
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative p-8 bg-gray-800 rounded-lg h-full">
                  <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                    {stat.value}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {stat.label}
                  </h3>
                  <p className="text-gray-400">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium">
            <span className="animate-pulse">🚀</span>
            Toujours en progression
          </div>
        </div>
      </div>
    </section>
  )
}
