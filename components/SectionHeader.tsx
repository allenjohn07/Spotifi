import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useTheme } from '@/context/ThemeContext';

type SectionHeaderProps = {
  title: string;
  showAll?: boolean;
};

export default function SectionHeader({ title, showAll }: SectionHeaderProps) {
  const { colors } = useTheme();

  return (
    <View style={styles.row}>
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
      {showAll ? (
        <Pressable>
          <Text style={[styles.showAll, { color: colors.textSecondary }]}>Show all</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    flex: 1,
  },
  showAll: {
    fontSize: 13,
    fontWeight: '600',
  },
});
