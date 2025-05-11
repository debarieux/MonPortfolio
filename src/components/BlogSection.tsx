"use client"

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const articles = [
  {
    id: 1,
    title: "5 tendances de développement web à suivre en 2025",
    description: "Découvrez les technologies émergentes qui vont révolutionner le développement web dans les prochaines années.",
    image: "/images/blog/blog1.jpg",
    date: "15 Janvier 2025",
    tags: ["Tendances", "Technologie"],
    content: `<h3>Les 5 tendances incontournables du développement web en 2025</h3>

<p>Le monde du développement web évolue à une vitesse impressionnante. Voici les tendances majeures qui transforment notre façon de créer et d'interagir avec le web :</p>

<ol>
<li><strong>L'IA générative dans les interfaces</strong> - Les outils d'IA comme Copilot et ChatGPT s'intègrent directement dans les workflows de développement, accélérant considérablement la production de code et la création d'interfaces.</li>

<li><strong>WebAssembly et Edge Computing</strong> - Ces technologies permettent d'exécuter du code à la vitesse native directement dans le navigateur ou au plus près de l'utilisateur.</li>

<li><strong>Architecture Headless et API-first</strong> - La séparation entre backend et frontend devient la norme pour des applications plus modulaires et flexibles.</li>

<li><strong>Web3 et applications décentralisées</strong> - Le développement de DApps et l'intégration de technologies blockchain continuent de gagner en maturité.</li>

<li><strong>Expériences immersives</strong> - Les interfaces en 3D, la réalité augmentée via WebXR et les interfaces conversationnelles transforment l'expérience utilisateur.</li>
</ol>`
  },
  {
    id: 2,
    title: "Pourquoi choisir Next.js pour vos projets web ?",
    description: "Une analyse approfondie des avantages de Next.js pour le développement moderne d'applications web.",
    image: "/images/blog/blog2.jpg",
    date: "10 Janvier 2025",
    tags: ["Next.js", "Performance"],
    content: `<h3>Next.js : Le framework React qui révolutionne le développement web</h3>

<p>Next.js s'est imposé comme un outil incontournable dans l'écosystème React, offrant des fonctionnalités qui transforment radicalement l'expérience des développeurs et des utilisateurs.</p>

<h4>Avantages décisifs :</h4>

<ul>
<li><strong>Rendu hybride</strong> - Next.js combine intelligemment le rendu côté serveur (SSR), statique (SSG) et côté client, optimisant ainsi chaque page selon ses besoins spécifiques.</li>

<li><strong>Performance optimisée</strong> - Le framework intègre automatiquement des optimisations critiques comme le code splitting, l'image optimization et le prefetching intelligent.</li>

<li><strong>Développement simplifié</strong> - Son système de routing basé sur le système de fichiers et ses API routes intégrées réduisent considérablement la complexité du code.</li>

<li><strong>SEO avancé</strong> - Le rendu côté serveur et les métadonnées flexibles offrent un contrôle optimal pour le référencement.</li>
</ul>

<p>Ces fonctionnalités font de Next.js le choix idéal pour des projets allant des blogs aux applications d'entreprise complexes.</p>`
  },
  {
    id: 3,
    title: "Optimisation des performances web : les meilleures pratiques",
    description: "Guide complet pour améliorer les performances de vos applications web.",
    image: "/images/blog/blog3.jpg",
    date: "5 Janvier 2025",
    tags: ["Performance", "Optimisation"],
    content: `<h3>Guide essentiel d'optimisation des performances web</h3>

<p>Les performances d'un site web influencent directement l'expérience utilisateur, le taux de conversion et même le référencement. Voici les stratégies clés pour maximiser la vitesse et la réactivité de vos applications.</p>

<h4>Stratégies d'optimisation essentielles :</h4>

<ul>
<li><strong>Optimisation des images</strong> - Utilisez des formats modernes (WebP, AVIF), le redimensionnement automatique et le lazy loading pour réduire considérablement le temps de chargement.</li>

<li><strong>Minimisation des ressources</strong> - Compressez et minifiez vos fichiers CSS, JavaScript et HTML pour réduire leur taille.</li>

<li><strong>Stratégies de cache avancées</strong> - Implémentez un système de cache intelligent pour réduire les requêtes serveur et accélérer les visites répétées.</li>

<li><strong>Core Web Vitals</strong> - Concentrez-vous sur l'amélioration des métriques LCP, FID et CLS pour satisfaire aux exigences de Google.</li>
</ul>

<p>L'optimisation des performances n'est pas une étape ponctuelle mais un processus continu qui nécessite des tests réguliers et des ajustements basés sur des données réelles d'utilisation.</p>`
  }
]

// Interface pour les articles de blog
interface BlogArticle {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  tags: string[];
  content: string;
}

// Composant Modal pour afficher le contenu des articles
const BlogModal = ({ 
  article, 
  isOpen, 
  onClose 
}: { 
  article: BlogArticle; 
  isOpen: boolean; 
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-6">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Fermer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span>{article.date}</span>
              <div className="flex gap-2">
                {article.tags.map((tag: string, i: number) => (
                  <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
      </div>
    </div>
  );
};

export default function BlogSection() {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  const openModal = (article: BlogArticle) => {
    setSelectedArticle(article);
    // Désactive le défilement du body quand la modale est ouverte
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedArticle(null);
    // Réactive le défilement du body quand la modale est fermée
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900" aria-label="Blog et ressources">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Blog & Ressources
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => openModal(article)}>
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={800}
                  height={450}
                  className="rounded-t-lg object-cover w-full aspect-video transition-transform hover:scale-105 duration-300"
                  priority={article.id === 1}
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag: string, i: number) => (
                    <span 
                      key={i}
                      className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {article.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {article.date}
                  </div>
                  <button 
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center gap-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(article);
                    }}
                  >
                    Lire l&apos;article
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Voir tous les articles
          </Link>
        </div>
      </div>

      {/* Modal pour afficher le contenu de l'article */}
      {selectedArticle && (
        <BlogModal 
          article={selectedArticle} 
          isOpen={!!selectedArticle} 
          onClose={closeModal} 
        />
      )}
    </section>
  )
}
