import Image from 'next/image';

export default function AboutSection() {
  
  return (
    <section 
      id="about" 
      className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
      aria-label="Section à propos de David Debarieux, développeur web"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image section optimisée pour le SEO et la performance */}
          <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-xl group">
            <Image
              src="/images/Codeur.jpg"
              alt="David Debarieux - Développeur Web Front-end spécialisé en création de sites vitrines pour artisans et PME"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden="true" />
          </div>

          {/* Text section optimisé pour le SEO et l'UX */}
          <div className="space-y-8">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm hover:drop-shadow-md transition-all duration-300 pb-3 mb-2">
                À propos de moi
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
            
            <div className="space-y-5">
              <div className="flex gap-3 items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  👋 Bonjour, je suis <strong className="text-blue-700 dark:text-blue-400">David Debarieux</strong>, développeur web autodidacte basé en France.
                </p>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  J&apos;accompagne les <strong className="text-blue-700 dark:text-blue-400">artisans, indépendants, associations et particuliers</strong> dans la création de sites web modernes, efficaces et adaptés à leurs besoins spécifiques.
                </p>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  Chaque projet est <strong className="text-blue-700 dark:text-blue-400">personnalisé</strong> pour refléter votre image professionnelle, inspirer confiance à vos clients et renforcer votre présence numérique.
                </p>
              </div>
              
              <div className="flex gap-3 items-start mt-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl flex-shrink-0 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl shadow-sm">
                  <h3 className="font-bold text-xl mb-2 text-blue-700 dark:text-blue-400">Spécialité</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Création de <strong>sites vitrines professionnels</strong> simples, clairs et performants. Un travail humain, réactif et accessible, adapté à votre budget.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
              <a 
                href="#pricing" 
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                aria-label="Découvrir les formules de création de sites web de David Debarieux"
              >
                Découvrez mes formules
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 rounded-full bg-white text-blue-600 border-2 border-blue-600 font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 dark:bg-gray-800 dark:border-purple-500 dark:text-purple-400"
                aria-label="Demander un devis gratuit pour votre projet de site web"
              >
                Demander un devis gratuit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
