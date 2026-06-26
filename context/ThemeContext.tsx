import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { useColorScheme as useSystemColorScheme } from 'react-native';

import Colors, { type ThemeColors } from '@/constants/Colors';

type ThemeMode = 'light' | 'dark';

type ThemeContextValue = {
  colors: ThemeColors;
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const systemScheme = useSystemColorScheme();
  const [mode, setMode] = useState<ThemeMode | null>(null);

  const isDark = useMemo(() => {
    if (mode) return mode === 'dark';
    return systemScheme !== 'light';
  }, [mode, systemScheme]);

  const colors = isDark ? Colors.dark : Colors.light;

  const toggleTheme = () => {
    setMode((current) => {
      const activeDark = current ? current === 'dark' : systemScheme !== 'light';
      return activeDark ? 'light' : 'dark';
    });
  };

  return (
    <ThemeContext.Provider value={{ colors, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
