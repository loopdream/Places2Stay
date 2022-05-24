import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from 'screen/Home';
import Stay from 'screen/Stay';

const { Navigator, Screen } = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ title: 'Home Page' }} />
      <Screen name="Stay" component={Stay} />
    </Navigator>
  );
};

export default HomeTabs;
