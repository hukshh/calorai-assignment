import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import { colors } from '../../theme/colors';

interface GlassContainerProps {
  children: ReactNode;
  style?: ViewStyle;
  borderRadius?: number;
  padding?: number;
}

export const GlassContainer = ({
  children,
  style,
  borderRadius = 16,
  padding = 16,
}: GlassContainerProps) => {
  const containerStyle: ViewStyle = {
    borderRadius,
    padding,
    ...style,
  };

  // Fallback for Android if BlurView performs poorly or is unavailable
  if (Platform.OS === 'android') {
    return (
      <View style={[styles.androidFallback, containerStyle]}>
        {children}
      </View>
    );
  }

  return (
    <BlurView
      intensity={40}
      tint="dark"
      style={[styles.blurContainer, containerStyle]}
    >
      {children}
    </BlurView>
  );
};

const styles = StyleSheet.create({
  blurContainer: {
    overflow: 'hidden',
    backgroundColor: colors.glassBackground,
    borderColor: colors.glassBorder,
    borderWidth: 1,
  },
  androidFallback: {
    backgroundColor: 'rgba(30, 30, 30, 0.85)',
    borderColor: colors.glassBorder,
    borderWidth: 1,
    overflow: 'hidden',
  },
});
