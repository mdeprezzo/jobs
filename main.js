import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import { MainNavigator } from './src/MainNavigator';

const SCREEN_WIDTH = Dimensions.get('window').width;

class App extends React.Component {
  render() {
    return (
     <Provider store={store}>
      <MainNavigator />
     </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Expo.Constants.statusBarHeight
  },
});

Expo.registerRootComponent(App);
