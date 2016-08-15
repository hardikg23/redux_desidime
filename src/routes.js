import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import DealsIndex from './components/deals_index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DealsIndex} />
    <Route path="/deals" component={DealsIndex} />
  </Route>
);
