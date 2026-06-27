import { type ReactNode } from 'react';
import { Pressable, type PressableProps, type StyleProp, type ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const AnimatedPressableComponent = Animated.createAnimatedComponent(Pressable);

type AnimatedPressableProps = PressableProps & {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function AnimatedPressable({
  children,
  style,
  onPressIn,
  onPressOut,
  ...rest
}: AnimatedPressableProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedPressableComponent
      {...rest}
      style={[style, animatedStyle]}
      onPressIn={(event) => {
        scale.value = withSpring(0.96, { damping: 15, stiffness: 300 });
        onPressIn?.(event);
      }}
      onPressOut={(event) => {
        scale.value = withSpring(1, { damping: 15, stiffness: 300 });
        onPressOut?.(event);
      }}>
      {children}
    </AnimatedPressableComponent>
  );
}
