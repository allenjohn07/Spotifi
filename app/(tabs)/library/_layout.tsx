import { Stack } from 'expo-router';

import { useTheme } from '@/context/ThemeContext';

export default function LibraryLayout() {
  const { colors } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: colors.background },
      }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[id]" options={{ title: '' }} />
    </Stack>
  );
}
