import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import {
 FACEBOOK_LOGIN_SUCCESS,
 FACEBOOK_LOGIN_FAILED
} from './types';

export const facebookLogin = () => {
 return async (dispatch) => {
  const token = await AsyncStorage.getItem('fb_token');
   
  if (token !== null) {
   dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
   doFacebookLogin(dispatch);
  }
 };
};

const doFacebookLogin = async (dispatch) => {
 const { type, token } = await Facebook.logInWithReadPermissionsAsync('989108694553796', {
  permissions: ['public_profile']	
 });

 if (type === 'cancel') {
  return dispatch({ type: FACEBOOK_LOGIN_FAILED });	
 }

 await AsyncStorage.setItem('fb_token', token);
 dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
