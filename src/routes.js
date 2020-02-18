import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Favorities from './pages/Favorities';
import About from './pages/About';
import Header from './components/Header';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/favoritos" component={Favorities} />
        <Route path="/filme/:id" component={About} />
      </Switch>
      <Header />
    </BrowserRouter>
  );
}
