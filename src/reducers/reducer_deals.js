import { FETCH_DEALS } from '../actions/index';

const INITIAL_STATE = { all: []};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  // case FETCH_POST:
  //   return { ...state, post: action.payload.data };
  case FETCH_DEALS:
    console.log(action.payload.data.deals.data);
    return { ...state, all: action.payload.data.deals.data };
  default:
    return state;
  }
}
