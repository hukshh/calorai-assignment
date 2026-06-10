import 'react-native-gesture-handler';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './src/navigation/AppNavigator';
import { TasteProvider } from './src/context/TasteContext';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <TasteProvider>
          <AppNavigator />
        </TasteProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
