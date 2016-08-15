import axios from 'axios';

export const FETCH_DEALS = 'FETCH_DEALS';
// export const CREATE_POST = 'CREATE_POST';
// export const FETCH_POST = 'FETCH_POST';
// export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://localhost:4000/';
const API_KEY = '?key=lkajdsfapipwietpw';

export function fetchDeals() {
  const request = axios.get(`${ROOT_URL}/v2/deals.json`, 
      {
         headers: {'X-Desidime-Client': '40f966d1bdc4f62edc9adfae6cb44cda93627d94cdfacbbf394daf43b28a92ec'},
      }
    );

  return {
    type: FETCH_DEALS,
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
