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

import { SectionHeader } from 'screen/Home/component/SectionHeader';
import { PlaceCta } from 'screen/Home/component/PlaceCta';
import { colors, text, places } from 'globals/constants';

const App = () => {
  const renderListItems = places.map(item => <PlaceCta {...item} />);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <SectionHeader
          heading={text.home.sectionHeading.heading}
          description={text.home.sectionHeading.description}
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
    paddingTop: 0,
  },
});

export default App;
