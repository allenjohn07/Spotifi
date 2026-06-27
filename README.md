# Spotifi

A Spotify-inspired multi-screen mobile app built with **Expo**, **TypeScript**, and **Expo Router** for the assignment *Advanced Multi-Screen Mobile Application with Collaborative Navigation* (CPRG 303 B, Spring 2026).

## Reference Application

The reference app chosen is **Spotify**. The goal was to recreate its navigation structure and core screen layouts using remote images from [Unsplash](https://unsplash.com) for album art, browse tiles, and hero banners.

### Reference Screenshots

<p align="center">
  <img src="docs/images/reference/home.png" width="220" alt="Reference Home" />
  <img src="docs/images/reference/search.png" width="220" alt="Reference Search" />
</p>
<p align="center">
  <img src="docs/images/reference/library.png" width="220" alt="Reference Library" />
  <img src="docs/images/reference/premium.png" width="220" alt="Reference Premium" />
</p>

## What Was Built

### Assignment Requirements

| Requirement | Implementation |
|---|---|
| Expo + TypeScript | Expo SDK 56 with TypeScript |
| File-based routing | Expo Router (`app/` directory) |
| Minimum 4 screens | 6 screens (Home, Search, Library, Library Detail, Premium, Create) |
| Tab navigation (3+ tabs) | 5-tab bottom navigator |
| Stack navigation | Library tab: list → detail |
| Dynamic content | `FlatList` on Library screen with reusable `LibraryListItem` |
| Route parameters | `router.push('/library/[id]')` + `useLocalSearchParams` |
| Icons & styling | `@expo/vector-icons` + `StyleSheet` |
| **Bonus:** Light/dark theme | `ThemeContext` with manual toggle (sun/moon icon) |

### Navigation Structure

```
Root (ThemeProvider)
└── Tabs (5 tabs)
    ├── Home
    ├── Search
    ├── Library (Stack)
    │   ├── index      → Your Library list
    │   └── [id]       → Playlist / artist detail
    ├── Premium
    └── Create
```

### Screens

- **Home** — Filter chips, horizontal carousels (New Music Friday, Recents, Albums)
- **Search** — Search bar, browse grid, discover row
- **Your Library** — Filter chips, sort row, scrollable list of playlists and artists
- **Library Detail** — Opened by tapping a library item; shows cover image, metadata, and track list
- **Premium** — Promotional hero image and feature list
- **Create** — Placeholder screen for the fifth tab

### Key Features

- **Reusable components:** `LibraryListItem`, `FilterChip`, `HorizontalCard`, `BrowseCard`, `CoverImage`, `AnimatedPressable`, `FadeInView`, `ThemeToggle`
- **Mock data:** Centralized in `constants/mockData.ts` with image URLs from `constants/images.ts`
- **Theming:** Spotify-style dark palette with light mode support and a top-right theme toggle
- **Animations:** Subtle fade-in and press feedback on all screens using [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)

### Animations

Animations are kept simple and consistent across every screen. Timing values live in [`constants/animations.ts`](constants/animations.ts).

| Animation | Where it appears |
|---|---|
| **Fade in + slide up** | Headers, search bar, filter chips, carousels, browse sections, premium hero, and library detail content |
| **Staggered sections** | Home carousels, Search browse blocks, Premium features card |
| **Staggered list items** | Library playlist/artist rows and detail track lists |
| **Press scale** | Filter chips, browse cards, horizontal cards, and library list rows |

Shared delay pattern on each tab screen:

- **0ms** — page header
- **80ms** — secondary content (e.g. search bar, filter chips, hero banner)
- **160ms + 80ms × section index** — main content sections
- **60ms × list index** — individual list rows (with a section base delay where needed)

## App Screenshots

<p align="center">
  <img src="docs/images/app/home.png" width="220" alt="App Home" />
  <img src="docs/images/app/search.png" width="220" alt="App Search" />
</p>
<p align="center">
  <img src="docs/images/app/library.png" width="220" alt="App Library" />
  <img src="docs/images/app/library-detail.png" width="220" alt="App Library Detail" />
</p>
<p align="center">
  <img src="docs/images/app/premium.png" width="220" alt="App Premium" />
  <img src="docs/images/app/create.png" width="220" alt="App Create" />
</p>

## Image Sources

All in-app artwork is loaded from **Unsplash** via remote URLs defined in [`constants/images.ts`](constants/images.ts). Images are used for educational purposes only as part of this assignment.

| Used for | Photographer | Source |
|---|---|---|
| New Music Friday cards, Live Events tile | Aditya Chinchure | [Unsplash](https://unsplash.com/photos/people-at-a-concert-photos-dSXiDv8wDmI) |
| Fresh Finds card, #heartbroken discover tile | Joey Kyber | [Unsplash](https://unsplash.com/photos/person-playing-vinyl-record-1454922915609) |
| New Noise card, Culture III album, Podcasts tile | Aditya Chinchure | [Unsplash](https://unsplash.com/photos/dj-performing-on-stage-with-red-lights-dSXiDv8wDmI) |
| Mustard artist image | Aiony Haust | [Unsplash](https://unsplash.com/photos/man-in-black-button-up-shirt-Z2VJuXdT6GQ) |
| Migos artist image | Hannah Busing | [Unsplash](https://unsplash.com/photos/group-of-people-standing-beside-brown-wooden-wall-Zyx1bK9mqmA) |
| Drake artist image | Alexandra Gorn | [Unsplash](https://unsplash.com/photos/woman-in-black-shirt-smiling-CdOKbp2y4n4) |
| Liked Songs playlist, Music for you, Chill vibes tiles | C D-X | [Unsplash](https://unsplash.com/photos/black-and-silver-headphones-on-white-surface-1505740420928) |
| Starboy album card, Liked Songs / Made For You tiles | Possessed Photography | [Unsplash](https://unsplash.com/photos/purple-and-blue-light-illustration-3gAiajAfmaA) |
| Certified Lover Boy album, Music browse tile | Alejandro Escamilla | [Unsplash](https://unsplash.com/photos/photography-of-guitar-and-drum-set-1493225457124) |
| Podcasts browse tile | Samuel Giacomelli | [Unsplash](https://unsplash.com/photos/person-holding-black-headphones-1516280440614) |
| Audiobooks browse tile | Sincerely Media | [Unsplash](https://unsplash.com/photos/person-holding-book-on-white-table-Zpzf7TLwWM0) |
| Premium hero banner | Jannis Lucas | [Unsplash](https://unsplash.com/photos/person-holding-ice-cream-cone-with-cherry-on-top-2Tw0e3GOISI) |

Full attribution metadata is also listed in [`constants/images.ts`](constants/images.ts).

## Tech Stack

- [Expo](https://expo.dev/) ~56
- [Expo Router](https://docs.expo.dev/router/introduction/) ~56
- [expo-image](https://docs.expo.dev/versions/latest/sdk/image/)
- React Native 0.85
- TypeScript
- `@expo/vector-icons`
- `react-native-reanimated`
- `react-native-safe-area-context`

## Project Structure

```
spotifi/
├── app/
│   ├── _layout.tsx              # Root layout + ThemeProvider
│   └── (tabs)/
│       ├── _layout.tsx          # 5-tab navigator
│       ├── index.tsx            # Home
│       ├── search.tsx
│       ├── library/             # Stack navigator
│       ├── premium.tsx
│       └── create.tsx
├── components/                  # Reusable UI components (incl. AnimatedPressable, FadeInView)
├── constants/                   # Colors, mock data, image URLs, animation timing
├── context/                     # ThemeContext
├── types/                       # TypeScript interfaces
└── docs/images/                 # Reference & app screenshots
```

## Getting Started

### Prerequisites

- Node.js 18+
- [Expo Go](https://expo.dev/go) on a physical device, or Xcode / Android Studio for simulators

### Install & Run

```bash
npm install
npm start
```

Then press `i` for iOS simulator, `a` for Android emulator, or scan the QR code with Expo Go.

**Note:** Remote images require an internet connection when running the app.

## Notes

- Search input is visual only (no real audio or playback).
- The app defaults to the system light/dark mode; use the sun/moon icon to toggle manually.

## Author

**Allen John** — Student ID: 000961216  
**Course:** CPRG 303 B — Mobile Application Development (Spring 2026)  
**Institution:** SAIT
