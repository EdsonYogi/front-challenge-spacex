import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './page/main/index';
import Mission from './page/mission/index'

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route path='/Mission/:id' component={Mission}/>
    </Switch>
  </BrowserRouter>
)

export default routes;