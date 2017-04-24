import {
 FACEBOOK_LOGIN_SUCCESS,
 FACEBOOK_LOGIN_FAILED,
 USER_ALREADY_LOGGED_IN,
 USER_ALREADY_NOT_LOGGED_IN
} from '../actions/types';

const INITIAL_STATE = {
 token: null
};

export default (state = INITIAL_STATE, action) => {
 switch (action.type) {
  case FACEBOOK_LOGIN_SUCCESS:
  case USER_ALREADY_LOGGED_IN:
  case USER_ALREADY_NOT_LOGGED_IN:
   return { token: action.payload };	
  case FACEBOOK_LOGIN_FAILED:
   return INITIAL_STATE;
  default:
  	return state;
 }	
};
