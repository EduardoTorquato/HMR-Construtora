/* eslint-disable prettier/prettier */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home/index';

// import Page404 from '~/pages/Page404/';

export default function Routes() {
  return (
    <Switch>
      <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />

      {/* <Route path={`${process.env.PUBLIC_URL}/`} component={Page404} /> */}
    </Switch>
  );
}
