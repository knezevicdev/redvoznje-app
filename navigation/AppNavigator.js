import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from "../screens/HomeScreen";

export default createAppContainer(
  createStackNavigator({
    Home: {
      screen: HomeScreen
    }
  }, {
    initialRouteName: "Home",
    headerMode: "screen",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#336699"
      },
      headerTitleStyle: {
        color: "#FFFFFF"
      }
    }
  })
);