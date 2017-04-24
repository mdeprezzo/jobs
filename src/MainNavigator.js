import { TabNavigator, StackNavigator } from 'react-navigation';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import {
 DeckScreen,
 ReviewScreen,
 SettingsScreen
} from './screens';

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
 navigationOptions: {
  headerVisible: false 
 }
});