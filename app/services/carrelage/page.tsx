import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: "Carrelage - MONTEBAT | Devis Gratuit Pose Carrelage France",
  description: "Expert en pose de carrelage en France. MONTEBAT réalise sols et murs, intérieur et extérieur. Faïence, grès cérame, pierre naturelle. Devis gratuit partout en France.",
  keywords: "carrelage France, pose carrelage, faïence, grès cérame, pierre naturelle, carreleur, devis gratuit carrelage, revêtement sol",
  authors: [{ name: "JOSE VARELA" }],
  creator: "MONTEBAT",
  publisher: "MONTEBAT",
};

export default function CarrelagePage() {
  const subServices = [
    { title: "Carrelage Sol", description: "Pose de carrelage pour tous types de sols intérieurs et extérieurs.", icon: "🏠" },
    { title: "Carrelage Mural", description: "Revêtement mural en faïence, grès cérame ou pierre naturelle.", icon: "🧱" },
    { title: "Terrasses", description: "Carrelage extérieur pour terrasses, balcons et espaces extérieurs.", icon: "🌿" },
    { title: "Salles de Bain", description: "Carrelage spécialisé pour salles de bain et pièces humides.", icon: "🚿" }
  ];

  const advantages = [
    "Expertise en pose de carrelage depuis 5 ans",
    "Large choix de matériaux et finitions",
    "Intervention partout en France",
    "Devis gratuit et personnalisé",
    "Travaux soignés et durables",
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
      title="Carrelage - MONTEBAT | Devis Gratuit Pose Carrelage France"
      description="Expert en pose de carrelage en France. MONTEBAT réalise sols et murs, intérieur et extérieur. Faïence, grès cérame, pierre naturelle. Devis gratuit partout en France."
      keywords={["carrelage France", "pose carrelage", "faïence", "grès cérame", "pierre naturelle", "carreleur", "devis gratuit carrelage", "revêtement sol"]}
      serviceName="Carrelage"
      heroImage="/plomberie.png"
      heroTitle="Carrelage en France"
      heroSubtitle="Revêtements sols et murs avec MONTEBAT"
      sector="France"
      location="France entière"
      mainDescription="MONTEBAT, entrepreneur du bâtiment depuis 5 ans, vous propose ses services de pose de carrelage partout en France. Nous réalisons tous types de revêtements : sols, murs, intérieur, extérieur avec des matériaux de qualité et un savoir-faire reconnu."
      subServices={subServices}
      advantages={advantages}
      serviceArea={serviceArea}
      contactInfo={contactInfo}
    />
  );
}
