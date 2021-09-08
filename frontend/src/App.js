import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import login from './components/pages/login/login';
import signup from './components/pages/signup/signup';
import home from './components/pages/home/home';
import account from './components/pages/account/account';
import logout from './components/logout/logout';

class App extends Component {

  render () {

    return (
      <Router>
        <Switch>
        <Route path='/login' exact component={login} />
        <Route path='/signup' exact component={signup} />
        <Route path='/' exact component={home} />
        <Route path='/account' exact component={account} />
        <Route path='/logout' exact component={logout} />
        </Switch>
      </Router>
    );
  }
  
}

export default App;
