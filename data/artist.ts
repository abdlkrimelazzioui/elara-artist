export interface ArtistData {
  name: string;
  moniker: string;
  discipline: string;
  baseLocation: string;
  statementHeadline: string;
  statementBody: string;
  bioSummary: string;
  fullBio: {
    sectionTitle: string;
    paragraphs: string[];
  }[];
  manifesto: string[];
  accolades: {
    number: string;
    label: string;
    context: string;
  }[];
  pressQuotes: {
    quote: string;
    publication: string;
    critic: string;
    year: string;
  }[];
  technicalSetup: {
    category: string;
    items: string[];
  }[];
  representation: {
    region: string;
    agency: string;
    contactName: string;
    email: string;
    location: string;
  }[];
  socials: {
    name: string;
    handle: string;
    url: string;
  }[];
}

export const artistData: ArtistData = {
  name: "KAIROS VOSS",
  moniker: "KAIROS VOSS",
  discipline: "Vocalist · Composer · Sound Architect",
  baseLocation: "Zurich · Berlin · Worldwide",
  statementHeadline: "THE HUMAN VOICE AS ACOUSTIC ARCHITECTURE",
  statementBody:
    "Sound is not merely something perceived through the ear. It is a physical matter carved into time, an unbroken resonance between human breath and spatial reverberation.",
  bioSummary:
    "Kairos Voss operates at the volatile intersection of contemporary classical composition, extended vocal technique, modular electronics, and architectural sound design. Uncompromising in scope and boundary-defying in execution, Voss transforms the human voice into an orchestral organism capable of subterranean sub-harmonics and crystalline microtonal polyphonies.",
  fullBio: [
    {
      sectionTitle: "I. The Anatomy of Breath (Origins)",
      paragraphs: [
        "Trained initially in the sacred polyphony of the Renaissance before radicalizing through European free improvisation and IRCAM electroacoustic research, Kairos Voss treats the vocal tract as an acoustic laboratory. Over two decades of rigorous technical exploration, Voss has developed a vocabulary encompassing multiphonics, subharmonic chant, rapid circular phonation, and micro-acoustic resonance.",
        "Rather than viewing the voice as an instrument of lyricism alone, Voss approaches phonation as pure vibrational sculpting—capable of standing beside hundred-piece symphony orchestras or filling the reverberant cavern of a decommissioned hydroelectric basin."
      ]
    },
    {
      sectionTitle: "II. Large-Scale Orchestration & Commissions",
      paragraphs: [
        "Voss has been commissioned by leading institutions including the Lucerne Festival, Donaueschinger Musiktage, Elbphilharmonie Hamburg, and the London Sinfonietta. Major works include 'Symphony for Human Organ & 60-Piece Orchestra' (2024), 'Liturgy of the Void' (2023), and the site-specific multichannel sound installation 'Resonanzkörper' for the Venice Biennale of Architecture.",
        "Collaborators span across disciplines: from avant-garde percussionists and chamber ensembles to minimal techno producers, contemporary choreographers, and spatial acoustic engineers."
      ]
    },
    {
      sectionTitle: "III. Spatial Acoustic Research",
      paragraphs: [
        "In 2022, Voss established the Acoustic Spatial Lab in Zurich, investigating psychoacoustic perception in brutalist concrete architectures. The lab develops bespoke binaural microphone arrays and custom ambisonic spatialization software, allowing live vocal performances to shift dynamically across multi-point speaker arrays."
      ]
    }
  ],
  manifesto: [
    "01 / The voice is the oldest synthesizer—infinitely malleable, irrevocably human.",
    "02 / Silence is not an absence, but the acoustic threshold where listening begins.",
    "03 / Architecture does not contain sound; architecture participates in sound.",
    "04 / Virtuosity is only valid when it serves the destabilization of expectation."
  ],
  accolades: [
    { number: "18+", label: "International Orchestral Works", context: "Commissioned across Europe, Japan & the Americas" },
    { number: "06", label: "Solo & Collaborative LPs", context: "Released on ECM, ACT & Sub Rosa" },
    { number: "120+", label: "Concert Halls & Festivals", context: "Including Philharmonie de Paris & Barbican Centre" },
    { number: "03", label: "European Jazz & Classical Awards", context: "Grand Prix du Disque & Swiss Music Prize" }
  ],
  pressQuotes: [
    {
      quote: "A staggering force of nature. Kairos Voss bends vocal physics until the human body feels like a cathedral of pure resonance.",
      publication: "Neue Zürcher Zeitung",
      critic: "Martin Weber",
      year: "2025"
    },
    {
      quote: "Equal parts Ligeti, Diamanda Galás, and brutalist sound sculpture. Unclassifiable and deeply hypnotic.",
      publication: "The Wire Magazine",
      critic: "Philip Sherburne",
      year: "2024"
    },
    {
      quote: "A masterclass in tension, architectural breath, and the visceral power of sound in space.",
      publication: "Le Monde Musique",
      critic: "Claire Delacroix",
      year: "2025"
    }
  ],
  technicalSetup: [
    {
      category: "Vocal Capture",
      items: ["Neumann U67 Tube Microphone", "Schoeps Colette Stereo Matched Pair", "Bespoke Throat Contact Transducer"]
    },
    {
      category: "Live Processing",
      items: ["Custom Eurorack Modular Synth Frame", "Eventide H9000 Harmonizer", "Soma Laboratory Cosmos Drift Synthesizer"]
    },
    {
      category: "Spatialization",
      items: ["16-Channel Ambisonic D&B Soundscape Controller", "Max/MSP Live Vocal Morphing Engine"]
    }
  ],
  representation: [
    {
      region: "Worldwide & Europe Booking",
      agency: "Aura Sound Arts International",
      contactName: "Elena von Berg",
      email: "elena@aurasoundarts.com",
      location: "Zurich / Berlin"
    },
    {
      region: "Americas & Asia Management",
      agency: "Resonance Artists Guild",
      contactName: "Marcus Sterling",
      email: "marcus@resonanceguild.org",
      location: "New York / Tokyo"
    },
    {
      region: "Publishing & Orchestral Commissions",
      agency: "Edition Cantus Nova",
      contactName: "Dr. Henriette Richter",
      email: "commissions@cantusnova.ch",
      location: "Geneva"
    }
  ],
  socials: [
    { name: "Spotify", handle: "Kairos Voss", url: "https://spotify.com" },
    { name: "Apple Music", handle: "Kairos Voss", url: "https://apple.com" },
    { name: "Bandcamp", handle: "kairosvoss.bandcamp.com", url: "https://bandcamp.com" },
    { name: "Instagram", handle: "@kairos.voss", url: "https://instagram.com" },
    { name: "YouTube", handle: "Kairos Voss Official", url: "https://youtube.com" }
  ]
};
