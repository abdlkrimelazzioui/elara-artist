export interface Project {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  year: number;
  category: "Symphonic" | "Vocal Solo" | "Spatial Installation" | "Chamber Ensemble" | "Electroacoustic";
  featuredLayout: "left-image" | "right-image" | "full-width" | "asymmetric-grid";
  heroImage: string;
  galleryImages: string[];
  duration: string;
  location: string;
  shortDescription: string;
  synopsis: string[];
  artisticVision: string;
  credits: {
    role: string;
    name: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  audioPreview?: {
    trackTitle: string;
    bpm: number;
    tuning: string;
    sampleRate: string;
  };
  pressSnippet?: {
    quote: string;
    source: string;
  };
}

export const projectsData: Project[] = [
  {
    slug: "symphony-human-organ",
    number: "01",
    title: "SYMPHONY FOR THE HUMAN ORGAN",
    subtitle: "For Solo Extended Vocalist, 72-Piece Orchestra & Sub-bass Resonators",
    year: 2026,
    category: "Symphonic",
    featuredLayout: "left-image",
    heroImage: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1400&auto=format&fit=crop"
    ],
    duration: "58 Minutes (4 Movements)",
    location: "Tonhalle Zurich · KKL Luzern",
    shortDescription:
      "A monumental orchestral work reimagining the human vocal tract as a massive architectural pipe organ, pitting microtonal vocal multiphonics against a 72-piece symphonic apparatus.",
    synopsis: [
      "Premiered at the Tonhalle Zurich in January 2026, 'Symphony for the Human Organ' dismantles conventional hierarchy between soloist and ensemble. Rather than acting as a melodic frontman, Voss's amplified vocal tract serves as the foundational acoustic pulse—directing sub-bass frequencies and modulating harmonic timbres across brass, woodwinds, and strings.",
      "The four movements (I. Inhalation / Inception, II. Multiphonic Density, III. Sub-Chamber Nocturne, IV. Exhalation / Dissolution) trace the complete physical journey of human air through spatial resonance.",
      "Custom acoustic resonators placed throughout the concert hall amplify subtle chest-cavity vibrations, immersing 1,400 listeners in a visceral, tactile field of sound."
    ],
    artisticVision:
      "To transform the vulnerability of a solitary breath into a tectonic force capable of vibrating 80 tons of architectural concrete and wood.",
    credits: [
      { role: "Composition & Solo Extended Vocals", name: "Kairos Voss" },
      { role: "Conductor", name: "Mstislav Vronsky" },
      { role: "Ensemble", name: "Zurich Contemporary Symphony" },
      { role: "Acoustic Spatialization", name: "Studio KlangForm Zurich" },
      { role: "Sound Engineer", name: "Jan-Erik Larsson" }
    ],
    specifications: [
      { label: "Orchestration", value: "3 Flutes, 3 Oboes, 4 Clarinets, 4 Bassoons, 6 Horns, 4 Trumpets, 4 Trombones, Tuba, Percussion (4 players), Harp, Strings (16/14/12/10/8), Solo Vocalist" },
      { label: "Commissioned By", value: "Swiss Arts Council Pro Helvetia" },
      { label: "World Premiere", value: "January 14, 2026, Tonhalle Zurich" },
      { label: "Audio Format", value: "96kHz / 24-bit Ambisonic Master" }
    ],
    audioPreview: {
      trackTitle: "Movement II: Multiphonic Density (Excerpt)",
      bpm: 64,
      tuning: "A = 432 Hz",
      sampleRate: "96kHz Studio Master"
    },
    pressSnippet: {
      quote: "A staggering convergence of primal biological capability and cerebral symphonic mastery. Voss has reinvented what the voice can do in concert halls.",
      source: "Frankfurter Allgemeine Zeitung"
    }
  },
  {
    slug: "aetheric-polyphonies",
    number: "02",
    title: "AETHERIC POLYPHONIES",
    subtitle: "Solo Vocal Multiphonics & Analog Tape Loop Array",
    year: 2025,
    category: "Vocal Solo",
    featuredLayout: "right-image",
    heroImage: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1445985543469-221e57446619?q=80&w=1400&auto=format&fit=crop"
    ],
    duration: "45 Minutes Continuous",
    location: "Barbican Centre London · Philharmonie de Paris",
    shortDescription:
      "A radical solo exploration using three simultaneous vocal registers layered in real-time onto vintage Studer reel-to-reel magnetic tape machines, forming shifting harmonic drones.",
    synopsis: [
      "'Aetheric Polyphonies' is an unadorned, hyper-focused performance piece where no pre-recorded materials are used. Voss stands center-stage surrounded by three vintage 1/4-inch Studer tape decks connected via continuous magnetic tape ribbons spanning 15 meters across the stage floor.",
      "As Voss generates intricate overtone chants and throat multiphonics, the tape loops capture, delay, and degrade the vocal signatures, producing an ethereal, living tapestry of acoustic decay.",
      "The result is a meditation on memory, acoustic transience, and the visceral warmth of analog saturation."
    ],
    artisticVision:
      "A testament to the fragility of the live voice when confronted with its own echoing ghost on decaying magnetic oxide.",
    credits: [
      { role: "Solo Performance & Concept", name: "Kairos Voss" },
      { role: "Analog Tape System Design", name: "Lukas Ebersold" },
      { role: "Lighting Architecture", name: "Søren Kjeldsen" }
    ],
    specifications: [
      { label: "Instrumentation", value: "Solo Human Voice, 3x Studer A80 1/4\" Tape Recorders, Custom Variable Speed Controllers" },
      { label: "Venues Toured", value: "London, Paris, Berlin, Tokyo, Stockholm, Oslo" },
      { label: "Album Release", value: "Sub Rosa Records (Vinyl & Hi-Res Digital)" }
    ],
    audioPreview: {
      trackTitle: "Aetheric Loop VII: Ribbon of Breath",
      bpm: 0,
      tuning: "Just Intonation / Pure Overtones",
      sampleRate: "Analog Master Transfer"
    },
    pressSnippet: {
      quote: "One man, three tape recorders, and a room full of spellbound listeners holding their breath for forty-five unbroken minutes.",
      source: "The Guardian Music Review"
    }
  },
  {
    slug: "brutalist-resonance-chamber",
    number: "03",
    title: "VOID & RESONANCE: 16-CHANNEL CHAMBER",
    subtitle: "Site-Specific Sound Installation in Brutalist Concrete Vault",
    year: 2025,
    category: "Spatial Installation",
    featuredLayout: "full-width",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop"
    ],
    duration: "Permanent / Continuous Responsive Installation",
    location: "Kraftwerk Berlin & Venice Biennale of Architecture",
    shortDescription:
      "A spatial acoustic installation turning a 12-meter high reinforced concrete turbine hall into a responsive acoustic resonator activated by visitor presence and algorithmic vocal drones.",
    synopsis: [
      "Commissioned for the international exhibition on architectural acoustics, 'Void & Resonance' maps the unique modal resonance frequencies (eigenmodes) of brutalist industrial spaces.",
      "A 16-point custom loudspeaker array hidden inside raw architectural cavities continuously emits Voss's micro-vocal waveforms, attuned precisely to the natural pitch of the room's concrete dimensions.",
      "As visitors move through the space, ultrasonic proximity sensors shift the phase of the frequencies, creating dramatic nodes of deep silence and hyper-dense harmonic vibration."
    ],
    artisticVision:
      "To dissolve the boundary between concrete structure and musical instrument, proving that spaces remember and breathe.",
    credits: [
      { role: "Acoustic Design & Vocal Library", name: "Kairos Voss" },
      { role: "Spatial Software Architecture", name: "Dr. Andrea Bächler" },
      { role: "Structural Fabrication", name: "Atelier BauKlang Berlin" }
    ],
    specifications: [
      { label: "Loudspeaker Array", value: "16x Custom Concrete-Enclosed Coaxial Transducers" },
      { label: "Spatial Engine", value: "Custom Max/MSP Max for Live Ambisonic Core" },
      { label: "Sensors", value: "12x Overhead LiDAR Depth Sensors" }
    ],
    audioPreview: {
      trackTitle: "Spatial Node 04: Concrete Reverberation at 47Hz",
      bpm: 0,
      tuning: "Eigenmode Tuned (F# 46.2Hz)",
      sampleRate: "Ambisonic B-Format"
    },
    pressSnippet: {
      quote: "An unsettling, deeply awe-inspiring triumph of spatial psychoacoustics. The building itself sings with terrifying majesty.",
      source: "Architektur & Musik International"
    }
  },
  {
    slug: "hymns-for-the-unseen",
    number: "04",
    title: "HYMNS FOR THE UNSEEN",
    subtitle: "Chamber Quintet for Extended Voice, Cello, Bass Clarinet & Prepared Percussion",
    year: 2024,
    category: "Chamber Ensemble",
    featuredLayout: "asymmetric-grid",
    heroImage: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1400&auto=format&fit=crop"
    ],
    duration: "64 Minutes",
    location: "Elbphilharmonie Hamburg · Wiener Konzerthaus",
    shortDescription:
      "A darkly luminous chamber cycle weaving avant-garde vocal techniques, microtonal scordatura strings, and bowed metallic percussion into a ritualistic sonic experience.",
    synopsis: [
      "Conceived during a six-month creative residency in the Swiss Alps, 'Hymns for the Unseen' explores the threshold between human mourning rituals and abstract sound synthesis.",
      "The chamber quintet pairs Voss's extended vocal registers with bowed crotales, gut-string cellos tuned down two octaves, and contrabass clarinets generating rhythmic flutter-tongue pulses.",
      "The composition received the European Contemporary Jazz & Chamber Music Prize in 2024."
    ],
    artisticVision:
      "Ancient sacred polyphony shattered and reconstructed through the lens of 21st-century microtonal darkness.",
    credits: [
      { role: "Composition & Vocals", name: "Kairos Voss" },
      { role: "Cello", name: "Anja Lindqvist" },
      { role: "Bass Clarinet", name: "Matthias Hauer" },
      { role: "Prepared Percussion", name: "Tetsuya Morimoto" }
    ],
    specifications: [
      { label: "Ensemble Format", value: "Acoustic Chamber Quintet" },
      { label: "Score Publisher", value: "Edition Cantus Nova, Zurich" },
      { label: "Record Label", value: "ECM Records (Catalog #ECM2841)" }
    ],
    audioPreview: {
      trackTitle: "Movement III: Liturgy of the Subterranean",
      bpm: 72,
      tuning: "Pythagorean / Micro-comma offset",
      sampleRate: "96kHz Master"
    },
    pressSnippet: {
      quote: "One of the most profound chamber records of the decade. Unsettling, gorgeous, and utterly timeless.",
      source: "DownBeat Magazine"
    }
  },
  {
    slug: "micro-tonality-breath",
    number: "05",
    title: "MICRO-TONALITY & BREATH",
    subtitle: "Electroacoustic Vocal Synthesizer & Kinetic Light Installation",
    year: 2024,
    category: "Electroacoustic",
    featuredLayout: "left-image",
    heroImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1400&auto=format&fit=crop"
    ],
    duration: "50 Minutes",
    location: "MUTEK Montreal · Sonar Barcelona",
    shortDescription:
      "A high-energy technological dialogue where real-time vocal throat frequencies trigger kinetic motorized mirror panels and laser projections across an immersive black-box theater.",
    synopsis: [
      "Using custom-designed piezoelectric throat sensors, Voss routes vocal subharmonics directly into modular synthesis cv inputs.",
      "Every modulation in larynx tension shifts oscillating waveforms and mechanical servos holding motorized mirrors, reflecting razor-sharp light beams across the venue in perfect acoustic synchronization."
    ],
    artisticVision:
      "Making sound visibly carve geometric light tunnels in real time.",
    credits: [
      { role: "Vocal Performance & Modular System", name: "Kairos Voss" },
      { role: "Kinetic Laser Engineering", name: "Studio LuminArt Zurich" }
    ],
    specifications: [
      { label: "Hardware", value: "Eurorack Modular + Custom Piezo Sensors + 12x Stepper Motor Mirrors" },
      { label: "Performances", value: "Montreal, Barcelona, Tokyo, Berlin" }
    ]
  },
  {
    slug: "cantus-borealis",
    number: "06",
    title: "CANTUS BOREALIS: ARCTIC FIELD RECORDINGS",
    subtitle: "Choral Voices & Sub-Zero Acoustic Landscapes",
    year: 2023,
    category: "Symphonic",
    featuredLayout: "right-image",
    heroImage: "https://images.unsplash.com/photo-1483032469466-b937c425697b?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1400&auto=format&fit=crop"
    ],
    duration: "62 Minutes",
    location: "Harpa Concert Hall Reykjavik · Oslo Konserthus",
    shortDescription:
      "A composition for 24-voice female choir, extended male solo voice, and hydrophone recordings captured beneath Greenlandic sea ice.",
    synopsis: [
      "Recorded partly on location in Svalbard and premiered at Harpa Concert Hall in Reykjavik, 'Cantus Borealis' unites organic human breath with the immense geological groaning of shifting glaciers.",
      "The choir acts as an acoustic prism, fragmenting Voss's low throat tones into shimmering clusters of high overtone light."
    ],
    artisticVision:
      "Sound as an elemental geological artifact of cold, stone, and vanishing ice.",
    credits: [
      { role: "Composer & Soloist", name: "Kairos Voss" },
      { role: "Choir", name: "Nordic Chamber Voices" },
      { role: "Field Recording Engineer", name: "Einar Sigurðsson" }
    ],
    specifications: [
      { label: "Choir Size", value: "24 Voices (SSAA/TTBB)" },
      { label: "Recording Tech", value: "Aquarian Hydrophones + Sound Devices 888" },
      { label: "Label", value: "ACT Music" }
    ]
  }
];
