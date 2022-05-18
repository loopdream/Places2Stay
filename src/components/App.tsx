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
import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';

// import { Home } from 'screen/Home';
import { SectionHeader, PlaceCta } from 'screen/Home/component';
import { places, text } from 'screen/Home/homeMockData';

import colors from 'globals/colors';

const App = () => {
  const renderListItems = places.map(item => <PlaceCta {...item} />);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <SectionHeader
          heading={text.sectionHeading.heading}
          description={text.sectionHeading.description}
        />
        {renderListItems}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: colors.sand,
    flex: 1,
  },
  scrollView: {
    padding: 24,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 0,
  },
});

export default App;
