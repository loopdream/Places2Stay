import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';

import Search from 'screen/Search';
import { HomeTabs } from 'navigator';

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
    <WebView
      source={{ html: '<h1>Hello world</h1>' }}
      style={{ flex: 1, height: '100%', width: '100%' }}
    />
  );

  return (
    <StackNavigator screenOptions={StackNavigatorOptions}>
      <TabGroup>
        <Screen name="HomeTabs" component={HomeTabs} key="Tab" />
      </TabGroup>
      <ModalGroup screenOptions={{ presentation: 'modal' }} key="Search">
        <Screen name="Search" component={Search} key="Search" />
        <Screen name="WebView" component={WebViewComponent} key="WebView" />
      </ModalGroup>
    </StackNavigator>
  );
};

export default HomeStack;
