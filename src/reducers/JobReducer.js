import _ from 'lodash';
import { FETCH_JOBS, LIKE_JOB } from '../actions/types';

const INITIAL_STATE = {
 results: [],
 likes: []	
};

export default (state = INITIAL_STATE, action) => {
 switch (action.type) {
  case FETCH_JOBS:
   return { ...state, results: action.payload };
  case LIKE_JOB:
   return { ...state, likes: _.uniqBy([action.payload, ...state.likes], 'jobkey') };
  default:
   return state;	
 }
};
