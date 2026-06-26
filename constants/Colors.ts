export type ThemeColors = {
  text: string;
  textSecondary: string;
  background: string;
  card: string;
  cardElevated: string;
  tint: string;
  tabIconDefault: string;
  tabIconSelected: string;
  primary: string;
  searchBar: string;
  searchBarText: string;
  border: string;
};

const light: ThemeColors = {
  text: '#000000',
  textSecondary: '#6a6a6a',
  background: '#ffffff',
  card: '#f5f5f5',
  cardElevated: '#e8e8e8',
  tint: '#1DB954',
  tabIconDefault: '#6a6a6a',
  tabIconSelected: '#000000',
  primary: '#1DB954',
  searchBar: '#ffffff',
  searchBarText: '#000000',
  border: '#e0e0e0',
};

const dark: ThemeColors = {
  text: '#ffffff',
  textSecondary: '#b3b3b3',
  background: '#000000',
  card: '#121212',
  cardElevated: '#282828',
  tint: '#1DB954',
  tabIconDefault: '#b3b3b3',
  tabIconSelected: '#ffffff',
  primary: '#1DB954',
  searchBar: '#ffffff',
  searchBarText: '#000000',
  border: '#282828',
};

const Colors = { light, dark };

export default Colors;
