import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: "Ravalement - MONTEBAT | Devis Gratuit Façade France",
  description: "Expert en ravalement de façades en France. MONTEBAT réalise nettoyage, réparation et protection des murs extérieurs. Devis gratuit partout en France.",
  keywords: "ravalement façade France, nettoyage façade, réparation mur extérieur, enduit façade, peinture façade, devis gratuit ravalement",
  authors: [{ name: "JOSE VARELA" }],
  creator: "MONTEBAT",
  publisher: "MONTEBAT",
};

export default function RavalementPage() {
  const subServices = [
    { title: "Nettoyage Façade", description: "Nettoyage professionnel de façades par haute pression ou sablage.", icon: "🧽" },
    { title: "Réparation Murs", description: "Réparation de fissures, joints et dégradations des murs extérieurs.", icon: "🔧" },
    { title: "Enduits", description: "Application d'enduits de façade pour protection et esthétique.", icon: "🎨" },
    { title: "Peinture Façade", description: "Peinture de façade avec produits adaptés aux conditions extérieures.", icon: "🖌️" }
  ];

  const advantages = [
    "Expertise en ravalement depuis 5 ans",
    "Techniques modernes et traditionnelles",
    "Intervention partout en France",
    "Devis gratuit et personnalisé",
    "Matériaux de qualité professionnelle",
    "Garantie sur les travaux"
  ];

  const serviceArea = ["France", "Paris", "Lyon", "Marseille", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille"];

  const contactInfo = {
    phone: "06 95 52 53 72",
    email: "contact@montebat.fr",
    address: "78 - Toute la France"
  };

  return (
    <ServicePage
      title="Ravalement - MONTEBAT | Devis Gratuit Façade France"
      description="Expert en ravalement de façades en France. MONTEBAT réalise nettoyage, réparation et protection des murs extérieurs. Devis gratuit partout en France."
      keywords={["ravalement façade France", "nettoyage façade", "réparation mur extérieur", "enduit façade", "peinture façade", "devis gratuit ravalement"]}
      serviceName="Ravalement"
      heroImage="/maison-work.png"
      heroTitle="Ravalement de Façades en France"
      heroSubtitle="Rénovation de façades avec MONTEBAT"
      sector="France"
      location="France entière"
      mainDescription="MONTEBAT, entrepreneur du bâtiment depuis 5 ans, vous propose ses services de ravalement de façades partout en France. Nous redonnons vie à vos façades par le nettoyage, la réparation et la protection avec des techniques éprouvées et des matériaux de qualité."
      subServices={subServices}
      advantages={advantages}
      serviceArea={serviceArea}
      contactInfo={contactInfo}
    />
  );
}
