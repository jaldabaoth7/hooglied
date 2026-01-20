/**
 * Site Configuration
 * 
 * Dit bestand bevat alle site-specifieke configuratie.
 * Pas dit bestand aan om de template te personaliseren voor een nieuwe site.
 */

export interface HeroSection {
  /** Eerste regel van de titel (boven de gekleurde tekst) */
  titleLine1: string;
  /** Tweede regel van de titel (de gekleurde/opvallende tekst) */
  titleLine2: string;
  /** Citaat of ondertitel onder de hoofdtitel */
  quote: string;
  /** Tekst voor de scroll-indicator */
  scrollIndicator: string;
}

export interface IntroSection {
  /** Titel van de introductiesectie */
  title: string;
  /** Beschrijvende tekst */
  description: string;
}

export interface JourneysSection {
  /** Titel boven de reis-overzicht */
  title: string;
  /** Ondertitel */
  subtitle: string;
  /** Hint tekst */
  hint: string;
}

export interface RitualCTA {
  /** Of de rituaal CTA getoond moet worden */
  show: boolean;
  /** Titel */
  title: string;
  /** Beschrijving */
  description: string;
  /** Link tekst */
  linkText: string;
}

export interface FooterConfig {
  /** Copyright tekst */
  copyright: string;
  /** Tagline onder de copyright */
  tagline: string;
}

export interface ThemeConfig {
  /** Primaire accent kleur (Tailwind kleur naam, bijv. 'rose', 'blue', 'emerald') */
  accentColor: string;
  /** Secundaire/achtergrond kleur familie (bijv. 'stone', 'slate', 'zinc') */
  baseColor: string;
}

export interface SiteConfig {
  /** Site metadata */
  meta: {
    /** Site titel (voor browser tab en SEO) */
    title: string;
    /** Site beschrijving (voor SEO) */
    description: string;
    /** Open Graph beschrijving (voor social sharing) */
    ogDescription: string;
    /** Site naam */
    siteName: string;
    /** Taal code */
    locale: string;
  };

  /** Thema configuratie */
  theme: ThemeConfig;

  /** Hero sectie configuratie */
  hero: HeroSection;

  /** Introductie sectie */
  intro: IntroSection;

  /** Reizen overzicht sectie */
  journeys: JourneysSection;

  /** Rituaal Call-to-Action */
  ritualCTA: RitualCTA;

  /** Footer configuratie */
  footer: FooterConfig;

  /** Teksten voor de journey pagina's */
  journeyPage: {
    /** Terug link tekst */
    backText: string;
    /** Scroll indicator tekst */
    scrollText: string;
    /** Terug naar overzicht tekst */
    returnText: string;
  };

  /** Teksten voor de rituaal pagina */
  ritualPage: {
    /** Terug link tekst */
    backText: string;
  };
}

/**
 * De huidige site configuratie
 * 
 * Pas deze configuratie aan om de template te personaliseren.
 */
export const siteConfig: SiteConfig = {
  meta: {
    title: "Geestelijk Hooglied",
    description: "Een meditatieve reis door het Geestelijk Hooglied van Johannes van het Kruis - de mystieke dialoog tussen Bruid en Bruidegom.",
    ogDescription: "Het Geestelijk Hooglied van Johannes van het Kruis - een poëtische verkenning van de mystieke vereniging.",
    siteName: "Geestelijk Hooglied",
    locale: "nl_NL",
  },

  theme: {
    accentColor: "amber",
    baseColor: "stone",
  },

  hero: {
    titleLine1: "Geestelijk",
    titleLine2: "Hooglied",
    quote: "\"Waar houdt ge U verborgen, Beminde,\nen laat me in zuchten achter?\"",
    scrollIndicator: "Laat het lied klinken",
  },

  intro: {
    title: "De Mystieke Dialoog",
    description: "Johannes van het Kruis schreef dit gedicht in 1577-78 tijdens zijn gevangenschap. Het beschrijft de reis van de ziel naar de mystieke vereniging met het Goddelijke, verbeeld als de liefde tussen Bruid en Bruidegom.",
  },

  journeys: {
    title: "De Reis van de Ziel",
    subtitle: "Van zoeken naar vinden, van verlangen naar vereniging",
    hint: "Klik om de verzen te lezen",
  },

  ritualCTA: {
    show: false,
    title: "De Volledige Tekst",
    description: "Lees het complete Geestelijk Hooglied.",
    linkText: "Naar de tekst",
  },

  footer: {
    copyright: "Geestelijk Hooglied",
    tagline: "Johannes van het Kruis, 1577-78",
  },

  journeyPage: {
    backText: "Terug",
    scrollText: "Scroll om te beginnen",
    returnText: "Terug naar overzicht",
  },

  ritualPage: {
    backText: "Terug",
  },
};
