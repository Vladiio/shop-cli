import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import BookDetailPage from '../BookDetailPage/BookDetailPage';
import SignUpPage from '../SignUpPage/SignUpPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/register" component={SignUpPage} />
      <Route path="/books/:slug" component={BookDetailPage} />
      <Route component={() => <p>Not found</p>} />
    </Switch>
  </BrowserRouter>
);

export default App;
