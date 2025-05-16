"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { Check } from "lucide-react";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            💼 Mes Formules
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Toutes mes offres incluent un design personnalisé, un site responsive (adapté aux mobiles), et une vraie écoute pour construire un site qui vous ressemble.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 items-stretch"> {/* Added items-stretch */}
          {/* Formule 1: L’Essentiel */}
          <Card className="flex flex-col border-orange-500/50 border-2 bg-white dark:bg-gray-800/50 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
            <CardHeader className="bg-orange-50 dark:bg-orange-900/20 p-6">
              <CardTitle className="text-2xl font-bold text-orange-700 dark:text-orange-400">🟠 Formule 1 : L’Essentiel</CardTitle>
              <div className="text-orange-600 dark:text-orange-300 min-h-[40px] text-sm">
                Site <strong>1 page</strong> – idéal pour une présence rapide et professionnelle
              </div>
              <div className="text-4xl font-extrabold text-orange-800 dark:text-orange-200 mt-2">270 € <span className="text-sm font-normal">TTC</span></div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start"><Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" /><span>Carte de visite en ligne</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" /><span>Présentation + services + contact</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" /><span>Formulaire intégré</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" /><span>Lien vers les réseaux sociaux</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" /><span>Livraison en <strong>10 à 12 jours</strong></span></li>
              </ul>
            </CardContent>
            <div className="p-6 bg-gray-50 dark:bg-gray-800/30 mt-auto">
              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <a href="#contact">Choisir cette formule</a>
              </Button>
            </div>
          </Card>

          {/* Formule 2: L’Équilibré */}
          <Card className="flex flex-col border-yellow-500/50 border-2 bg-white dark:bg-gray-800/50 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden transform md:scale-105 z-10">
             <div className="text-center py-1 px-4 bg-yellow-500 text-yellow-900 font-semibold text-sm">Populaire</div>
            <CardHeader className="bg-yellow-50 dark:bg-yellow-900/20 p-6">
              <CardTitle className="text-2xl font-bold text-yellow-700 dark:text-yellow-400">🟡 Formule 2 : L’Équilibré</CardTitle>
              <div className="text-yellow-600 dark:text-yellow-300 min-h-[40px] text-sm">
                Site <strong>3 pages</strong> : Accueil – À propos – Contact
              </div>
              <div className="text-4xl font-extrabold text-yellow-800 dark:text-yellow-200 mt-2">410 € <span className="text-sm font-normal">TTC</span></div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start"><Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" /><span>Design moderne et mobile-friendly</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" /><span>Intégration de vos textes, images et logo</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" /><span>SEO de base (référencement naturel)</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" /><span>Livraison en <strong>15 à 20 jours</strong></span></li>
              </ul>
            </CardContent>
            <div className="p-6 bg-gray-50 dark:bg-gray-800/30 mt-auto">
              <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <a href="#contact">Choisir cette formule</a>
              </Button>
            </div>
          </Card>

          {/* Formule 3: Le Complet */}
          <Card className="flex flex-col border-green-500/50 border-2 bg-white dark:bg-gray-800/50 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
            <CardHeader className="bg-green-50 dark:bg-green-900/20 p-6">
              <CardTitle className="text-2xl font-bold text-green-700 dark:text-green-400">🟢 Formule 3 : Le Complet</CardTitle>
              <div className="text-green-600 dark:text-green-300 min-h-[40px] text-sm">
                 Site <strong>5 pages</strong> : Accueil – À propos – Services – Galerie – Contact
              </div>
              <div className="text-4xl font-extrabold text-green-800 dark:text-green-200 mt-2">650 € <span className="text-sm font-normal">TTC</span></div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start"><Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" /><span>Design 100 % personnalisé</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" /><span>Textes optimisés pour le SEO</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" /><span>Formulaire de contact pro</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" /><span>Aide pour le nom de domaine et hébergement</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" /><span>Livraison en <strong>20 à 30 jours</strong></span></li>
              </ul>
            </CardContent>
            <div className="p-6 bg-gray-50 dark:bg-gray-800/30 mt-auto">
              <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <a href="#contact">Choisir cette formule</a>
              </Button>
            </div>
          </Card>
        </div>

        {/* Options disponibles */}
        <div className="mt-16 pt-10">
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Services Complémentaires
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Option 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100 dark:border-indigo-900/30">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2"></div>
              <div className="p-5">
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Création de Logo</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Identité visuelle professionnelle pour renforcer votre marque</p>
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">40 €</div>
              </div>
            </div>
            
            {/* Option 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100 dark:border-indigo-900/30">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2"></div>
              <div className="p-5">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Rédaction SEO</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Contenu optimisé pour le référencement et la conversion</p>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">60 €</div>
              </div>
            </div>
            
            {/* Option 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100 dark:border-indigo-900/30">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2"></div>
              <div className="p-5">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Maintenance</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Suivi technique et mises à jour régulières du site</p>
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">à partir de<br/>25 €<span className="text-sm font-normal">/mois</span></div>
              </div>
            </div>
            
            {/* Option 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100 dark:border-indigo-900/30">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-2"></div>
              <div className="p-5">
                <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Hébergement</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Nom de domaine et hébergement optimisé pour votre site</p>
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">50 €<span className="text-sm font-normal">/an</span></div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 text-gray-600 dark:text-gray-400">
            <p>Tous ces services sont disponibles individuellement ou en complément de votre formule principale.</p>
            <a href="#contact" className="inline-block mt-4 text-indigo-600 dark:text-indigo-400 font-medium hover:underline">Demander un devis personnalisé →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
