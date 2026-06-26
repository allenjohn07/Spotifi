import { Image } from 'expo-image';
import { type ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { useTheme } from '@/context/ThemeContext';
import type { CardVariant } from '@/types';

type CoverImageProps = {
  uri: string;
  size: number;
  variant?: CardVariant;
};

export default function CoverImage({ uri, size, variant = 'square' }: CoverImageProps) {
  const { colors } = useTheme();
  const borderRadius = variant === 'circle' ? size / 2 : 6;

  return (
    <Image
      source={{ uri }}
      style={{ width: size, height: size, borderRadius, backgroundColor: colors.cardElevated }}
      contentFit="cover"
      transition={200}
    />
  );
}

type CoverImageWithOverlayProps = CoverImageProps & {
  children?: ReactNode;
  overlayColor?: string;
};

export function CoverImageWithOverlay({
  uri,
  size,
  variant = 'square',
  children,
  overlayColor,
}: CoverImageWithOverlayProps) {
  const { colors } = useTheme();
  const borderRadius = variant === 'circle' ? size / 2 : 6;

  return (
    <View style={[styles.wrapper, { width: size, height: size, borderRadius, backgroundColor: colors.cardElevated }]}>
      <Image source={{ uri }} style={StyleSheet.absoluteFill} contentFit="cover" transition={200} />
      {overlayColor ? (
        <View style={[StyleSheet.absoluteFill, { backgroundColor: overlayColor, borderRadius }]} />
      ) : null}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
