import { Dimensions } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import AuthScreen from './screens/AuthScreen';
import { 
 WelcomeScreen,
 MapScreen,
 DeckScreen,
 ReviewScreen,
 SettingsScreen
} from './screens';

const SCREEN_WIDTH = Dimensions.get('window').width;

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