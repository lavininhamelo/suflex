import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/index';
import Layout from '../layouts/Default/index';

const AppRoutes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={() => (
        <Layout name="Bem vindo!" to="create">
          <Home />
        </Layout>
      )}
    />

    <Route path="*" component={() => <h1>Page not found</h1>} />
  </Switch>
);

export default AppRoutes;
