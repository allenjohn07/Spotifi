import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { colors, isDark, toggleTheme } = useTheme();

  return (
    <Pressable
      onPress={toggleTheme}
      style={({ pressed }) => [styles.button, { opacity: pressed ? 0.6 : 1 }]}
      accessibilityLabel={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      accessibilityRole="button">
      <Ionicons
        name={isDark ? 'sunny-outline' : 'moon-outline'}
        size={24}
        color={colors.text}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 4,
  },
});
