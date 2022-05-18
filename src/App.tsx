/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';

import { Home } from 'screen/Home';

import colors from 'globals/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar />
      <Home />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: colors.sand,
    flex: 1,
  },
});

export default App;
