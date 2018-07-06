import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import PrivateRoute from '../../routes/privateRoute';
import BookDetailPage from '../BookDetailPage/BookDetailPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute path="/" exact Component={HomePage} />
      <Route path="/register" component={SignUpPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/books/:slug" component={BookDetailPage} />
      <Route component={() => <p>Not found</p>} />
    </Switch>
  </BrowserRouter>
);

export default App;
