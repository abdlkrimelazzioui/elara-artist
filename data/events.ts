export interface TourEvent {
  id: string;
  date: string;
  rawDate: string;
  city: string;
  country: string;
  venue: string;
  eventName: string;
  program: string;
  status: "Tickets Available" | "Few Tickets Left" | "Sold Out" | "Registration Required";
  ticketUrl: string;
  calendarDetails: {
    title: string;
    description: string;
    location: string;
  };
}

export const upcomingEvents: TourEvent[] = [
  {
    id: "evt-2026-01",
    date: "18.10.2026",
    rawDate: "2026-10-18",
    city: "Zürich",
    country: "Switzerland",
    venue: "Tonhalle Zürich (Grosse Tonhalle)",
    eventName: "Symphony for the Human Organ (World Premiere Cycle)",
    program: "Solo Extended Vocals with the Zurich Contemporary Symphony Orchestra",
    status: "Tickets Available",
    ticketUrl: "https://tonhalle-orchester.ch",
    calendarDetails: {
      title: "Kairos Voss: Symphony for the Human Organ at Tonhalle Zurich",
      description: "World premiere cycle with 72-piece orchestra & live spatial resonators.",
      location: "Claridenstrasse 7, 8002 Zürich, Switzerland"
    }
  },
  {
    id: "evt-2026-02",
    date: "04.11.2026",
    rawDate: "2026-11-04",
    city: "Berlin",
    country: "Germany",
    venue: "Kraftwerk Berlin",
    eventName: "Void & Resonance (Live Spatial Activation)",
    program: "16-Channel Ambisonic Sound Installation & Solo Extended Phonation",
    status: "Few Tickets Left",
    ticketUrl: "https://kraftwerkberlin.de",
    calendarDetails: {
      title: "Kairos Voss: Void & Resonance at Kraftwerk Berlin",
      description: "Live spatial performance in the brutalist turbine hall.",
      location: "Köpenicker Str. 70, 10179 Berlin, Germany"
    }
  },
  {
    id: "evt-2026-03",
    date: "22.11.2026",
    rawDate: "2026-11-22",
    city: "London",
    country: "United Kingdom",
    venue: "Barbican Centre (Hall)",
    eventName: "Aetheric Polyphonies (Reel-to-Reel Solo Cycle)",
    program: "Solo Extended Vocalist with 3 Studer Tape Machines in Quadraphonic Array",
    status: "Tickets Available",
    ticketUrl: "https://barbican.org.uk",
    calendarDetails: {
      title: "Kairos Voss: Aetheric Polyphonies at Barbican London",
      description: "Solo vocal performance using continuous magnetic tape loop array.",
      location: "Silk St, Barbican, London EC2Y 8DS, UK"
    }
  },
  {
    id: "evt-2026-04",
    date: "08.12.2026",
    rawDate: "2026-12-08",
    city: "Paris",
    country: "France",
    venue: "Philharmonie de Paris (Grande Salle Pierre Boulez)",
    eventName: "Hymns for the Unseen: Chamber Odyssey",
    program: "Voss / Lindqvist / Hauer Chamber Quintet with Bowed Metals & Electronics",
    status: "Sold Out",
    ticketUrl: "https://philharmoniedeparis.fr",
    calendarDetails: {
      title: "Kairos Voss Quintet at Philharmonie de Paris",
      description: "Contemporary Chamber performance in Grande Salle.",
      location: "221 Av. Jean Jaurès, 75019 Paris, France"
    }
  },
  {
    id: "evt-2027-01",
    date: "16.01.2027",
    rawDate: "2027-01-16",
    city: "Hamburg",
    country: "Germany",
    venue: "Elbphilharmonie (Großer Saal)",
    eventName: "Spatial Echoes & Extended Voices",
    program: "Solo Vocals & Ensemble Resonanz",
    status: "Tickets Available",
    ticketUrl: "https://elbphilharmonie.de",
    calendarDetails: {
      title: "Kairos Voss at Elbphilharmonie Hamburg",
      description: "Acoustic exploration in the iconic vineyard hall.",
      location: "Platz der Deutschen Einheit 4, 20457 Hamburg, Germany"
    }
  },
  {
    id: "evt-2027-02",
    date: "05.02.2027",
    rawDate: "2027-02-05",
    city: "Tokyo",
    country: "Japan",
    venue: "Suntory Hall (Main Hall)",
    eventName: "Tokyo Contemporary Music Biennale",
    program: "Guest Soloist with Tokyo Philharmonic Orchestra · Works by Voss & Takemitsu",
    status: "Tickets Available",
    ticketUrl: "https://suntory.com",
    calendarDetails: {
      title: "Kairos Voss with Tokyo Philharmonic at Suntory Hall",
      description: "Special commission performance in Tokyo.",
      location: "1 Chome-13-1 Akasaka, Minato City, Tokyo 107-8403, Japan"
    }
  },
  {
    id: "evt-2027-03",
    date: "24.02.2027",
    rawDate: "2027-02-24",
    city: "New York",
    country: "United States",
    venue: "BAM (Brooklyn Academy of Music)",
    eventName: "Next Wave Festival 2027",
    program: "Solo Multiphonic Performance & Live Video Kinetic Spatialization",
    status: "Few Tickets Left",
    ticketUrl: "https://bam.org",
    calendarDetails: {
      title: "Kairos Voss at BAM Next Wave Festival",
      description: "Solo vocal and kinetic visual performance.",
      location: "30 Lafayette Ave, Brooklyn, NY 11217, United States"
    }
  },
  {
    id: "evt-2027-04",
    date: "14.03.2027",
    rawDate: "2027-03-14",
    city: "Reykjavik",
    country: "Iceland",
    venue: "Harpa Concert Hall (Eldborg)",
    eventName: "Dark Music Days Festival",
    program: "Cantus Borealis with Nordic Chamber Voices",
    status: "Tickets Available",
    ticketUrl: "https://harpa.is",
    calendarDetails: {
      title: "Kairos Voss: Cantus Borealis at Harpa Reykjavik",
      description: "Choral and arctic acoustic performance at Dark Music Days.",
      location: "Austurbakki 2, 101 Reykjavík, Iceland"
    }
  }
];

export const pastEventsArchive = [
  { year: 2025, event: "Lucerne Festival", city: "Lucerne", venue: "KKL Concert Hall", notes: "Solo Vocal Multiphonic Commission" },
  { year: 2025, event: "Donaueschinger Musiktage", city: "Donaueschingen", venue: "Baarsporthalle", notes: "World Premiere with SWR Vokalensemble" },
  { year: 2024, event: "Wiener Festwochen", city: "Vienna", venue: "MuseumsQuartier", notes: "16-Channel Spatial Sound Installation" },
  { year: 2024, event: "MUTEK Festival", city: "Montreal", venue: "Monument-National", notes: "Live Electroacoustic Phonation & Lasers" },
  { year: 2023, event: "Venice Biennale of Architecture", city: "Venice", venue: "Arsenale di Venezia", notes: "Resonanzkörper Acoustic Installation" }
];
