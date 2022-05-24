import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from 'screen/Home';
import Stay from 'screen/Stay';

const { Navigator, Screen } = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ title: 'Home Page' }} />
      <Screen name="Stay" component={Stay} />
    </Navigator>
  );
};

export default HomeStack;
