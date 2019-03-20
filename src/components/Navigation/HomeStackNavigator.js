import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from '../Screens/HomeScreen';
import ShowDetailsScreen from '../Screens/ShowDetailsScreen';

const HomeStackNavigator = StackNavigator(
  {
    Main: {screen: HomeScreen},
    ShowDetails: { screen: ShowDetailsScreen}
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
  }
);

export default HomeStackNavigator;