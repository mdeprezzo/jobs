import { Dimensions } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { 
 AuthScreen, 
 WelcomeScreen,
 MapScreen,
 DeckScreen,
 ReviewScreen,
 SettingsScreen
} from './screens';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const MainNavigator = TabNavigator({
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
 tabBarPosition: 'bottom',
 lazyLoad: true,
 tabBarOptions: {
  style: {
   width: SCREEN_WIDTH
  }
 }
});