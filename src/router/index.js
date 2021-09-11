import React from 'react';
import { HashRouter, Redirect, Route } from 'react-router-dom';
import FooterCom from 'src/components/footer';
import { CustomHeader } from 'src/components/header';
import Home from 'src/components/main/home';

const routes = (
  <HashRouter>
    <Route component={CustomHeader} />
    <Route path="/" component={Home} />
    <Route path="/">
      <Redirect from="/" to="/home" />
    </Route>
    <Route component={FooterCom} />
  </HashRouter>
);

export default routes;
