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
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';

// import Text from './base/Text/Text';
import SectionHeader from './base/SectionHeader/SectionHeader';
import { colors } from '../globals/constants';

const App = () => {
  const backgroundStyle = {
    backgroundColor: colors.sand,
    flex: 1,
    padding: 24,
    paddingTop: 0,
  };
  const headingCopy = 'Find your getaway';
  const descriptionCopy =
    'Our spaces are designed for comfort - whether you are working, relaxing, or craving some spaces';

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <SectionHeader heading={headingCopy} description={descriptionCopy} />
        <View>
          {/* <Text styles={{ color: 'red' }}>Hello Metalab!</Text> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
