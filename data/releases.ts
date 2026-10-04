export interface Track {
  number: string;
  title: string;
  duration: string;
  audioToneFrequency?: number;
  bpm?: number;
}

export interface Release {
  catalogNumber: string;
  number: string;
  title: string;
  subtitle: string;
  year: number;
  type: "LP / Album" | "Symphonic Live" | "Chamber Work" | "EP / Collaboration";
  role: string;
  label: string;
  coverImage: string;
  description: string;
  streamingUrls: {
    spotify?: string;
    apple?: string;
    bandcamp?: string;
    vinyl?: string;
  };
  tracks: Track[];
}

export const releasesData: Release[] = [
  {
    catalogNumber: "ECM-2894",
    number: "01",
    title: "SYMPHONY FOR THE HUMAN ORGAN",
    subtitle: "With the Zurich Contemporary Symphony Orchestra",
    year: 2026,
    type: "Symphonic Live",
    role: "Composer, Lead Vocalist & Sound Architecture",
    label: "ECM Records / Cantus Nova",
    coverImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
    description: "Recorded live in 96kHz/24bit at Tonhalle Zurich. A monumental 4-movement exploration of human breath expanded through a 72-piece symphonic apparatus.",
    streamingUrls: {
      spotify: "https://spotify.com",
      apple: "https://apple.com",
      bandcamp: "https://bandcamp.com",
      vinyl: "https://bandcamp.com"
    },
    tracks: [
      { number: "01", title: "Inhalation / Inception", duration: "12:44", audioToneFrequency: 110, bpm: 58 },
      { number: "02", title: "Multiphonic Density", duration: "16:20", audioToneFrequency: 146.8, bpm: 64 },
      { number: "03", title: "Sub-Chamber Nocturne", duration: "14:18", audioToneFrequency: 73.4, bpm: 52 },
      { number: "04", title: "Exhalation / Dissolution", duration: "14:38", audioToneFrequency: 220, bpm: 60 }
    ]
  },
  {
    catalogNumber: "SR-542",
    number: "02",
    title: "AETHERIC POLYPHONIES",
    subtitle: "Solo Extended Voice & Three Studer Tape Loops",
    year: 2025,
    type: "LP / Album",
    role: "Solo Vocals, Concept & Real-Time Tape Delays",
    label: "Sub Rosa Records",
    coverImage: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=800&auto=format&fit=crop",
    description: "An intimate, unadorned masterclass in vocal multiphonics recorded direct to 1/4-inch magnetic tape at Church of St. Alfege, London.",
    streamingUrls: {
      spotify: "https://spotify.com",
      apple: "https://apple.com",
      bandcamp: "https://bandcamp.com",
      vinyl: "https://bandcamp.com"
    },
    tracks: [
      { number: "01", title: "Ribbon of Breath I", duration: "08:12", audioToneFrequency: 130.8, bpm: 48 },
      { number: "02", title: "Multiphonic Ghost", duration: "11:05", audioToneFrequency: 174.6, bpm: 55 },
      { number: "03", title: "Magnetic Oxide Chant", duration: "09:44", audioToneFrequency: 98.0, bpm: 50 },
      { number: "04", title: "The Dissolving Horizon", duration: "15:59", audioToneFrequency: 196.0, bpm: 44 }
    ]
  },
  {
    catalogNumber: "ACT-9921",
    number: "03",
    title: "HYMNS FOR THE UNSEEN",
    subtitle: "With the Voss / Lindqvist / Hauer Chamber Quintet",
    year: 2024,
    type: "Chamber Work",
    role: "Composer, Vocalist, Electronic Processing",
    label: "ACT Music",
    coverImage: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800&auto=format&fit=crop",
    description: "Winner of the European Contemporary Jazz & Chamber Music Prize 2024. Ancient vocal liturgies deconstructed through microtonal strings and bowed metals.",
    streamingUrls: {
      spotify: "https://spotify.com",
      apple: "https://apple.com",
      bandcamp: "https://bandcamp.com",
      vinyl: "https://bandcamp.com"
    },
    tracks: [
      { number: "01", title: "Liturgy I: The Black Threshold", duration: "07:30", audioToneFrequency: 82.4, bpm: 68 },
      { number: "02", title: "Subterranean Choir", duration: "13:12", audioToneFrequency: 164.8, bpm: 72 },
      { number: "03", title: "Crotale Shimmer", duration: "09:48", audioToneFrequency: 246.9, bpm: 60 },
      { number: "04", title: "Bowed Gut & Obsidian Voice", duration: "11:22", audioToneFrequency: 123.4, bpm: 54 }
    ]
  },
  {
    catalogNumber: "KN-088",
    number: "04",
    title: "RESONANZKÖRPER: LIVE AT KRAFTWERK",
    subtitle: "16-Channel Spatial Field Recording",
    year: 2023,
    type: "LP / Album",
    role: "Spatial Sound Design & Vocal Improvisation",
    label: "KlangForm Edition",
    coverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    description: "Live spatial documentation of Voss's acclaimed sound installation in Berlin's iconic brutalist turbine hall.",
    streamingUrls: {
      spotify: "https://spotify.com",
      apple: "https://apple.com",
      bandcamp: "https://bandcamp.com"
    },
    tracks: [
      { number: "01", title: "Turbine Chamber Eigenmode (47Hz)", duration: "18:40", audioToneFrequency: 46.2, bpm: 30 },
      { number: "02", title: "Concrete Vault Harmonics", duration: "21:15", audioToneFrequency: 92.5, bpm: 40 }
    ]
  },
  {
    catalogNumber: "ECM-2770",
    number: "05",
    title: "CANTUS BOREALIS",
    subtitle: "With Nordic Chamber Voices & Sub-Zero Field Recordings",
    year: 2023,
    type: "Symphonic Live",
    role: "Composer & Lead Soloist",
    label: "ECM Records",
    coverImage: "https://images.unsplash.com/photo-1483032469466-b937c425697b?q=80&w=800&auto=format&fit=crop",
    description: "Recorded at Harpa Concert Hall, Reykjavik. A luminous marriage of 24 Nordic choral voices and arctic glacial acoustics.",
    streamingUrls: {
      spotify: "https://spotify.com",
      apple: "https://apple.com",
      bandcamp: "https://bandcamp.com",
      vinyl: "https://bandcamp.com"
    },
    tracks: [
      { number: "01", title: "Fjord Ingress", duration: "10:04", audioToneFrequency: 138.5, bpm: 56 },
      { number: "02", title: "Glacial Groan & Overtone Cluster", duration: "14:50", audioToneFrequency: 185.0, bpm: 50 },
      { number: "03", title: "Aurora Polyphony", duration: "12:18", audioToneFrequency: 277.1, bpm: 62 }
    ]
  }
];
