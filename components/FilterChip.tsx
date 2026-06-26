import { Pressable, StyleSheet, Text } from 'react-native';

import { useTheme } from '@/context/ThemeContext';

type FilterChipProps = {
  label: string;
  active?: boolean;
  onPress?: () => void;
};

export default function FilterChip({ label, active = false, onPress }: FilterChipProps) {
  const { colors, isDark } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.chip,
        active
          ? { backgroundColor: colors.primary }
          : { backgroundColor: isDark ? colors.cardElevated : colors.card },
      ]}>
      <Text
        style={[
          styles.label,
          { color: active ? (isDark ? '#000000' : '#ffffff') : colors.text },
        ]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
  },
});
