import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useTheme } from '@/context/ThemeContext';
import type { LibraryItem } from '@/types';

type LibraryListItemProps = {
  item: LibraryItem;
  onPress?: () => void;
};

export default function LibraryListItem({ item, onPress }: LibraryListItemProps) {
  const { colors } = useTheme();
  const isCircle = item.type === 'artist' || item.type === 'action';
  const isAction = item.type === 'action';

  const imageContent = isAction ? (
    <View style={[styles.image, styles.circle, { backgroundColor: item.imageColor }]}>
      <Ionicons name="add" size={24} color={colors.textSecondary} />
    </View>
  ) : item.id === 'liked' ? (
    <View style={[styles.image, styles.square, { backgroundColor: '#5038a0' }]}>
      <Ionicons name="heart" size={20} color="#ffffff" />
    </View>
  ) : (
    <View
      style={[
        styles.image,
        isCircle ? styles.circle : styles.square,
        { backgroundColor: item.imageColor },
      ]}
    />
  );

  return (
    <Pressable onPress={onPress} style={styles.row}>
      {imageContent}
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: colors.text }]} numberOfLines={1}>
            {item.title}
          </Text>
        {item.subtitle ? (
          <Text style={[styles.subtitle, { color: colors.textSecondary }]} numberOfLines={1}>
            {item.subtitle}
          </Text>
        ) : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  image: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  square: {
    borderRadius: 4,
  },
  circle: {
    borderRadius: 24,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    flexShrink: 1,
  },
  subtitle: {
    fontSize: 13,
    marginTop: 2,
  },
});
