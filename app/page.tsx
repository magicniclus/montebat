import { Metadata } from 'next';
import HomeClient from './home-client';

// Métadonnées SEO pour la page d'accueil
export const metadata: Metadata = {
  title: "MONTEBAT - Entrepreneur du Bâtiment en France",
  description: "MONTEBAT, entrepreneur du bâtiment en France. Spécialisé en gros œuvre, carrelage, ravalement, couverture et charpente depuis 5 ans. Devis gratuit et intervention partout en France.",
  keywords: "entrepreneur bâtiment France, gros œuvre, carrelage, ravalement façade, couverture toiture, charpente, MONTEBAT, travaux bâtiment, devis gratuit, artisan qualifié, BTP France",
  authors: [{ name: "JOSE VARELA" }],
  creator: "MONTEBAT",
  publisher: "MONTEBAT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "MONTEBAT - Entrepreneur du Bâtiment en France",
    description: "Entrepreneur du bâtiment, gros œuvre, carrelage, ravalement, couverture et charpente. Intervention partout en France. Devis gratuit et personnalisé.",
    type: "website",
    locale: "fr_FR",
    siteName: "MONTEBAT - Entrepreneur du Bâtiment",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MONTEBAT - Entrepreneur du Bâtiment en France",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MONTEBAT - Entrepreneur du Bâtiment",
    description: "Entrepreneur du bâtiment, gros œuvre, carrelage, ravalement, couverture et charpente en France. Devis gratuit.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return <HomeClient />;
}
