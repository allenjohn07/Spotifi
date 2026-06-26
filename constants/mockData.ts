import type {
  BrowseCategory,
  DiscoverItem,
  HomeSection,
  LibraryItem,
  NowPlaying,
  PremiumFeature,
} from '@/types';

export const nowPlaying: NowPlaying = {
  title: 'True Colors',
  artist: 'The Weeknd',
  device: 'AirPods Pro',
};

export const homeFilters = ['All', 'Music', 'Podcasts', 'Audiobooks'];

export const homeSections: HomeSection[] = [
  {
    title: "It's New Music Friday!",
    data: [
      {
        id: 'nmf-1',
        title: 'New Music Friday Canada',
        subtitle: 'The Weeknd, Drake, and more. Cover: PARTYNEXTDOOR',
        imageColor: '#e13300',
        variant: 'square',
      },
      {
        id: 'nmf-2',
        title: 'New Noise',
        subtitle: 'The hottest alternative rock tracks',
        imageColor: '#1e3264',
        variant: 'square',
      },
      {
        id: 'nmf-3',
        title: 'Fresh Finds',
        subtitle: 'New music from up-and-coming artists',
        imageColor: '#477d95',
        variant: 'square',
      },
    ],
  },
  {
    title: 'Recents',
    showAll: true,
    data: [
      {
        id: 'rec-1',
        title: 'Mustard',
        subtitle: 'Artist',
        imageColor: '#8d67ab',
        variant: 'circle',
      },
      {
        id: 'rec-2',
        title: 'Migos',
        subtitle: 'Artist',
        imageColor: '#ba5d07',
        variant: 'circle',
      },
      {
        id: 'rec-3',
        title: 'Liked Songs',
        subtitle: 'Playlist • Spotify',
        imageColor: '#503750',
        variant: 'square',
      },
      {
        id: 'rec-4',
        title: 'Drake',
        subtitle: 'Artist',
        imageColor: '#e8115b',
        variant: 'circle',
      },
    ],
  },
  {
    title: 'Albums featuring songs you like',
    data: [
      {
        id: 'alb-1',
        title: 'Starboy',
        subtitle: 'The Weeknd',
        imageColor: '#27856a',
        variant: 'square',
      },
      {
        id: 'alb-2',
        title: 'Culture III',
        subtitle: 'Migos',
        imageColor: '#509bf5',
        variant: 'square',
      },
      {
        id: 'alb-3',
        title: 'Certified Lover Boy',
        subtitle: 'Drake',
        imageColor: '#8c1932',
        variant: 'square',
      },
    ],
  },
];

export const browseCategories: BrowseCategory[] = [
  { id: 'music', label: 'Music', color: '#e13300' },
  { id: 'podcasts', label: 'Podcasts', color: '#27856a' },
  { id: 'audiobooks', label: 'Audiobooks', color: '#1e3264' },
  { id: 'events', label: 'Live Events', color: '#8d67ab' },
];

export const discoverItems: DiscoverItem[] = [
  { id: 'd1', label: 'Music for you', imageColor: '#503750' },
  { id: 'd2', label: '#malayalam indie', imageColor: '#477d95' },
  { id: 'd3', label: '#heartbroken', imageColor: '#8c1932' },
  { id: 'd4', label: 'Chill vibes', imageColor: '#27856a' },
];

export const browseAllItems: BrowseCategory[] = [
  { id: 'mfy', label: 'Made For You', color: '#503750' },
  { id: 'upcoming', label: 'Upcoming Events', color: '#27856a' },
];

export const libraryFilters = ['Playlists', 'Artists'];

export const libraryItems: LibraryItem[] = [
  {
    id: 'liked',
    title: 'Liked Songs',
    subtitle: 'Playlist • Allen',
    type: 'playlist',
    imageColor: '#5038a0',
  },
  {
    id: 'mustard',
    title: 'Mustard',
    subtitle: 'Artist',
    type: 'artist',
    imageColor: '#8d67ab',
  },
  {
    id: 'migos',
    title: 'Migos',
    subtitle: 'Artist',
    type: 'artist',
    imageColor: '#ba5d07',
  },
  {
    id: 'drake',
    title: 'Drake',
    subtitle: 'Artist',
    type: 'artist',
    imageColor: '#e8115b',
  },
  {
    id: 'add-artists',
    title: 'Add artists',
    subtitle: '',
    type: 'action',
    imageColor: '#282828',
  },
];

export const premiumFeatures: PremiumFeature[] = [
  { id: '1', label: 'Ad-free music listening', icon: 'volume-mute' },
  { id: '2', label: 'Download to listen offline', icon: 'download' },
  { id: '3', label: 'Play songs in any order', icon: 'shuffle' },
  { id: '4', label: 'High audio quality', icon: 'headset' },
  { id: '5', label: 'Listen with friends in real time', icon: 'people' },
];

export const detailTracks = [
  'Starboy',
  'Party Monster',
  'False Alarm',
  'Reminder',
];
