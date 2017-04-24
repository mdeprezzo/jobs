import {
 FACEBOOK_LOGIN_SUCCESS,
 FACEBOOK_LOGIN_FAILED	
} from '../actions/types';

const INITIAL_STATE = {
 token: null
};

export default (state = INITIAL_STATE, action) => {
 switch (action.type) {
  case FACEBOOK_LOGIN_SUCCESS:
   console.log('logged');
   return { token: action.payload };	
  case FACEBOOK_LOGIN_FAILED:
   return INITIAL_STATE;
  default:
  	return state;
 }	
};
