import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import BookDetailPage from '../BookDetailPage/BookDetailPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/books/:slug" component={BookDetailPage} />
      <Route component={() => <p>Not found</p>} />
    </Switch>
  </BrowserRouter>
);

export default App;
