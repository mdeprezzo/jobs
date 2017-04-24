import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import { MainNavigator } from './src/MainNavigator';

class App extends React.Component {
  render() {
    return (
     <Provider store={store}>
      <MainNavigator />
     </Provider>
    );
  }
}

Expo.registerRootComponent(App);
