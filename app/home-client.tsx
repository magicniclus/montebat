'use client';

import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ProjectGallery from '@/components/ProjectGallery';
import ContactSection from '@/components/ContactSection';
import LogoCarousel from '@/components/LogoCarousel';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import { useExitIntent } from '@/hooks/useExitIntent';
import { config } from '@/lib/config';
import { organizationSchema, servicesSchema } from '@/lib/seo-config';

export default function HomeClient() {
  const { showExitIntent, closeExitIntent } = useExitIntent({
    enabled: true,
    delay: 500,
    sensitivity: 20
  });
  
  const servicesData = [
    {
      title: "Gros Œuvre",
      subtitle: "Construction et structure",
      content: "Réalisation de travaux de gros œuvre : fondations, murs porteurs, dalles et structures. Expertise technique pour vos projets de construction neuve et rénovation lourde.",
      image: "/placo.png",
      gradientFrom: "#ff7e5f",
      gradientTo: "#feb47b",
      href: "/services/gros-oeuvre"
    },
    {
      title: "Carrelage",
      subtitle: "Revêtements sols et murs",
      content: "Pose de carrelage pour sols et murs, intérieur et extérieur. Faïence, grès cérame, pierre naturelle. Travaux de qualité avec finitions soignées.",
      image: "/plomberie.png",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2",
      href: "/services/carrelage"
    },
    {
      title: "Ravalement",
      subtitle: "Rénovation de façades",
      content: "Ravalement de façades, nettoyage, réparation et protection des murs extérieurs. Enduits, peintures et traitements pour redonner vie à vos façades.",
      image: "/maison-work.png",
      gradientFrom: "#28a745",
      gradientTo: "#20c997",
      href: "/services/ravalement"
    },
    {
      title: "Couverture",
      subtitle: "Toiture et étanchéité",
      content: "Travaux de couverture : pose, réparation et rénovation de toitures. Tuiles, ardoises, zinc. Étanchéité et isolation pour une protection optimale.",
      image: "/mur.png",
      gradientFrom: "#fd7e14",
      gradientTo: "#ffc107",
      href: "/services/couverture"
    },
    {
      title: "Charpente",
      subtitle: "Structure bois et métal",
      content: "Conception et réalisation de charpentes traditionnelles et industrielles. Bois, métal, rénovation et création. Expertise technique et savoir-faire artisanal.",
      image: "/placo.png",
      gradientFrom: "#6f42c1",
      gradientTo: "#e83e8c",
      href: "/services/charpente"
    }
  ];

  const contactInfo = {
    address: "78 - Toute la France\nIntervention nationale\nRayon d'intervention : France entière",
    phone: "06 95 52 53 72",
    email: "contact@montebat.fr",
    mapEmbedUrl: "https://maps.google.com/maps?q=France&t=&z=6&ie=UTF8&iwloc=&output=embed"
  };

  return (
    <div>
      {/* Données structurées JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      
      <Hero config={config.hero} />
      <LogoCarousel config={config.partners} speed={30} />
      <AboutSection
        id="expertise"
        smallTitle={config.about.sections[0].smallTitle}
        title={config.about.sections[0].title}
        subtitle={config.about.sections[0].subtitle}
        content={config.about.sections[0].content}
        image={config.about.sections[0].image}
        gradientFrom={config.about.sections[0].gradientFrom}
        gradientTo={config.about.sections[0].gradientTo}
        buttonText={config.about.sections[0].buttonText}
        buttonHref={config.about.sections[0].buttonHref}
        reversed={config.about.sections[0].reversed}
      />
      <ServicesSection id="services" cards={servicesData} />
      <ProjectGallery id="realisations" config={config.gallery} />
      <AboutSection
        smallTitle={config.about.sections[1].smallTitle}
        title={config.about.sections[1].title}
        subtitle={config.about.sections[1].subtitle}
        content={config.about.sections[1].content}
        image={config.about.sections[1].image}
        gradientFrom={config.about.sections[1].gradientFrom}
        gradientTo={config.about.sections[1].gradientTo}
        buttonText={config.about.sections[1].buttonText}
        buttonHref={config.about.sections[1].buttonHref}
        reversed={config.about.sections[1].reversed}
      />
      <TeamSection config={config.team} />
      <ContactSection 
        title="Contactez-nous"
        subtitle="Parlons de votre projet de gros œuvre, carrelage, ravalement, couverture ou charpente partout en France"
        contactInfo={contactInfo} 
      />

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitIntent && (
          <ExitIntentPopup onClose={closeExitIntent} />
        )}
      </AnimatePresence>
    </div>
  );
}
