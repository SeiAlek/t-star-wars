import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PeopleContainer from '../../components/people/PeopleContainer';

const Router = () => (
  <>
    <Switch>
      <Route path="/" exact />
    </Switch>
    <Switch>
      <Route path="/" exact component={PeopleContainer} />
    </Switch>
  </>
);

export default Router;
