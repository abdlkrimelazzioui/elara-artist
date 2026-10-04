export interface MediaItem {
  id: string;
  type: "photo" | "video";
  title: string;
  caption: string;
  category: "Performance" | "Backstage & Studio" | "Architecture" | "Portraits";
  src: string;
  thumbnailSrc: string;
  aspectRatio: "portrait" | "landscape" | "square";
  year: number;
  location: string;
  videoUrl?: string;
  videoDuration?: string;
}

export const mediaGallery: MediaItem[] = [
  {
    id: "media-01",
    type: "photo",
    title: "Vocal Phonation at Grosse Tonhalle",
    caption: "Kairos Voss performing the opening multiphonic overtone cycle during the dress rehearsal.",
    category: "Performance",
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop",
    thumbnailSrc: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
    aspectRatio: "landscape",
    year: 2026,
    location: "Tonhalle Zürich"
  },
  {
    id: "media-02",
    type: "photo",
    title: "Portrait with Baton & Studio Resonance",
    caption: "Editorial portrait session captured in concrete acoustic room.",
    category: "Portraits",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1400&auto=format&fit=crop",
    thumbnailSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=700&auto=format&fit=crop",
    aspectRatio: "portrait",
    year: 2025,
    location: "Acoustic Spatial Lab, Zurich"
  },
  {
    id: "media-03",
    type: "video",
    title: "Live at Kraftwerk Berlin (Excerpt)",
    caption: "Multichannel Ambisonic Vocal Improvisation in the turbine hall.",
    category: "Performance",
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop",
    thumbnailSrc: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    aspectRatio: "landscape",
    year: 2025,
    location: "Kraftwerk Berlin",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoDuration: "14:22"
  },
  {
    id: "media-04",
    type: "photo",
    title: "Eurorack Patch Matrix & Vocal Transducers",
    caption: "Modular patch configuration routing larynx contact pickups into dual resonant filters.",
    category: "Backstage & Studio",
    src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1400&auto=format&fit=crop",
    thumbnailSrc: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=700&auto=format&fit=crop",
    aspectRatio: "square",
    year: 2025,
    location: "Berlin Studio"
  },
  {
    id: "media-05",
    type: "photo",
    title: "Brutalist Concrete Acoustic Vault",
    caption: "Site-specific sound installation structure for the Venice Biennale.",
    category: "Architecture",
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
    thumbnailSrc: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    aspectRatio: "landscape",
    year: 2024,
    location: "Venice, Italy"
  },
  {
    id: "media-06",
    type: "video",
    title: "Aetheric Polyphonies: Studer Tape Loop Session",
    caption: "Direct analog recording session at Church of St. Alfege.",
    category: "Performance",
    src: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1600&auto=format&fit=crop",
    thumbnailSrc: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=800&auto=format&fit=crop",
    aspectRatio: "landscape",
    year: 2025,
    location: "London, UK",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoDuration: "08:45"
  },
  {
    id: "media-07",
    type: "photo",
    title: "Orchestral Score & Vocal Notations",
    caption: "Microtonal vocal notation manuscripts for 'Symphony for the Human Organ'.",
    category: "Backstage & Studio",
    src: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1400&auto=format&fit=crop",
    thumbnailSrc: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=700&auto=format&fit=crop",
    aspectRatio: "portrait",
    year: 2026,
    location: "Zurich"
  },
  {
    id: "media-08",
    type: "photo",
    title: "Nordic Glacial Expedition",
    caption: "Sub-ice hydrophone field recording sessions in Svalbard for Cantus Borealis.",
    category: "Architecture",
    src: "https://images.unsplash.com/photo-1483032469466-b937c425697b?q=80&w=1600&auto=format&fit=crop",
    thumbnailSrc: "https://images.unsplash.com/photo-1483032469466-b937c425697b?q=80&w=800&auto=format&fit=crop",
    aspectRatio: "landscape",
    year: 2023,
    location: "Spitsbergen, Norway"
  }
];
