import _ from 'lodash';
import { REHYDRATE } from 'redux-persist/constants';
import {
 FETCH_JOBS, 
 LIKE_JOB, 
 CLEAR_LIKED_JOBS 
} from '../actions/types';

const INITIAL_STATE = {
 results: [],
 likes: []	
};

export default (state = INITIAL_STATE, action) => {
 switch (action.type) {
  case REHYDRATE:
   return { ...action.payload.job, results: [] } || INITIAL_STATE; 	
  case FETCH_JOBS:
   return { ...state, results: action.payload };
  case LIKE_JOB:
   return { ...state, likes: _.uniqBy([action.payload, ...state.likes], 'jobkey') };
  case CLEAR_LIKED_JOBS:
   return { ...state, likes: [] };
  default:
   return state;	
 }
};
