import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Font } from 'expo';
import HomeScreen from './src/components/Screens/HomeScreen';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeScreen />
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

export default App;