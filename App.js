import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Text, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/components/Screens/HomeScreen';
import ShowDetailsScreen from './src/components/Screens/ShowDetailsScreen';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
         <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('ShowDetails')}
        />
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

const AppNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    ShowDetails: {screen: ShowDetailsScreen}
  },
);

export default createAppContainer(AppNavigator);