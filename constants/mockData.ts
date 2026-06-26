import type {
  BrowseCategory,
  DiscoverItem,
  HomeSection,
  LibraryItem,
  PremiumFeature,
} from '@/types';

import { images } from './images';

export const homeFilters = ['All', 'Music', 'Podcasts', 'Audiobooks'];

export const homeSections: HomeSection[] = [
  {
    title: "It's New Music Friday!",
    data: [
      {
        id: 'nmf-1',
        title: 'New Music Friday Canada',
        subtitle: 'The Weeknd, Drake, and more. Cover: PARTYNEXTDOOR',
        imageUrl: images.concertCrowd,
        variant: 'square',
      },
      {
        id: 'nmf-2',
        title: 'New Noise',
        subtitle: 'The hottest alternative rock tracks',
        imageUrl: images.djLights,
        variant: 'square',
      },
      {
        id: 'nmf-3',
        title: 'Fresh Finds',
        subtitle: 'New music from up-and-coming artists',
        imageUrl: images.vinyl,
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
        imageUrl: images.portrait1,
        variant: 'circle',
      },
      {
        id: 'rec-2',
        title: 'Migos',
        subtitle: 'Artist',
        imageUrl: images.groupFriends,
        variant: 'circle',
      },
      {
        id: 'rec-3',
        title: 'Liked Songs',
        subtitle: 'Playlist • Spotify',
        imageUrl: images.playlistPurple,
        variant: 'square',
      },
      {
        id: 'rec-4',
        title: 'Drake',
        subtitle: 'Artist',
        imageUrl: images.portrait2,
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
        imageUrl: images.neonStudio,
        variant: 'square',
      },
      {
        id: 'alb-2',
        title: 'Culture III',
        subtitle: 'Migos',
        imageUrl: images.djDeck,
        variant: 'square',
      },
      {
        id: 'alb-3',
        title: 'Certified Lover Boy',
        subtitle: 'Drake',
        imageUrl: images.studioMic,
        variant: 'square',
      },
    ],
  },
];

export const browseCategories: BrowseCategory[] = [
  { id: 'music', label: 'Music', imageUrl: images.musicMic, overlayColor: 'rgba(225, 51, 0, 0.75)' },
  { id: 'podcasts', label: 'Podcasts', imageUrl: images.podcastMic, overlayColor: 'rgba(39, 133, 106, 0.75)' },
  { id: 'audiobooks', label: 'Audiobooks', imageUrl: images.books, overlayColor: 'rgba(30, 50, 100, 0.75)' },
  { id: 'events', label: 'Live Events', imageUrl: images.liveEvent, overlayColor: 'rgba(141, 103, 171, 0.75)' },
];

export const discoverItems: DiscoverItem[] = [
  { id: 'd1', label: 'Music for you', imageUrl: images.headphones, overlayColor: 'rgba(80, 55, 80, 0.55)' },
  { id: 'd2', label: '#malayalam indie', imageUrl: images.djLights, overlayColor: 'rgba(71, 125, 149, 0.55)' },
  { id: 'd3', label: '#heartbroken', imageUrl: images.vinyl, overlayColor: 'rgba(140, 25, 50, 0.55)' },
  { id: 'd4', label: 'Chill vibes', imageUrl: images.headphones, overlayColor: 'rgba(39, 133, 106, 0.55)' },
];

export const browseAllItems: BrowseCategory[] = [
  { id: 'mfy', label: 'Made For You', imageUrl: images.playlistPurple, overlayColor: 'rgba(80, 55, 80, 0.7)' },
  { id: 'upcoming', label: 'Upcoming Events', imageUrl: images.djDeck, overlayColor: 'rgba(39, 133, 106, 0.7)' },
];

export const libraryFilters = ['Playlists', 'Artists'];

export const libraryItems: LibraryItem[] = [
  {
    id: 'liked',
    title: 'Liked Songs',
    subtitle: 'Playlist • Allen',
    type: 'playlist',
    imageUrl: images.playlistPurple,
  },
  {
    id: 'mustard',
    title: 'Mustard',
    subtitle: 'Artist',
    type: 'artist',
    imageUrl: images.portrait1,
  },
  {
    id: 'migos',
    title: 'Migos',
    subtitle: 'Artist',
    type: 'artist',
    imageUrl: images.groupFriends,
  },
  {
    id: 'drake',
    title: 'Drake',
    subtitle: 'Artist',
    type: 'artist',
    imageUrl: images.portrait2,
  },
  {
    id: 'add-artists',
    title: 'Add artists',
    subtitle: '',
    type: 'action',
  },
];

export const premiumHeroImage = images.iceCream;

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
