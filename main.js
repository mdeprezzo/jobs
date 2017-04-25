import Expo, { Notifications } from 'expo';
import React from 'react';
import { Alert } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import { MainNavigator } from './src/MainNavigator';
import registerForNotifications from './services/notifications';

class App extends React.Component {
 componentDidMount() {
  registerForNotifications();		

  Notifications.addListener((notification) => {
   const { data: { text }, origin } = notification;
	
   if (origin === 'received' && text) {	
    Alert.alert('New Push Notification', text, [{ text: 'OK' }]);  
   }    
  });
 }

 render() {
  return (
   <Provider store={store}>
    <MainNavigator />
   </Provider>
  );
 }
}

Expo.registerRootComponent(App);
