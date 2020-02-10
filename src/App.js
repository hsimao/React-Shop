import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage/homePage.component';
import ShopPage from './pages/ShopPage/shopPage.component';
import FormPage from './pages/FormPage/formPage.component';
import Header from './components/Header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={FormPage} />
      </Switch>
    </div>
  );
}

export default App;
