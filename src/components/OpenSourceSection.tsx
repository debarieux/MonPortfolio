"use client"

import { Card } from "@/components/ui/card"
import Button from "@/components/ui/button"
import { Github } from "lucide-react"

const projects = [
  {
    name: "React UI Kit",
    description: "Bibliothèque de composants UI modernes",
    stars: 1200,
    url: "https://github.com"
  },
  {
    name: "Next.js Boilerplate",
    description: "Template de démarrage pour Next.js",
    stars: 850,
    url: "https://github.com"  
  },
  {
    name: "Tailwind Plugins",
    description: "Collection de plugins utiles pour Tailwind",
    stars: 650,
    url: "https://github.com"
  }
]

export function OpenSourceSection() {
  return (
    <section id="open-source" className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
          Open Source
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.name} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">
                  {project.name}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Github className="w-5 h-5" />
                  <span>{project.stars}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                {project.description}
              </p>

              <Button asChild variant="outline" className="w-full hover:scale-105 transition-transform duration-200">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  Voir sur GitHub
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
