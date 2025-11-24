import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: "Couverture - MONTEBAT | Devis Gratuit Toiture France",
  description: "Expert en couverture et toiture en France. MONTEBAT réalise pose, réparation et rénovation de toitures. Tuiles, ardoises, zinc. Devis gratuit partout en France.",
  keywords: "couverture France, toiture, tuiles, ardoises, zinc, étanchéité toiture, réparation toiture, devis gratuit couverture",
  authors: [{ name: "JOSE VARELA" }],
  creator: "MONTEBAT",
  publisher: "MONTEBAT",
};

export default function CouverturePage() {
  const subServices = [
    { title: "Pose Toiture", description: "Installation complète de toitures neuves avec tous types de matériaux.", icon: "🏠" },
    { title: "Réparation", description: "Réparation de fuites, tuiles cassées et problèmes d'étanchéité.", icon: "🔧" },
    { title: "Rénovation", description: "Rénovation complète de toitures anciennes avec mise aux normes.", icon: "🔄" },
    { title: "Étanchéité", description: "Travaux d'étanchéité pour toitures terrasses et toitures plates.", icon: "💧" }
  ];

  const advantages = [
    "Expertise en couverture depuis 5 ans",
    "Tous types de matériaux : tuiles, ardoises, zinc",
    "Intervention partout en France",
    "Devis gratuit et personnalisé",
    "Garantie décennale sur les travaux",
    "Respect des normes DTU"
  ];

  const serviceArea = ["France", "Paris", "Lyon", "Marseille", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille"];

  const contactInfo = {
    phone: "06 95 52 53 72",
    email: "contact@montebat.fr",
    address: "78 - Toute la France"
  };

  return (
    <ServicePage
      title="Couverture - MONTEBAT | Devis Gratuit Toiture France"
      description="Expert en couverture et toiture en France. MONTEBAT réalise pose, réparation et rénovation de toitures. Tuiles, ardoises, zinc. Devis gratuit partout en France."
      keywords={["couverture France", "toiture", "tuiles", "ardoises", "zinc", "étanchéité toiture", "réparation toiture", "devis gratuit couverture"]}
      serviceName="Couverture"
      heroImage="/mur.png"
      heroTitle="Couverture et Toiture en France"
      heroSubtitle="Toiture et étanchéité avec MONTEBAT"
      sector="France"
      location="France entière"
      mainDescription="MONTEBAT, entrepreneur du bâtiment depuis 5 ans, vous propose ses services de couverture partout en France. Nous réalisons tous travaux de toiture : pose, réparation, rénovation avec une expertise reconnue et des matériaux de qualité pour une protection optimale."
      subServices={subServices}
      advantages={advantages}
      serviceArea={serviceArea}
      contactInfo={contactInfo}
    />
  );
}
