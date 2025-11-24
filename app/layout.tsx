import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Script from "next/script";

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
  metadataBase: new URL("https://montebat.fr"),
  alternates: {
    canonical: "https://montebat.fr",
  },
  openGraph: {
    title: "MONTEBAT - Entrepreneur du Bâtiment en France",
    description: "MONTEBAT, entrepreneur du bâtiment, gros œuvre, carrelage, ravalement, couverture et charpente. Intervention partout en France. Devis gratuit et personnalisé.",
    url: "https://montebat.fr",
    siteName: "MONTEBAT - Entrepreneur du Bâtiment",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MONTEBAT - Entrepreneur du Bâtiment en France",
      },
    ],
    locale: "fr_FR",
    type: "website",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="shortcut icon" href="/favicon.png" />
        
        {/* Google tag (gtag.js) - New */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11128083735" strategy="afterInteractive" />
        <Script id="google-analytics-new" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11128083735');
          `}
        </Script>

      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
