import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import DealsIndex from './components/deals/deals_index';
import TopicsIndex from './components/topics/topics_index';
import CouponsIndex from './components/coupons/coupons_index';
import CategoriesIndex from './components/categories/categories_index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DealsIndex} />
    <Route path="/deals" component={DealsIndex} />
    <Route path="/topics" component={TopicsIndex} />
    <Route path="/coupons" component={CouponsIndex} />
    <Route path="/categories" component={CategoriesIndex} />
  </Route>
);
