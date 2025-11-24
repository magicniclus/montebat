import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: "Charpente - MONTEBAT | Devis Gratuit Charpente France",
  description: "Expert en charpente en France. MONTEBAT réalise conception et réalisation de charpentes traditionnelles et industrielles. Bois, métal. Devis gratuit partout en France.",
  keywords: "charpente France, charpente bois, charpente métal, charpente traditionnelle, charpente industrielle, devis gratuit charpente",
  authors: [{ name: "JOSE VARELA" }],
  creator: "MONTEBAT",
  publisher: "MONTEBAT",
};

export default function CharpentePage() {
  const subServices = [
    { title: "Charpente Traditionnelle", description: "Conception et réalisation de charpentes traditionnelles en bois massif.", icon: "🌲" },
    { title: "Charpente Industrielle", description: "Charpentes industrielles préfabriquées pour construction rapide.", icon: "🏭" },
    { title: "Charpente Métal", description: "Structures métalliques pour bâtiments industriels et commerciaux.", icon: "⚙️" },
    { title: "Rénovation", description: "Rénovation et renforcement de charpentes anciennes.", icon: "🔄" }
  ];

  const advantages = [
    "Expertise technique en charpente depuis 5 ans",
    "Savoir-faire traditionnel et moderne",
    "Intervention partout en France",
    "Devis gratuit et personnalisé",
    "Matériaux sélectionnés et certifiés",
    "Garantie décennale"
  ];

  const serviceArea = ["France", "Paris", "Lyon", "Marseille", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille"];

  const contactInfo = {
    phone: "06 95 52 53 72",
    email: "contact@montebat.fr",
    address: "78 - Toute la France"
  };

  return (
    <ServicePage
      title="Charpente - MONTEBAT | Devis Gratuit Charpente France"
      description="Expert en charpente en France. MONTEBAT réalise conception et réalisation de charpentes traditionnelles et industrielles. Bois, métal. Devis gratuit partout en France."
      keywords={["charpente France", "charpente bois", "charpente métal", "charpente traditionnelle", "charpente industrielle", "devis gratuit charpente"]}
      serviceName="Charpente"
      heroImage="/placo.png"
      heroTitle="Charpente en France"
      heroSubtitle="Structure bois et métal avec MONTEBAT"
      sector="France"
      location="France entière"
      mainDescription="MONTEBAT, entrepreneur du bâtiment depuis 5 ans, vous propose ses services de charpente partout en France. Nous concevons et réalisons tous types de charpentes avec un savoir-faire artisanal et une expertise technique reconnue pour des structures durables et esthétiques."
      subServices={subServices}
      advantages={advantages}
      serviceArea={serviceArea}
      contactInfo={contactInfo}
    />
  );
}
