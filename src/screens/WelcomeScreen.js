import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Slides from '../components/Slides';

const SLIDE_DATA = [
 { text: 'Welcome to JobApp', color: '#03A9F4' },
 { text: 'Use this to get a job', color: '#009688' },
 { text: 'Set your location, then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
 componentWillMount() {
  this.props.isUserAlreadyLoggedIn();
 }

 componentWillReceiveProps({ token }) {
  if (token) {
   this.props.navigation.navigate('map');	
  }  
 }

 onSlidesComplete() {
  this.props.navigation.navigate('auth');
 }

 render() {
  if (_.isNull(this.props.token)) {
   return <AppLoading />;	
  }

  return (
   <Slides 
    data={SLIDE_DATA} 
    onComplete={this.onSlidesComplete.bind(this)}
   />
  );	
 }	
}

const mapStateToProps = state => {
 const { token } = state.auth;

 return { token };
};

export default connect(mapStateToProps, actions)(WelcomeScreen);
