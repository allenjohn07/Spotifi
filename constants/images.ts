export type ImageCredit = {
  id: string;
  description: string;
  photographer: string;
  sourceUrl: string;
};

export const imageCredits: ImageCredit[] = [
  {
    id: 'concert-crowd',
    description: 'New Music Friday cards, Live Events browse tile',
    photographer: 'Aditya Chinchure',
    sourceUrl: 'https://unsplash.com/photos/people-at-a-concert-photos-dSXiDv8wDmI',
  },
  {
    id: 'vinyl',
    description: 'Fresh Finds card, #heartbroken discover tile',
    photographer: 'Joey Kyber',
    sourceUrl: 'https://unsplash.com/photos/person-playing-vinyl-record-1454922915609',
  },
  {
    id: 'dj-lights',
    description: 'New Noise card, Culture III album, Podcasts tile, Upcoming Events',
    photographer: 'Aditya Chinchure',
    sourceUrl: 'https://unsplash.com/photos/dj-performing-on-stage-with-red-lights-dSXiDv8wDmI',
  },
  {
    id: 'portrait-1',
    description: 'Mustard artist image',
    photographer: 'Aiony Haust',
    sourceUrl: 'https://unsplash.com/photos/man-in-black-button-up-shirt-Z2VJuXdT6GQ',
  },
  {
    id: 'group-friends',
    description: 'Migos artist image',
    photographer: 'Hannah Busing',
    sourceUrl: 'https://unsplash.com/photos/group-of-people-standing-beside-brown-wooden-wall-Zyx1bK9mqmA',
  },
  {
    id: 'portrait-2',
    description: 'Drake artist image',
    photographer: 'Alexandra Gorn',
    sourceUrl: 'https://unsplash.com/photos/woman-in-black-shirt-smiling-CdOKbp2y4n4',
  },
  {
    id: 'headphones',
    description: 'Liked Songs playlist, Music for you, Chill vibes discover tiles',
    photographer: 'C D-X',
    sourceUrl: 'https://unsplash.com/photos/black-and-silver-headphones-on-white-surface-1505740420928',
  },
  {
    id: 'neon-studio',
    description: 'Starboy album card, Liked Songs / Made For You tiles',
    photographer: 'Possessed Photography',
    sourceUrl: 'https://unsplash.com/photos/purple-and-blue-light-illustration-3gAiajAfmaA',
  },
  {
    id: 'studio-mic',
    description: 'Certified Lover Boy album card, Music browse tile',
    photographer: 'Alejandro Escamilla',
    sourceUrl: 'https://unsplash.com/photos/photography-of-guitar-and-drum-set-1493225457124',
  },
  {
    id: 'podcast-mic',
    description: 'Podcasts browse tile',
    photographer: 'Samuel Giacomelli',
    sourceUrl: 'https://unsplash.com/photos/person-holding-black-headphones-1516280440614',
  },
  {
    id: 'books',
    description: 'Audiobooks browse tile',
    photographer: 'Sincerely Media',
    sourceUrl: 'https://unsplash.com/photos/person-holding-book-on-white-table-Zpzf7TLwWM0',
  },
  {
    id: 'ice-cream',
    description: 'Premium hero banner',
    photographer: 'Jannis Lucas',
    sourceUrl: 'https://unsplash.com/photos/person-holding-ice-cream-cone-with-cherry-on-top-2Tw0e3GOISI',
  },
];

const unsplash = (path: string, width = 400) =>
  `https://images.unsplash.com/${path}?auto=format&fit=crop&w=${width}&q=80`;

export const images = {
  concertCrowd: unsplash('photo-1470229722913-7c0e2dbbafd3'),
  vinyl: unsplash('photo-1454922915609-78549ad709bb'),
  djLights: unsplash('photo-1514525253161-7a46d19cd819'),
  portrait1: unsplash('photo-1507003211169-0a1dd7228f2d'),
  groupFriends: unsplash('photo-1529156069898-49953e39b3ac'),
  portrait2: unsplash('photo-1535713875002-d1d0cf377fde'),
  headphones: unsplash('photo-1505740420928-5e560c06d30e'),
  neonStudio: unsplash('photo-1614613535308-eb5fbd3d2c17'),
  djDeck: unsplash('photo-1514525253161-7a46d19cd819'),
  studioMic: unsplash('photo-1493225457124-a3eb161ffa5f'),
  books: unsplash('photo-1481627834876-b7833e8f5570'),
  iceCream: unsplash('photo-1563805042-7684c019e1cb', 800),
  playlistPurple: unsplash('photo-1614613535308-eb5fbd3d2c17'),
  musicMic: unsplash('photo-1493225457124-a3eb161ffa5f'),
  podcastMic: unsplash('photo-1516280440614-37939bbacd81'),
  liveEvent: unsplash('photo-1470229722913-7c0e2dbbafd3'),
};
