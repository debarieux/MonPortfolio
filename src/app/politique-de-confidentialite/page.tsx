import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité du portfolio de David Debarieux',
}

export default function PrivacyPage() {
  return (
    <main className="container py-16">
      <h1 className="text-3xl font-bold mb-8">Politique de confidentialité</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Collecte des informations</h2>
        <p>
          Nous recueillons des informations lorsque vous remplissez le formulaire de contact.
          Les informations collectées incluent votre nom et adresse e-mail.
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">Utilisation des informations</h2>
        <p>
          Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :
          <ul className="list-disc pl-6 mt-2">
            <li>Vous contacter en réponse à votre demande</li>
            <li>Améliorer notre service client</li>
          </ul>
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">Protection des informations</h2>
        <p>
          Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles.
        </p>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-xl font-semibold">Consentement</h2>
        <p>
          En utilisant notre site, vous consentez à notre politique de confidentialité.
        </p>
      </section>
    </main>
  )
}
