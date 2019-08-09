import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import styled from 'styled-components';
import routes from '../configs/routes';

import AppHeader from './AppHeader/AppHeader';
import Home from '../pages/Home';
import ViewPost from '../pages/ViewPost';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 118px auto;
  grid-template-areas:
    'header'
    'section';

  width: 100%;
`;

const Header = styled.header`
  grid-area: header;
`;

const Main = styled.header`
  grid-area: section;
`;

const App = () => (
  <div>
    <Wrapper>
      <Header>
        <AppHeader />
      </Header>
      <Main>
        <Switch>
          <Route exact path={routes.HOME} component={Home} />
          <Route exact path={routes.POST} component={ViewPost} />
          <Redirect to="/" />
        </Switch>
      </Main>
    </Wrapper>
  </div>
);

export default App;
