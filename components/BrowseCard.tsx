import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type BrowseCardProps = {
  label: string;
  imageUrl: string;
  overlayColor: string;
  tall?: boolean;
  wide?: boolean;
};

export default function BrowseCard({
  label,
  imageUrl,
  overlayColor,
  tall = false,
  wide = false,
}: BrowseCardProps) {
  return (
    <Pressable style={[styles.card, tall && styles.tall, wide && styles.wide]}>
      <Image source={{ uri: imageUrl }} style={StyleSheet.absoluteFill} contentFit="cover" />
      <View style={[StyleSheet.absoluteFill, { backgroundColor: overlayColor }]} />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    padding: 12,
    minHeight: 90,
    overflow: 'hidden',
    justifyContent: 'flex-start',
  },
  tall: {
    width: 140,
    height: 200,
    marginRight: 12,
    justifyContent: 'flex-end',
  },
  wide: {
    flex: 1,
    minWidth: '45%',
    height: 100,
  },
  label: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
    zIndex: 1,
  },
});
