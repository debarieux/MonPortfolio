"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const technologies = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "🌐" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "🎨" }
    ]
  },
  {
    category: "Backend (en cours d'apprentissage)",
    items: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚀" },
      { name: "GraphQL", icon: "📊" },
      { name: "Bootstrap", icon: "🐘" }
    ]
  },
  {
    category: "Outils",
    items: [
      { name: "Git", icon: "🐙" },
      { name: "Docker", icon: "🐳" },
      { name: "Jest", icon: "🧪" },
      { name: "Cypress", icon: "🧑‍💻" }
    ]
  }
]

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Mon Stack Technique
          </h2>
              <p className="text-muted-foreground">
                J&apos;utilise les dernières technologies pour créer des applications performantes et modernes.
              </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">
                {tech.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {tech.items.map((item) => (
                  <Badge
                    key={item.name}
                    variant="outline"
                    className="text-sm px-4 py-2"
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.name}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Badge variant="secondary" className="text-sm">
            🛠 Toujours en apprentissage de nouvelles technologies
          </Badge>
        </div>
      </div>
    </section>
  )
}
