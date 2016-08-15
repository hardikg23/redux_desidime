import { combineReducers } from 'redux';
import DealsReducer from './reducer_deals';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  deals: DealsReducer
  // form: formReducer
});

export default rootReducer;
