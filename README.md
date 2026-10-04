# KAIROS VOSS — Portfolio & Acoustic Archive

A contemporary, high-end editorial portfolio website for **Kairos Voss** (Vocalist · Orchestral Composer · Sound Architect), crafted with an avant-garde aesthetic inspired by the sophistication, asymmetrical grids, extreme typographic contrast, and restrained monochrome palette of European contemporary artist portfolios.

---

## 🏛️ Visual & Architectural Identity

- **Monochrome Editorial Palette**: Deep matte obsidian (`#0A0A0A`), artisan warm paper off-white (`#F4F2ED`), subtle gold acoustic resonance (`#C9A86A`), and delicate architectural lines (`rgba(255,255,255,0.12)`).
- **Extreme Typographic Contrast**: Ultra-tight leading for massive display headlines (`Geist Sans` / `Helvetica Neue` / `Inter`), paired with meticulous monospace metadata tags (`Geist Mono`).
- **Asymmetrical Editorial Layouts**: Alternating block treatments, dynamic left/right offsets, panoramic full-bleed installation spreads, and zero generic cards.
- **Custom Precision Cursor**: Smooth trailing cursor with contextual states (`"VIEW"`, `"LISTEN"`, `"EXPLORE"`, `"EXPAND"`, `"TOP"`, `"MENU"`).
- **Web Audio API Acoustic Synthesizer**: Interactive real-time sound engine generating harmonic overtone chords, subharmonic drones, and live HTML5 canvas waveform spectrum visualizer.

---

## 📁 Project Structure

```
elara-artist/
├── app/
│   ├── globals.css                # Editorial CSS tokens, typography, custom cursors & animations
│   ├── layout.tsx                 # Root layout with Header, CustomCursor, AudioAtmosphere, Footer & SEO
│   ├── page.tsx                   # Master flagship portfolio experience (9 key sections)
│   ├── about/
│   │   └── page.tsx               # In-depth Biography, 4 Manifesto Principles, Press & Technical Setup
│   ├── projects/
│   │   ├── page.tsx               # Works catalog with category filtering & Grid/List switcher
│   │   └── [slug]/
│   │       └── page.tsx           # Dynamic deep project pages with gallery, audio specs & credits
│   ├── music/
│   │   └── page.tsx               # Complete Discography, 180g Vinyl, Track previews & Streaming
│   ├── live/
│   │   └── page.tsx               # Tour Calendar 2026/2027, Ticket portals & .ICS calendar export
│   └── contact/
│       └── page.tsx               # Global Representation, Booking proposal form & Tech Rider download
├── components/
│   ├── Header.tsx                 # Minimal sticky header with active route tracking & lang switch
│   ├── MobileMenu.tsx             # Full-screen staggered editorial mobile overlay
│   ├── CustomCursor.tsx           # Magnetic interactive cursor with dynamic text labels
│   ├── AudioAtmosphere.tsx        # Web Audio API real-time overtone generator & waveform canvas
│   ├── Hero.tsx                   # 100svh asymmetrical cinematic hero
│   ├── Statement.tsx              # Monumental philosophical statement section
│   ├── AboutTeaser.tsx            # Asymmetrical 2-column artist introduction
│   ├── ProjectsShowcase.tsx       # Alternating editorial project blocks
│   ├── MusicDiscography.tsx       # Discography list with artwork hover reveal
│   ├── LiveEvents.tsx             # Live concert table with status pills & details modal
│   ├── MediaGallery.tsx           # Masonry gallery with keyboard-navigable Lightbox
│   ├── QuoteSection.tsx           # Minimalist architectural quote
│   ├── ContactSection.tsx         # Representation contacts, rider download & validated form
│   └── Footer.tsx                 # Studio Zurich live time, navigation, legal & back-to-top
├── data/
│   ├── artist.ts                  # Biography, accolades, press reviews, manifesto, setup
│   ├── projects.ts                # Flagship projects metadata, specs, galleries & synopses
│   ├── releases.ts                # Discography, audio tones, tracks, album covers & catalog numbers
│   ├── events.ts                  # Tour schedule 2026/2027 & past performance archive
│   └── media.ts                   # High-res photography & cinematic video captures
└── lib/
    └── utils.ts                   # Class name and time format helpers
```

---

## 🚀 Getting Started

To run the portfolio in development mode:

```bash
cd elara-artist
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To build the production bundle:

```bash
npm run build
npm run start
```
