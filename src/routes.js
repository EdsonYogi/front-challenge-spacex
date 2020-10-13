import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './page/main/main';

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main}/>
    </Switch>
  </BrowserRouter>
)

export default routes;