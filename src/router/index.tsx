import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/pages/LandingPage/landingPage';
import WorkspacePage from '../components/pages/WorkspacePage/workspacePage';

const AppRouter = () => (
  <Switch>
    <Route path='/' exact={true} component={LandingPage}/>
    <Route path='/workspace' exact={true} component={WorkspacePage}/>
    <Redirect to={'/not-found'}/>
  </Switch>
);

export default AppRouter
