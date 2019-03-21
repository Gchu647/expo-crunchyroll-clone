import React, { Component } from 'react';
// take out statusBar
import { StyleSheet, View, StatusBar, Text, } from 'react-native';
import { createAppContainer } from 'react-navigation';
import HomeStackNavigator from './src/components/Navigation/HomeStackNavigator';

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

export default createAppContainer(HomeStackNavigator);