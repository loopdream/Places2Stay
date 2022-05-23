import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';

import { COLORS } from 'globals';
// import { Home } from 'screen/Home';
import { Stay } from 'screen/Stay';

const App = () => {
  return (
    <SafeAreaView style={STYLES.container}>
      <StatusBar
        translucent={true} // Android only :(
        backgroundColor={COLORS.sand}
      />

      {/* <Home /> */}
      <Stay />
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
