import { Pressable, StyleSheet, Text, View } from 'react-native';

type BrowseCardProps = {
  label: string;
  color: string;
  tall?: boolean;
  wide?: boolean;
};

export default function BrowseCard({ label, color, tall = false, wide = false }: BrowseCardProps) {
  return (
    <Pressable
      style={[
        styles.card,
        { backgroundColor: color },
        tall && styles.tall,
        wide && styles.wide,
      ]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.decor} />
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
  decor: {
    position: 'absolute',
    bottom: -10,
    right: -10,
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.15)',
    transform: [{ rotate: '20deg' }],
  },
});
