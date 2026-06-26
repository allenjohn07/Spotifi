import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { premiumFeatures } from '@/constants/mockData';
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from '@/context/ThemeContext';
import { useTabContentPadding } from '@/hooks/useTabContentPadding';

export default function PremiumScreen() {
  const { colors } = useTheme();
  const bottomPadding = useTabContentPadding();

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]} edges={['top']}>
      <View style={styles.topBar}>
        <ThemeToggle />
      </View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: bottomPadding }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <View style={styles.heroOverlay}>
            <View style={styles.heroLabel}>
              <MaterialCommunityIcons name="spotify" size={16} color="#ffffff" />
              <Text style={styles.heroLabelText}>Premium</Text>
            </View>
            <Text style={styles.heroTitle}>Missing Premium?{'\n'}This is your chance</Text>
            <View style={styles.badge}>
              <Ionicons name="notifications" size={14} color="#509bf5" />
              <Text style={styles.badgeText}>Offer ends in 11 days</Text>
            </View>
            <View style={styles.cta}>
              <Text style={styles.ctaText}>Get started</Text>
            </View>
          </View>
        </View>

        <View style={[styles.featuresCard, { backgroundColor: colors.card }]}>
          <Text style={[styles.featuresTitle, { color: colors.text }]}>Why join Premium?</Text>
          {premiumFeatures.map((feature) => (
            <View key={feature.id} style={styles.featureRow}>
              <Ionicons name={feature.icon as keyof typeof Ionicons.glyphMap} size={24} color={colors.text} />
              <Text style={[styles.featureLabel, { color: colors.text }]}>{feature.label}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
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
  hero: {
    height: 320,
    backgroundColor: '#3d2b2b',
    marginBottom: 16,
  },
  heroOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  heroLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  heroLabelText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600',
  },
  heroTitle: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 34,
    marginBottom: 12,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 16,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500',
  },
  cta: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
  },
  ctaText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
  },
  featuresCard: {
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 20,
  },
  featuresTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 12,
  },
  featureLabel: {
    flex: 1,
    fontSize: 15,
  },
});
