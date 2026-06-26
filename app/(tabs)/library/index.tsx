import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useBottomTabBarHeight } from 'expo-router/build/react-navigation/bottom-tabs';
import { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import FilterChip from '@/components/FilterChip';
import LibraryListItem from '@/components/LibraryListItem';
import ProfileAvatar from '@/components/ProfileAvatar';
import ThemeToggle from '@/components/ThemeToggle';
import { libraryFilters, libraryItems } from '@/constants/mockData';
import { useTheme } from '@/context/ThemeContext';
import type { LibraryItem } from '@/types';

export default function LibraryScreen() {
  const { colors } = useTheme();
  const [activeFilter, setActiveFilter] = useState('Playlists');
  const bottomPadding = useBottomTabBarHeight() + 40;

  const handlePress = (item: LibraryItem) => {
    if (item.type === 'action') return;
    router.push(`/library/${item.id}`);
  };

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]} edges={['top']}>
      <View style={styles.header}>
        <ProfileAvatar />
        <Text style={[styles.title, { color: colors.text }]}>Your Library</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="search" size={24} color={colors.text} />
          <Ionicons name="add-circle-outline" size={26} color={colors.text} />
          <ThemeToggle />
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chips}>
        {libraryFilters.map((filter) => (
          <FilterChip
            key={filter}
            label={filter}
            active={activeFilter === filter}
            onPress={() => setActiveFilter(filter)}
          />
        ))}
      </ScrollView>

      <View style={styles.sortRow}>
        <View style={styles.sortLeft}>
          <Ionicons name="swap-vertical" size={16} color={colors.textSecondary} />
          <Text style={[styles.sortText, { color: colors.textSecondary }]}>Recents</Text>
        </View>
        <Ionicons name="grid-outline" size={20} color={colors.textSecondary} />
      </View>

      <FlatList
        data={libraryItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: bottomPadding }}
        renderItem={({ item }) => (
          <LibraryListItem item={item} onPress={() => handlePress(item)} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 20,
    gap: 12,
  },
  title: {
    flex: 1,
    fontSize: 26,
    fontWeight: '700',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  chips: {
    paddingHorizontal: 16,
    marginBottom: 16,
    flexGrow: 0,
  },
  sortRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  sortLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  sortText: {
    fontSize: 13,
    fontWeight: '500',
  },
});
