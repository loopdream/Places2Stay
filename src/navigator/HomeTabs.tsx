import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import { COLORS } from 'globals';
import Home from 'screen/Home';
import Stay from 'screen/Stay';

import Search from 'screen/Search';

const { Navigator: TabsNavigator, Screen: TabScreen } =
  createBottomTabNavigator();

const HomeTabs = () => {
  const screenOptions = ({ route }: { route: any }) => ({
    tabBarShowLabel: false,
    headerShown: false,
    inactiveTintColor: COLORS.black,
    activeTintColor: COLORS.blue,
    tabBarIcon: ({ color }) => {
      const icons = {
        Home: 'ios-home',
        Search: 'ios-search',
        Stay: 'md-calendar',
      } as { [key: string]: string };
      return <Icon name={icons[route.name]} color={color} size={36} />;
    },
    tabBarStyle: {
      backgroundColor: COLORS.lightSand,
      height: 65,
    },
  });

  return (
    <TabsNavigator screenOptions={screenOptions}>
      <TabScreen name="Home" key="Home" component={Home} />
      {/* <TabScreen name="Search" key="Search" component={Search} /> */}
      <TabScreen name="Stay" key="Stay" component={Stay} />
    </TabsNavigator>
  );
};

export default HomeTabs;
