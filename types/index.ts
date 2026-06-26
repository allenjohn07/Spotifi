export type CardVariant = 'square' | 'circle';

export interface HomeCard {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  variant: CardVariant;
}

export interface HomeSection {
  title: string;
  showAll?: boolean;
  data: HomeCard[];
}

export interface BrowseCategory {
  id: string;
  label: string;
  imageUrl: string;
  overlayColor: string;
}

export interface DiscoverItem {
  id: string;
  label: string;
  imageUrl: string;
  overlayColor: string;
}

export interface LibraryItem {
  id: string;
  title: string;
  subtitle: string;
  type: 'playlist' | 'artist' | 'action';
  imageUrl?: string;
}

export interface PremiumFeature {
  id: string;
  label: string;
  icon: string;
}
