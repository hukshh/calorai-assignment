import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { GlassContainer } from './GlassContainer';
import { AppText } from './AppText';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

export const BottomNavigation = () => {
  return (
    <View style={styles.container}>
      <GlassContainer borderRadius={30} padding={spacing.s} style={styles.navBar}>
        <TouchableOpacity style={styles.tab}>
          <AppText variant="caption" color={colors.textSecondary}>Discover</AppText>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tab}>
          <AppText variant="caption" color={colors.primary}>Swipe</AppText>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tab}>
          <AppText variant="caption" color={colors.textSecondary}>Profile</AppText>
        </TouchableOpacity>
      </GlassContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: spacing.xl,
    left: spacing.m,
    right: spacing.m,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
