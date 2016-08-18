import axios from 'axios';

export const FETCH_DEALS = 'FETCH_DEALS';
export const FETCH_TOPICS = 'FETCH_TOPICS';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_COUPONS = 'FETCH_COUPONS';
// export const CREATE_POST = 'CREATE_POST';
// export const FETCH_POST = 'FETCH_POST';
// export const DELETE_POST = 'DELETE_POST';

// const ROOT_URL = 'http://localhost:4000/';
// const CLIENT = '40f966d1bdc4f62edc9adfae6cb44cda93627d94cdfacbbf394daf43b28a92ec'; // dev

const ROOT_URL = 'http://139.162.46.29/';
const CLIENT = '68045fd226ab32029c98bf4533bfa98b3c50423094d292d70ca2702e61a9679b'; // staging


export function fetchDeals() {
  const request = axios.get(`${ROOT_URL}/v2/deals.json`, 
      {
         headers: {'X-Desidime-Client': CLIENT},
      }
    );
  return {
    type: FETCH_DEALS,
    payload: request
  };
}

export function fetchTopics() {
  const request = axios.get(`${ROOT_URL}/v2/topics.json?forum_id=2`, 
      {
         headers: {'X-Desidime-Client': CLIENT},
      }
    );
  return {
    type: FETCH_TOPICS,
    payload: request
  };
}

export function fetchCategories() {
  const request = axios.get(`${ROOT_URL}/v2/categories.json`, 
      {
         headers: {'X-Desidime-Client': CLIENT},
      }
    );
  return {
    type: FETCH_CATEGORIES,
    payload: request
  };
}

export function fetchCoupons() {
  const request = axios.get(`${ROOT_URL}/v2/coupons.json`, 
      {
         headers: {'X-Desidime-Client': CLIENT},
      }
    );
  return {
    type: FETCH_COUPONS,
    payload: request
  };
}

// export function createPost(props) {
//   const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

//   return {
//     type: CREATE_POST,
//     payload: request
//   };
// }

// export function fetchPost(id) {
//   const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

//   return {
//     type: FETCH_POST,
//     payload: request
//   };
// }

// export function deletePost(id) {
//   const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

//   return {
//     type: DELETE_POST,
//     payload: request
//   };
// }
