import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { detailTracks, libraryItems } from '@/constants/mockData';
import ThemeToggle from '@/components/ThemeToggle';
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
        <View
          style={[
            styles.hero,
            isCircle ? styles.circle : styles.square,
            { backgroundColor: item.imageColor },
          ]}>
          {item.id === 'liked' ? (
            <Ionicons name="heart" size={48} color="#ffffff" />
          ) : null}
        </View>

        <Text style={[styles.title, { color: colors.text }]}>{item.title}</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>{item.subtitle}</Text>

        <View style={styles.actions}>
          <Ionicons name="play-circle" size={56} color={colors.primary} />
          <Ionicons name="shuffle" size={28} color={colors.textSecondary} />
          <Ionicons name="ellipsis-horizontal" size={28} color={colors.textSecondary} />
        </View>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>Popular</Text>
        {detailTracks.map((track, index) => (
          <View key={track} style={styles.trackRow}>
            <Text style={[styles.trackIndex, { color: colors.textSecondary }]}>{index + 1}</Text>
            <Text style={[styles.trackTitle, { color: colors.text }]}>{track}</Text>
            <Ionicons name="ellipsis-horizontal" size={18} color={colors.textSecondary} />
          </View>
        ))}
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
  },
  hero: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  square: {
    borderRadius: 6,
  },
  circle: {
    borderRadius: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
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
  },
  trackTitle: {
    flex: 1,
    fontSize: 16,
  },
});
