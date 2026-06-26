import {
  BottomTabBar,
  BottomTabBarHeightCallbackContext,
  type BottomTabBarProps,
} from 'expo-router/build/react-navigation/bottom-tabs';
import { usePathname } from 'expo-router';
import { useContext } from 'react';
import { View } from 'react-native';

import MiniPlayer from '@/components/MiniPlayer';
import { useTheme } from '@/context/ThemeContext';

export default function TabBarWithMiniPlayer(props: BottomTabBarProps) {
  const { colors } = useTheme();
  const pathname = usePathname();
  const onHeightChange = useContext(BottomTabBarHeightCallbackContext);
  const isLibraryDetail = pathname.startsWith('/library/') && pathname !== '/library';

  return (
    <View
      style={{ backgroundColor: colors.background, paddingTop: 6 }}
      onLayout={(event) => onHeightChange?.(event.nativeEvent.layout.height)}>
      {!isLibraryDetail ? <MiniPlayer /> : null}
      <BottomTabBarHeightCallbackContext.Provider value={undefined}>
        <BottomTabBar {...props} />
      </BottomTabBarHeightCallbackContext.Provider>
    </View>
  );
}
