import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { RootStackNavigationProp } from '../navigation/types';
import { AppText } from '../components/common/AppText';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { GlassContainer } from '../components/common/GlassContainer';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export const IntroScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const handleStart = () => {
    navigation.navigate('Swipe');
  };

  return (
    <LinearGradient
      colors={[colors.glassBackground, colors.background, colors.background]}
      style={styles.gradientContainer}
    >
      <SafeAreaView style={styles.safeArea}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.logoPlaceholder}>
            {/* Replace this View with actual Image/SVG later based on Figma */}
            <AppText variant="h2" color={colors.primary}>Logo</AppText>
          </View>
          
          <AppText variant="h1" align="center" style={styles.headline}>
            Taste Profile
          </AppText>
          
          <AppText variant="body" color={colors.textSecondary} align="center" style={styles.description}>
            Swipe through carefully curated dishes to uncover your unique culinary preferences.
          </AppText>
        </View>

        {/* Bottom CTA Section */}
        <View style={styles.ctaSection}>
          <GlassContainer padding={spacing.l} borderRadius={24}>
            <AppText variant="caption" color={colors.textSecondary} align="center" style={styles.ctaText}>
              Ready to find your flavor?
            </AppText>
            
            <PrimaryButton 
              title="Get Started" 
              onPress={handleStart} 
            />
          </GlassContainer>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: spacing.l,
  },
  heroSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.glassBackground,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.xl,
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },
  headline: {
    marginBottom: spacing.m,
  },
  description: {
    paddingHorizontal: spacing.m,
  },
  ctaSection: {
    paddingBottom: spacing.xl,
  },
  ctaText: {
    marginBottom: spacing.m,
  },
});
