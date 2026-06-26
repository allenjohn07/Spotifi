import { useBottomTabBarHeight } from 'expo-router/build/react-navigation/bottom-tabs';

export function useTabContentPadding(extra = 40) {
  const tabBarHeight = useBottomTabBarHeight();
  return tabBarHeight + extra;
}
