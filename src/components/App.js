import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import routes from '../configs/routes';

import AppHeader from './AppHeader/AppHeader';
import Home from '../pages/Home';
import ViewPost from '../pages/ViewPost';

const App = () => (
  <div>
    <AppHeader />
    <Switch>
      <Route exact path={routes.HOME} component={Home} />
      <Route exact path={routes.POST} component={ViewPost} />

      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
