import { Ionicons } from '@expo/vector-icons';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BrowseCard from '@/components/BrowseCard';
import ProfileAvatar from '@/components/ProfileAvatar';
import SectionHeader from '@/components/SectionHeader';
import ThemeToggle from '@/components/ThemeToggle';
import {
  browseAllItems,
  browseCategories,
  discoverItems,
} from '@/constants/mockData';
import { useTheme } from '@/context/ThemeContext';
import { useTabContentPadding } from '@/hooks/useTabContentPadding';

export default function SearchScreen() {
  const { colors } = useTheme();
  const bottomPadding = useTabContentPadding();

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]} edges={['top']}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: bottomPadding }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <ProfileAvatar />
          <Text style={[styles.title, { color: colors.text }]}>Search</Text>
          <View style={styles.headerRight}>
            <ThemeToggle />
            <Ionicons name="camera-outline" size={24} color={colors.text} />
          </View>
        </View>

        <View style={[styles.searchBar, { backgroundColor: colors.searchBar }]}>
          <Ionicons name="search" size={20} color={colors.textSecondary} />
          <Text style={[styles.searchPlaceholder, { color: colors.textSecondary }]}>
            What do you want to listen to?
          </Text>
        </View>

        <View style={styles.section}>
          <SectionHeader title="Start browsing" />
          <View style={styles.grid}>
            {browseCategories.map((category) => (
              <View key={category.id} style={styles.gridItem}>
                <BrowseCard label={category.label} color={category.color} />
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <SectionHeader title="Discover something new" />
          <FlatList
            horizontal
            data={discoverItems}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
            renderItem={({ item }) => (
              <BrowseCard label={item.label} color={item.imageColor} tall />
            )}
          />
        </View>

        <View style={styles.section}>
          <SectionHeader title="Browse all" />
          <View style={styles.browseAll}>
            {browseAllItems.map((item) => (
              <BrowseCard key={item.id} label={item.label} color={item.color} wide />
            ))}
          </View>
        </View>
      </ScrollView>
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
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 20,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 8,
    gap: 10,
  },
  searchPlaceholder: {
    fontSize: 15,
  },
  section: {
    marginBottom: 28,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 12,
  },
  gridItem: {
    width: '47%',
  },
  listContent: {
    paddingHorizontal: 16,
  },
  browseAll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 12,
  },
});
