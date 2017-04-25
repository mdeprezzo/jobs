import { Constants } from 'expo';
import { TabNavigator, StackNavigator } from 'react-navigation';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

export const MainNavigator = StackNavigator({
 welcome: { screen: WelcomeScreen },
 auth: { screen: AuthScreen },
 main: {
  screen: TabNavigator({
   map: { screen: MapScreen },
   deck: { screen: DeckScreen },
   review: {
   	screen: StackNavigator({
     review: { screen: ReviewScreen },
     settings: { screen: SettingsScreen }
   	})
   }
  }, { 
   tabBarPosition: 'bottom'
  })
 }
}, {
 initialRouteName: 'welcome',  
 cardStyle: {
  paddingTop: Constants.statusBarHeight
 },
 navigationOptions: {
  headerVisible: false 
 }
});