import { Pressable, StyleSheet, Text } from 'react-native';

import CoverImage from '@/components/CoverImage';
import { useTheme } from '@/context/ThemeContext';
import type { CardVariant } from '@/types';

type HorizontalCardProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
  variant?: CardVariant;
  size?: 'large' | 'medium' | 'small';
  onPress?: () => void;
};

export default function HorizontalCard({
  title,
  subtitle,
  imageUrl,
  variant = 'square',
  size = 'medium',
  onPress,
}: HorizontalCardProps) {
  const { colors } = useTheme();
  const imageSize = size === 'large' ? 150 : size === 'small' ? 100 : 130;

  return (
    <Pressable onPress={onPress} style={[styles.container, { width: imageSize }]}>
      <CoverImage uri={imageUrl} size={imageSize} variant={variant} />
      <Text style={[styles.title, { color: colors.text }]} numberOfLines={1}>
        {title}
      </Text>
      <Text style={[styles.subtitle, { color: colors.textSecondary }]} numberOfLines={2}>
        {subtitle}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 16,
  },
});
