import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ActionBarImage from './src/screens/ActionBarImage';
import HomeActivity from './src/screens/HomeActivity';
import CategoryScreen from './src/screens/CategoryScreen';
import SubcategoryScreen from './src/screens/SubcategoryScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AskquestionScreen from './src/screens/AskquestionScreen';
import LoginScreen from './src/screens/LoginScreen'
const navigator =createStackNavigator({
 Search:SearchScreen,
 Category:CategoryScreen,
 SubCategory:SubcategoryScreen,
 Profile:ProfileScreen,
 AskQuestion:AskquestionScreen,
 Login:LoginScreen
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