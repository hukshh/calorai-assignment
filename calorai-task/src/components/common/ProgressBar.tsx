import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { colors } from '../../theme/colors';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    // Calculate percentage as a value between 0 and 1
    const percentage = total > 0 ? Math.min(Math.max(current / total, 0), 1) : 0;
    
    progress.value = withTiming(percentage, {
      duration: 400,
      easing: Easing.out(Easing.cubic),
    });
  }, [current, total, progress]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${progress.value * 100}%`,
    };
  });

  return (
    <View style={styles.track}>
      <Animated.View style={[styles.fill, animatedStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  track: {
    height: 8,
    width: '100%',
    backgroundColor: colors.glassBorder,
    borderRadius: 4,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
});
