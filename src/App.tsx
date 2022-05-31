import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { COLORS } from 'globals';
import Home from 'screen/Home';
import Stay from 'screen/Stay';
import Search from 'screen/Search';
import TabBar from 'components/TabBar';
import ToggleSwitch from 'components/ToggleSwitch';
import { HomeTabs } from 'navigator';

const App = () => {
  return (
    <SafeAreaView style={STYLES.container}>
      <StatusBar
        translucent={true} // Android only :(
        backgroundColor={COLORS.sand}
      />
      <NavigationContainer>
        <HomeTabs />
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
