import { useBottomTabBarHeight } from 'expo-router/build/react-navigation/bottom-tabs';
import { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import FilterChip from '@/components/FilterChip';
import FadeInView from '@/components/FadeInView';
import HorizontalCard from '@/components/HorizontalCard';
import ProfileAvatar from '@/components/ProfileAvatar';
import SectionHeader from '@/components/SectionHeader';
import ThemeToggle from '@/components/ThemeToggle';
import { HEADER_DELAY, sectionDelay } from '@/constants/animations';
import { homeFilters, homeSections } from '@/constants/mockData';
import { useTheme } from '@/context/ThemeContext';
import type { HomeCard } from '@/types';

export default function HomeScreen() {
  const { colors } = useTheme();
  const [activeFilter, setActiveFilter] = useState('All');
  const bottomPadding = useBottomTabBarHeight() + 20;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]} edges={['top']}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: bottomPadding }}
        showsVerticalScrollIndicator={false}>
        <FadeInView delay={HEADER_DELAY} style={styles.header}>
          <View style={styles.topRow}>
            <ProfileAvatar />
            <ThemeToggle />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chips}>
            {homeFilters.map((filter) => (
              <FilterChip
                key={filter}
                label={filter}
                active={activeFilter === filter}
                onPress={() => setActiveFilter(filter)}
              />
            ))}
          </ScrollView>
        </FadeInView>

        {homeSections.map((section, sectionIndex) => (
          <FadeInView key={section.title} delay={sectionDelay(sectionIndex)} style={styles.section}>
            <SectionHeader title={section.title} showAll={section.showAll} />
            <FlatList
              horizontal
              data={section.data}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.listContent}
              renderItem={({ item }: { item: HomeCard }) => (
                <HorizontalCard
                  title={item.title}
                  subtitle={item.subtitle}
                  imageUrl={item.imageUrl}
                  variant={item.variant}
                  size={section.title.includes('New Music') ? 'large' : 'medium'}
                />
              )}
            />
          </FadeInView>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 24,
    gap: 18,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chips: {
    flexGrow: 0,
  },
  section: {
    marginBottom: 28,
  },
  listContent: {
    paddingHorizontal: 16,
  },
});
