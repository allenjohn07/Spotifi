import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { CoverImageWithOverlay } from '@/components/CoverImage';
import FadeInView from '@/components/FadeInView';
import ThemeToggle from '@/components/ThemeToggle';
import { HEADER_DELAY, SECONDARY_DELAY, listItemDelay, sectionDelay } from '@/constants/animations';
import { detailTracks, libraryItems } from '@/constants/mockData';
import { useTheme } from '@/context/ThemeContext';

export default function LibraryDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { colors } = useTheme();
  const item = libraryItems.find((entry) => entry.id === id);

  if (!item || item.type === 'action') {
    return (
      <View style={[styles.centered, { backgroundColor: colors.background }]}>
        <Text style={{ color: colors.text }}>Item not found</Text>
      </View>
    );
  }

  const isCircle = item.type === 'artist';

  return (
    <>
      <Stack.Screen
        options={{
          title: item.title,
          headerRight: () => (
            <View style={styles.headerRight}>
              <ThemeToggle />
            </View>
          ),
        }}
      />
      <ScrollView
        style={{ backgroundColor: colors.background }}
        contentContainerStyle={styles.content}>
        <FadeInView delay={HEADER_DELAY} style={styles.cover}>
        {item.id === 'liked' ? (
          <CoverImageWithOverlay
            uri={item.imageUrl!}
            size={200}
            variant="square"
            overlayColor="rgba(80, 56, 160, 0.65)">
            <Ionicons name="heart" size={48} color="#ffffff" />
          </CoverImageWithOverlay>
        ) : (
          <CoverImageWithOverlay
            uri={item.imageUrl!}
            size={200}
            variant={isCircle ? 'circle' : 'square'}
          />
        )}
        </FadeInView>

        <FadeInView delay={SECONDARY_DELAY}>
          <Text style={[styles.title, { color: colors.text }]}>{item.title}</Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>{item.subtitle}</Text>

          <View style={styles.actions}>
            <Ionicons name="play-circle" size={56} color={colors.primary} />
            <Ionicons name="shuffle" size={28} color={colors.textSecondary} />
            <Ionicons name="ellipsis-horizontal" size={28} color={colors.textSecondary} />
          </View>
        </FadeInView>

        <FadeInView delay={sectionDelay(0)} style={styles.listSection}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Popular</Text>
          {detailTracks.map((track, index) => (
            <FadeInView key={track} delay={sectionDelay(0) + listItemDelay(index + 1)}>
              <View style={styles.trackRow}>
                <Text style={[styles.trackIndex, { color: colors.textSecondary }]}>{index + 1}</Text>
                <Text style={[styles.trackTitle, { color: colors.text }]} numberOfLines={1}>
                  {track}
                </Text>
                <Ionicons name="ellipsis-horizontal" size={18} color={colors.textSecondary} />
              </View>
            </FadeInView>
          ))}
        </FadeInView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRight: {
    marginRight: 12,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 64,
    alignItems: 'center',
  },
  cover: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 6,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    marginVertical: 24,
  },
  listSection: {
    alignSelf: 'stretch',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'left',
  },
  trackRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 12,
  },
  trackIndex: {
    width: 20,
    fontSize: 14,
    textAlign: 'left',
  },
  trackTitle: {
    flex: 1,
    fontSize: 16,
    textAlign: 'left',
  },
});
