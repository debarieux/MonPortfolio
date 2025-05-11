import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import { texturina } from "@/lib/fonts";
import "./globals.css";

// Optimisation des polices en limitant les poids pour de meilleures performances
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',  // Améliore le CLS (Cumulative Layout Shift)
  weight: ['400', '500', '600', '700'], // Limiter aux poids réellement utilisés
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500'], // Limiter aux poids réellement utilisés
});

// Métadonnées globales du site
export const metadata: Metadata = {
  metadataBase: new URL('https://www.david-debarieux.fr'),
  title: {
    default: "David Debarieux | Développeur Web Indépendant | Sites Vitrines Modernes pour Artisans et PME",
    template: "%s | David Debarieux - Développeur Web Freelance"
  },
  description: "Développeur web freelance spécialisé dans la création de sites vitrines performants pour artisans, indépendants et PME. Conception sur mesure, optimisation SEO, design responsive et accompagnement personnalisé.",
  keywords: [
    'développeur web freelance', 
    'sites vitrines professionnels', 
    'création site web artisan', 
    'site web PME', 
    'site vitrine responsive', 
    'conception web sur mesure', 
    'Next.js', 
    'React', 
    'Tailwind CSS',
    'web design moderne',
    'développeur frontend'
  ],
  authors: [{ name: 'David Debarieux', url: 'https://www.david-debarieux.fr' }],
  creator: 'David Debarieux',
  publisher: 'David Debarieux',
  category: 'Services de développement web',
  applicationName: 'Portfolio David Debarieux',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.david-debarieux.fr',
    title: 'David Debarieux | Sites Web Modernes et Performants pour Artisans et PME',
    description: 'Développeur Web freelance spécialisé dans la création de sites vitrines pour artisans, indépendants et PME. Design moderne, sites rapides et optimisés pour les moteurs de recherche.',
    siteName: 'David Debarieux - Développeur Web Freelance',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'David Debarieux - Développeur Web spécialisé en sites vitrines modernes',
        secureUrl: 'https://www.david-debarieux.fr/images/og-image.jpg',
        type: 'image/jpeg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Debarieux | Développeur Web Freelance',
    description: 'Création de sites web professionnels pour artisans et PME en France. Sites rapides, sécurisés et optimisés pour les moteurs de recherche.',
    creator: '@daviddebarieux',
    images: [
      {
        url: '/images/twitter-image.jpg',
        alt: 'David Debarieux - Développeur Web Freelance'
      }
    ]
  },
  verification: {
    google: 'google-site-verification-code', // u00c0 remplacer avec votre code réel
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.david-debarieux.fr',
    languages: {
      'fr-FR': 'https://www.david-debarieux.fr'
    }
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#0b0f19',
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    title: 'David Debarieux',
    statusBarStyle: 'black-translucent',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" dir="ltr" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#0b0f19" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "David Debarieux - Développeur Web Indépendant",
            "description": "Développeur web spécialisé dans la création de sites vitrines pour artisans, indépendants et PME",
            "url": "https://www.david-debarieux.fr",
            "telephone": "+33600000000",
            "email": "contact@daviddebarieux.fr",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lille",
              "addressRegion": "Hauts-de-France",
              "addressCountry": "FR"
            },
            "image": "https://www.david-debarieux.fr/images/og-image.jpg",
            "priceRange": "€€",
            "sameAs": [
              "https://github.com",
              "https://linkedin.com",
              "https://twitter.com"
            ],
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            }
          }
        ` }} />
      </head>
      <body
        className={`${inter.variable} ${firaCode.variable} ${texturina.variable} antialiased min-h-screen font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-950`}
      >
        {children}
      </body>
    </html>
  );
}
