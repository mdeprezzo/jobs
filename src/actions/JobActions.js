import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';
import {
 FETCH_JOBS	
} from './types';

const JOB_QUERY_PARAMS = {
 publisher: '7204923761397042',
 format: 'json',
 v: '2',
 latlong: 1,
 radius: 10,
 q: 'javascript'
};

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';

const buildJobsUrl = (zip) => {
 const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });

 return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = (region, callback) => {
 return async (dispatch) => {
  try {	
   const zip = await reverseGeocode(region);
   
   const { data } = await axios.get(buildJobsUrl(zip));

   dispatch({ type: FETCH_JOBS, payload: data });
   callback();
  } catch (err) {
   console.error(err);
  } 
 };
};