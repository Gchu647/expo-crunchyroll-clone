import React, { Component } from 'react';
// take out statusBar
import { StyleSheet, View, StatusBar, Text, } from 'react-native';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import HomeStackNavigator from './src/components/Navigation/HomeStackNavigator';
import Plain from './src/components/Screens/Plain';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
         <Text>Home Screen</Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Drawer = createDrawerNavigator({
  Plain: { screen: Plain },
  Stack: {screen: HomeStackNavigator}
})

export default createAppContainer(Drawer);