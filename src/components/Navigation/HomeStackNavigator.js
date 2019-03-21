import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../Screens/HomeScreen';
import ShowDetailsScreen from '../Screens/ShowDetailsScreen';

const HomeStackNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    ShowDetails: {screen: ShowDetailsScreen}
  },
  {
    headerMode:'none',
  }
);

export default HomeStackNavigator;