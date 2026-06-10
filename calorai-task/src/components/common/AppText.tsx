import React from 'react';
import { Text, TextProps, StyleSheet, TextStyle } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

interface AppTextProps extends TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  color?: string;
  align?: TextStyle['textAlign'];
}

export const AppText = ({
  variant = 'body',
  color = colors.textPrimary,
  align = 'left',
  style,
  children,
  ...rest
}: AppTextProps) => {
  return (
    <Text
      style={[
        styles.base,
        styles[variant],
        { color, textAlign: align },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    fontFamily: typography.fontFamily.regular,
  },
  h1: {
    fontSize: typography.sizes.h1,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: typography.sizes.h2,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: typography.sizes.h3,
    fontWeight: '600',
  },
  body: {
    fontSize: typography.sizes.body,
  },
  caption: {
    fontSize: typography.sizes.small,
    color: colors.textSecondary,
  },
});
