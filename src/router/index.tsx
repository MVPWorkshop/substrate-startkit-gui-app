import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/pages/LandingPage/landingPage';
import WorkspacePage from '../components/pages/WorkspacePage/workspacePage';
import GithubLoginSuccessPage from '../components/pages/GithubLoginSuccessPage/githubLoginSuccessPage';

const AppRouter = () => (
  <Switch>
    <Route path='/' exact={true} component={LandingPage}/>
    <Route path='/workspace' exact={true} component={WorkspacePage}/>
    <Route path='/github/success' exact={true} component={GithubLoginSuccessPage}/>
    <Redirect to={'/not-found'}/>
  </Switch>
);

export default AppRouter
