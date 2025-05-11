"use client";

import { LogoCarousel } from "@/components/ui/LogoCarousel";
import methodologies from "../../data/methodologies.json";

export const MethodologySection = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Ma Méthodologie de Travail
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          J&rsquo;adapte mes méthodes de travail en fonction des besoins de chaque projet,
          en combinant les meilleures pratiques des différentes approches.
        </p>
        <LogoCarousel logos={methodologies} columns={3} />
      </div>
    </section>
  );
};
