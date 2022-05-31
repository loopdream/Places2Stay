import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { COLORS } from 'globals';
import { HomeStack } from 'navigator';

const App = () => {
  return (
    <SafeAreaView style={STYLES.container}>
      <StatusBar translucent={true} backgroundColor={COLORS.sand} />
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const STYLES = StyleSheet.create({
  container: {
    backgroundColor: COLORS.sand,
    flex: 1,
  },
});

export default App;
