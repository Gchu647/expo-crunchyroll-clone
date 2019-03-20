import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import HomeScreen from './src/components/Screens/HomeScreen';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
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