import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ExampleHomePage from '../components/pages/ExampleHomePage/exampleHomePage';

const AppRouter = () => (
  <Switch>
    <Route path='/' exact={true} component={ExampleHomePage}/>
    <Redirect to={'/not-found'}/>
  </Switch>
);

export default AppRouter
