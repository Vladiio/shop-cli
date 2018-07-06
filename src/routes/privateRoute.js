import React from 'react';

import { Route, Redirect } from 'react-router-dom';

export default ({ Component, ...rest }) => (
  <Route
    {...rest}
    render={() => (localStorage.getItem('user') ? <Component /> : <Redirect to="/login" />)}
  />
);
