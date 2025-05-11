import Image from "next/image";
import Button from "@/components/ui/button";
import { AnimatedHeader } from "./AnimatedHeader";
import { Texturina } from 'next/font/google';

// Optimisation de la police en limitant les weights nécessaires
const texturina = Texturina({
  subsets: ['latin'],
  weight: ['400', '700'],  // Réduit aux poids réellement utilisés
  variable: '--font-texturina',
  display: 'swap',  // Améliore les performances de chargement de la police
});

interface HeroSectionProps {
  name: string;
  tagline: string;
  backgroundImage: string;
}

export default function HeroSection({
  name = "David Debarieux",  // Inverser pour meilleur SEO et cohérence
  tagline = "Développeur web spécialisé dans la création de sites vitrines modernes et performants pour artisans, indépendants et PME. Des solutions sur-mesure pour refléter votre image professionnelle et booster votre visibilité en ligne.",
  backgroundImage = "/images/hero.jpg"
}: HeroSectionProps) {
  return (
    <section 
      id="hero"
      className="relative min-h-[100vh] md:min-h-[110vh] flex items-center justify-center py-20 md:py-32"
      aria-label="Développeur web pour artisans et PME - David Debarieux"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt="Développeur web créant des sites internet pour artisans et PME"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          quality={85}
        />
        <div 
          className="absolute inset-0 bg-black/60" 
          aria-hidden="true"
        />
      </div>

      <div className="text-center space-y-8 max-w-3xl px-4 z-10 animate-fade-in-up">
        <AnimatedHeader 
          text={name}
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white ${texturina.variable} font-texturina drop-shadow-lg`}
        />
        <h2 className="sr-only">Développeur web freelance pour sites vitrines professionnels</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl mx-auto" 
           aria-label="Spécialité : sites web modernes et performants pour artisans, indépendants et PME">
          {tagline}
        </p>
        
        <div className="flex flex-wrap gap-5 justify-center mt-2">
          <Button 
            variant="default" 
            size="lg"
            aria-label="Découvrir les formules de création de sites web"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-lg px-8 py-6 text-base"
            href="#pricing"
          >
            Découvrir mes formules
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            aria-label="Demander un devis gratuit pour votre projet web"
            className="backdrop-blur-sm bg-white/10 border-white hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg px-8 py-6 text-base"
            href="#contact"
          >
            Obtenir un devis gratuit
          </Button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300" aria-label="Scrollez vers le bas pour en savoir plus">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
