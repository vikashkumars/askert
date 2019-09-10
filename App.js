import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ActionBarImage from './src/screens/ActionBarImage';
import HomeActivity from './src/screens/HomeActivity';
const navigator =createStackNavigator({
 Search:SearchScreen
},{
  initialRouteName:'Search',
  defaultNavigationOptions: {
    title: 'Askert',
    headerLeft: <ActionBarImage />,
    headerStyle: {
      backgroundColor: '#e3e3e3',
    },
    headerTintColor: '#606070',
  },
});
export default createAppContainer(navigator);