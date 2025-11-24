import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  siteUrl: string;
  siteName: string;
  locale: string;
  type: string;
  image: string;
  twitterHandle?: string;
}

export const seoConfig: SEOConfig = {
  title: "MONTEBAT - Entrepreneur du Bâtiment en France",
  description: "MONTEBAT, entrepreneur du bâtiment en France. Spécialisé en gros œuvre, carrelage, ravalement, couverture et charpente depuis 5 ans. Devis gratuit partout en France.",
  keywords: [
    "entrepreneur bâtiment France",
    "gros œuvre",
    "carrelage France",
    "ravalement façade",
    "couverture toiture",
    "charpente bois",
    "travaux bâtiment",
    "construction neuve",
    "rénovation lourde",
    "devis gratuit",
    "MONTEBAT",
    "Jose Varela",
    "entrepreneur qualifié",
    "BTP France",
    "artisan bâtiment"
  ],
  author: "Jose Varela",
  siteUrl: "https://montebat.fr",
  siteName: "MONTEBAT - Entrepreneur du Bâtiment",
  locale: "fr_FR",
  type: "website",
  image: "/og-image.jpg",
  twitterHandle: "@adbetton"
};

export function generateMetadata(
  title?: string,
  description?: string,
  image?: string,
  url?: string
): Metadata {
  const metaTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.title;
  const metaDescription = description || seoConfig.description;
  const metaImage = image || seoConfig.image;
  const metaUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: seoConfig.keywords.join(', '),
    authors: [{ name: seoConfig.author }],
    creator: seoConfig.author,
    publisher: seoConfig.author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: {
      canonical: metaUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      siteName: seoConfig.siteName,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: seoConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: seoConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  };
}

// Données structurées pour l'entreprise
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${seoConfig.siteUrl}#organization`,
  "name": "MONTEBAT",
  "legalName": "Montebat - Entreprise du bâtiment",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/logo.png`,
  "image": `${seoConfig.siteUrl}/og-image.jpg`,
  "description": seoConfig.description,
  "founder": {
    "@type": "Person",
    "name": "Jose Varela"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "France",
    "postalCode": "78000",
    "addressRegion": "France",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33695525372",
    "contactType": "customer service",
    "email": "contact@montebat.fr",
    "availableLanguage": "French"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "France"
    }
  ],
  "serviceType": [
    "Gros œuvre",
    "Carrelage", 
    "Ravalement",
    "Couverture",
    "Charpente"
  ],
  "priceRange": "€€",
  "openingHours": "Mo-Fr 08:00-18:00",
  "sameAs": [
    `${seoConfig.siteUrl}`,
  ]
};

// Schema pour les services
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Construction Services",
  "provider": {
    "@id": `${seoConfig.siteUrl}#organization`
  },
  "areaServed": organizationSchema.areaServed,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services du bâtiment",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gros œuvre",
          "description": "Travaux de gros œuvre : fondations, murs porteurs, dalles et structures"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Carrelage",
          "description": "Pose de carrelage pour sols et murs, intérieur et extérieur"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Ravalement",
          "description": "Ravalement de façades, nettoyage et protection des murs extérieurs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Couverture",
          "description": "Travaux de couverture : pose, réparation et rénovation de toitures"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Charpente",
          "description": "Conception et réalisation de charpentes traditionnelles et industrielles"
        }
      }
    ]
  }
};
