import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage/homePage.component';
import ShopPage from './pages/ShopPage/shopPage.component';
import FormPage from './pages/FormPage/formPage.component';
import Header from './components/Header/header.component';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    // 取消 firebase onAuthStateChanged 監聽事件
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={FormPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
