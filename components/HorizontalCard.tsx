import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useTheme } from '@/context/ThemeContext';
import type { CardVariant } from '@/types';

type HorizontalCardProps = {
  title: string;
  subtitle: string;
  imageColor: string;
  variant?: CardVariant;
  size?: 'large' | 'medium' | 'small';
  onPress?: () => void;
};

export default function HorizontalCard({
  title,
  subtitle,
  imageColor,
  variant = 'square',
  size = 'medium',
  onPress,
}: HorizontalCardProps) {
  const { colors } = useTheme();
  const imageSize = size === 'large' ? 150 : size === 'small' ? 100 : 130;
  const borderRadius = variant === 'circle' ? imageSize / 2 : 6;

  return (
    <Pressable onPress={onPress} style={[styles.container, { width: imageSize }]}>
      <View
        style={[
          styles.image,
          {
            width: imageSize,
            height: imageSize,
            borderRadius,
            backgroundColor: imageColor,
          },
        ]}
      />
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
  image: {
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 16,
  },
});
