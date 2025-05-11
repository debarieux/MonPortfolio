import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du portfolio de David Debarieux',
}

export default function LegalPage() {
  return (
    <main className="container py-16">
      <h1 className="text-3xl font-bold mb-8">Mentions légales</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Éditeur du site</h2>
        <p>
          David Debarieux<br />
          Développeur web indépendant<br />
          N° SIRET : [À compléter]<br />
          Contact : contact@daviddebarieux.fr
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">Hébergement</h2>
        <p>
          Vercel Inc.<br />
          340 S Lemon Ave #4133<br />
          Walnut, CA 91789<br />
          États-Unis
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">Propriété intellectuelle</h2>
        <p>
          L&#39;ensemble des éléments du site (textes, images, vidéos, etc.) sont la propriété exclusive de David Debarieux ou de ses partenaires.
        </p>
      </section>
    </main>
  )
}
