import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';

import Search from 'screen/Search';
import SearchFlow from 'screen/SearchFlow';
import { HomeTabs } from 'navigator';
import { StyleSheet } from 'react-native';
import { COLORS } from 'globals';

const Stack = createStackNavigator();

const HomeStack = () => {
  const {
    Navigator: StackNavigator,
    Group: TabGroup,
    Group: ModalGroup,
    Screen,
  } = Stack;

  const StackNavigatorOptions = {
    headerShown: false,
  };

  const WebViewComponent = () => (
    <WebView source={{ html: '<h1>Hello world</h1>' }} style={STYLES.webview} />
  );

  return (
    <StackNavigator screenOptions={StackNavigatorOptions}>
      <TabGroup>
        <Screen name="HomeTabs" component={HomeTabs} key="Tab" />
      </TabGroup>
      <ModalGroup
        screenOptions={{
          presentation: 'modal',
          cardStyle: { backgroundColor: COLORS.sand },
        }}
        key="Search">
        <Screen name="Search" component={Search} key="Search" />
        <Screen name="WebView" component={WebViewComponent} key="WebView" />
        <Screen name="SearchFlow" component={SearchFlow} key="SearchFlow" />
      </ModalGroup>
    </StackNavigator>
  );
};
const STYLES = StyleSheet.create({
  webview: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

export default HomeStack;
