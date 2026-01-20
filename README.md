# Presentatie Template

Een herbruikbare template voor interactieve, meditatieve websites met "scrollytelling" technieken.

## Over dit project

Dit project is gebouwd met Next.js, Tailwind CSS en Framer Motion. Het is opgezet als een **template** die eenvoudig aangepast kan worden voor verschillende thematische websites.

## Snel aan de slag

### 1. Kopieer de template

```bash
# Kopieer de hele map naar een nieuwe locatie
cp -r presentatie-app mijn-nieuwe-site
cd mijn-nieuwe-site
npm install
```

### 2. Pas de configuratie aan

Bewerk het bestand `src/data/siteConfig.ts` om de site te personaliseren:

```typescript
export const siteConfig: SiteConfig = {
  meta: {
    title: "Mijn Site Titel",
    description: "Beschrijving voor SEO",
    siteName: "Mijn Organisatie",
    locale: "nl_NL",
  },
  
  theme: {
    accentColor: "rose",    // Kies: rose, blue, emerald, amber, etc.
    baseColor: "stone",      // Kies: stone, slate, zinc, neutral, etc.
  },
  
  hero: {
    titleLine1: "Welkom bij",
    titleLine2: "Mijn Site",
    quote: "Een inspirerend citaat...",
    scrollIndicator: "Begin de reis",
  },
  
  // ... meer configuratie opties
};
```

### 3. Pas de inhoud aan

Bewerk het bestand `src/data/content.ts` om je eigen reizen en secties toe te voegen:

```typescript
export const journeys: Journey[] = [
  {
    id: "reis-1",
    title: "Mijn Eerste Reis",
    subtitle: "De Eerste Stap",
    description: "Beschrijving van deze reis...",
    icon: "Mountain",  // Beschikbaar: Mountain, Flame, Droplets, Wind, Heart
    color: "stone",    // Kleur thema voor deze reis
    sections: [
      {
        title: "Sectie Titel",
        content: "De inhoud van deze sectie...",
        ritualQuote: "Optioneel citaat",
      },
    ],
  },
];
```

### 4. Start de ontwikkelserver

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in uw browser.

## Projectstructuur

```
src/
├── app/                    # Next.js App Router pagina's
│   ├── page.tsx           # Homepage
│   ├── journey/[id]/      # Dynamische reis pagina's
│   └── rituaal/           # Rituaal pagina (optioneel)
├── components/            # Herbruikbare componenten
│   ├── BackgroundEffect   # Achtergrond animatie
│   ├── JourneyCard        # Reis kaart component
│   ├── RichText           # Markdown-achtige tekst rendering
│   └── Section            # Sectie component met scroll animatie
└── data/
    ├── siteConfig.ts      # ⭐ Site configuratie (pas dit aan!)
    └── content.ts         # ⭐ Inhoud (pas dit aan!)
```

## Configuratie Opties

### Site Metadata (`siteConfig.meta`)
| Optie | Beschrijving |
|-------|-------------|
| `title` | Browser tab titel en SEO titel |
| `description` | Meta description voor SEO |
| `ogDescription` | Beschrijving voor social media sharing |
| `siteName` | Naam van de site/organisatie |
| `locale` | Taal code (bijv. `nl_NL`, `en_US`) |

### Thema (`siteConfig.theme`)
| Optie | Beschrijving |
|-------|-------------|
| `accentColor` | Primaire kleur (Tailwind kleurnaam) |
| `baseColor` | Achtergrond kleur familie |

### Secties
Je kunt elke sectie (hero, intro, journeys, ritualCTA, footer) aanpassen via de corresponderende properties in `siteConfig.ts`.

## Inhoud Toevoegen

### Journeys (Reizen)
Elke reis heeft:
- `id`: Unieke identifier (wordt gebruikt in URL)
- `title`: Hoofdtitel
- `subtitle`: Ondertitel
- `description`: Korte beschrijving
- `icon`: Lucide icon naam
- `color`: Tailwind kleur voor thema
- `sections`: Array van secties

### Sections (Secties)
Elke sectie heeft:
- `title`: Sectie titel
- `content`: Tekst (ondersteunt **bold**, *italic*, en [tooltips|uitleg])
- `ritualQuote`: Optioneel citaat

### Rich Text Formatting
In `content` kun je gebruiken:
- `**tekst**` voor **vetgedrukt**
- `*tekst*` voor *cursief*
- `[tekst|uitleg]` voor tooltips
- `[tekst|https://url]` voor links

## Rituaal Pagina

Als je geen rituaal pagina nodig hebt, zet `ritualCTA.show` op `false` in de configuratie.

## Technologie Stack

- **Next.js 15**: App Router, Server Components
- **Tailwind CSS v4**: Styling en theming
- **Framer Motion**: Animaties en transities
- **Lucide React**: Iconen

## Deployen

### Vercel (aanbevolen)
```bash
npm run build
# Push naar GitHub en verbind met Vercel
```

### Statische export
```bash
npm run build
# Output in .next/
```

## Tips

1. **Kleuren**: Gebruik Tailwind's standaard kleuren voor `accentColor` en `baseColor` (rose, blue, green, amber, stone, slate, etc.)

2. **Iconen**: Bekijk [Lucide Icons](https://lucide.dev/) voor beschikbare iconen

3. **Performance**: Grote afbeeldingen kun je in `public/` plaatsen en optimaliseren

4. **SEO**: Vergeet niet de `meta` sectie aan te passen voor elke nieuwe site
