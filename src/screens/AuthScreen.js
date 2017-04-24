import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
 componentDidMount() {
  this.props.facebookLogin();
 }

 componentWillReceiveProps(nextProps) {
  this.onAuthComplete(nextProps); 
 }

 onAuthComplete({ token }) {
  if (token) {
   this.props.navigation.navigate('map');  
  } 
 }

 render() {
  return (
   <View />
  );	
 }	
}

const mapStateToProps = state => {
 const { token } = state.auth;

 return { token };
};

export default connect(mapStateToProps, actions)(AuthScreen);
