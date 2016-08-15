import { combineReducers } from 'redux';
import DealsReducer from './reducer_deals';
import TopicsReducer from './reducer_topics';
import CouponsReducer from './reducer_coupons';
import CategoriesReducer from './reducer_categories';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  deals: DealsReducer,
  topics: TopicsReducer,
  coupons: CouponsReducer,
  categories: CategoriesReducer
  // form: formReducer
});

export default rootReducer;
