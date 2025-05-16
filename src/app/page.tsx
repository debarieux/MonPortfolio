import type { Metadata } from 'next'
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import SkillsSection from "@/components/SkillsSection"
import { ExperienceTimeline } from "@/components/ExperienceTimeline"
import { FeaturedProjectsSection } from "@/components/FeaturedProjectsSection"
import ServicesSection from "@/components/ServicesSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import BlogSection from "@/components/BlogSection"
import { StatsSection } from "@/components/StatsSection"
import { WorkProcessSection } from "@/components/WorkProcessSection"
import { ContactFormSection } from "@/components/ContactFormSection"
import { PricingSection } from "@/components/PricingSection"
import Footer from "@/components/Footer"

// Métadonnées de la page pour optimiser le SEO
export const metadata: Metadata = {
  title: 'David Debarieux | Développeur Web Indépendant | Sites vitrines pour artisans et PME',
  description: 'Développeur web spécialisé dans la création de sites vitrines professionnels pour artisans, indépendants et PME. Solutions sur-mesure, design moderne et optimisation SEO.',
  keywords: ['développeur web', 'sites vitrines', 'artisans', 'PME', 'indépendant', 'responsive design', 'SEO']
};

export default function Home() {
  return (
    <main className="overflow-x-hidden" itemScope itemType="https://schema.org/WebPage">
      {/* Section d'introduction */}
      <HeroSection 
        name="David Debarieux"
        tagline="Sites web modernes et performants pour auto-entrepreneurs, artisans et petites entreprises."
        backgroundImage="/images/hero.jpg"
      />
      
      {/* Sections de présentation et compétences */}
      <AboutSection />
      <SkillsSection />
      <ExperienceTimeline />
      
      {/* Sections projets et services */}
      <FeaturedProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
      
      {/* Sections complémentaires */}
      <BlogSection />
      <StatsSection />
      <WorkProcessSection />
      
      {/* Sections contact et tarification */}
      <PricingSection />
      <ContactFormSection />
      
      {/* Pied de page */}
      <Footer />
    </main>
  )
}
