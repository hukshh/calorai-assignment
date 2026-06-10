import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ResultsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Results Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
