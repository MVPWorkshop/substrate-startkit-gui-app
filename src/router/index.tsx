import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/pages/LandingPage/landingPage';

const AppRouter = () => (
  <Switch>
    <Route path='/' exact={true} component={LandingPage}/>
    <Redirect to={'/not-found'}/>
  </Switch>
);

export default AppRouter
