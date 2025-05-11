"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"

const awards = [
  {
    title: "Certification AWS",
    image: "/images/awards/aws.png",
    year: "2024"
  },
  {
    title: "Meilleur Développeur",
    image: "/images/awards/best-dev.png",
    year: "2023"
  },
  {
    title: "Prix Innovation",
    image: "/images/awards/innovation.png", 
    year: "2022"
  },
  {
    title: "Certification React",
    image: "/images/awards/react.png",
    year: "2021"
  }
]

export function AwardsSection() {
  return (
    <section id="awards" className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
          Reconnaissances
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {awards.map((award) => (
            <Card key={award.title} className="p-6 text-center">
              <div className="relative h-32 w-32 mx-auto mb-4">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className="object-contain"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">
                {award.title}
              </h3>
              <p className="text-muted-foreground">
                {award.year}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
