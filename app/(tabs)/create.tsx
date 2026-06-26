import { Ionicons } from '@expo/vector-icons';
import { useBottomTabBarHeight } from 'expo-router/build/react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from '@/context/ThemeContext';

export default function CreateScreen() {
  const { colors } = useTheme();
  const bottomPadding = useBottomTabBarHeight() + 40;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]} edges={['top']}>
      <View style={styles.topBar}>
        <ThemeToggle />
      </View>
      <View style={[styles.content, { paddingBottom: bottomPadding }]}>
        <Ionicons name="add-circle-outline" size={64} color={colors.textSecondary} />
        <Text style={[styles.title, { color: colors.text }]}>Create</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Start a playlist, podcast, or blend
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 10,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 32,
  },
});
