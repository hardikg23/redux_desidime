import { FETCH_COUPONS } from '../actions/index';

const INITIAL_STATE = { all: []};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_COUPONS:
    console.log(action.payload.data.coupons.data);
    return { ...state, all: action.payload.data.coupons.data };
  default:
    return state;
  }
}
