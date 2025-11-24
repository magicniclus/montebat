import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

// Métadonnées SEO pour la page Gros Œuvre
export const metadata: Metadata = {
  title: "Gros Œuvre - MONTEBAT | Devis Gratuit Construction France",
  description: "Expert en gros œuvre en France. MONTEBAT réalise fondations, murs porteurs, dalles et structures. Devis gratuit et intervention partout en France.",
  keywords: "gros œuvre France, fondations, murs porteurs, dalles béton, structure bâtiment, construction neuve, devis gratuit gros œuvre, entrepreneur bâtiment",
  authors: [{ name: "JOSE VARELA" }],
  creator: "MONTEBAT",
  publisher: "MONTEBAT",
  openGraph: {
    title: "Gros Œuvre France - MONTEBAT | Devis Gratuit",
    description: "Spécialiste gros œuvre en France. Fondations, structures et construction. Devis gratuit et personnalisé.",
    type: "website",
    locale: "fr_FR",
    siteName: "MONTEBAT - Entrepreneur du Bâtiment",
  },
  twitter: {
    card: "summary",
    title: "Gros Œuvre - MONTEBAT",
    description: "Expert gros œuvre, fondations et structures en France. Devis gratuit.",
  },
};

export default function GrosOeuvrePage() {
  const subServices = [
    {
      title: "Fondations",
      description: "Réalisation de fondations solides et durables pour tous types de constructions.",
      icon: "🏗️"
    },
    {
      title: "Murs Porteurs",
      description: "Construction de murs porteurs en béton, parpaing ou brique selon vos besoins.",
      icon: "🧱"
    },
    {
      title: "Dalles Béton",
      description: "Coulage de dalles béton pour sols, terrasses et planchers avec finition soignée.",
      icon: "⚒️"
    },
    {
      title: "Structures",
      description: "Réalisation de structures porteuses pour extensions et constructions neuves.",
      icon: "🏢"
    }
  ];

  const advantages = [
    "Expertise technique reconnue depuis 5 ans",
    "Matériaux de qualité et normes respectées",
    "Intervention partout en France",
    "Devis gratuit et personnalisé",
    "Respect des délais et du budget",
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
      title="Gros Œuvre - MONTEBAT | Devis Gratuit Construction France"
      description="Expert en gros œuvre en France. MONTEBAT réalise fondations, murs porteurs, dalles et structures. Devis gratuit et intervention partout en France."
      keywords={["gros œuvre France", "fondations", "murs porteurs", "dalles béton", "structure bâtiment", "construction neuve", "devis gratuit gros œuvre", "entrepreneur bâtiment"]}
      serviceName="Gros Œuvre"
      heroImage="/placo.png"
      heroTitle="Gros Œuvre en France"
      heroSubtitle="Construction et structure avec MONTEBAT"
      sector="France"
      location="France entière"
      mainDescription="MONTEBAT, entrepreneur du bâtiment depuis 5 ans, vous garantit des travaux de gros œuvre de qualité partout en France. Nous réalisons tous types de fondations, murs porteurs, dalles et structures pour vos projets de construction neuve et rénovation lourde, dans le respect des normes et avec un savoir-faire reconnu."
      subServices={subServices}
      advantages={advantages}
      serviceArea={serviceArea}
      contactInfo={contactInfo}
    />
  );
}
