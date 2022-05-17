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
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';

// import Text from './base/Text/Text';
import SectionHeader from './base/SectionHeader/SectionHeader';
import { colors } from '../globals/constants';

const text = {
  heading: 'Find your getaway',
  description:
    'Our spaces are designed for comfort - whether you are working, relaxing, or craving some spaces',
};

const App = () => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar barStyle="dark-content" />
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <SectionHeader heading={text.heading} description={text.description} />
      <View>{/* <Text styles={{ color: 'red' }}>Hello Metalab!</Text> */}</View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: colors.sand,
    flex: 1,
  },
  scrollView: {
    padding: 24,
    paddingTop: 0,
  },
});

export default App;
