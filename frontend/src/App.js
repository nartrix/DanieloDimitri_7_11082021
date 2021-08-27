import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import login from './components/pages/login/login';
import signup from './components/pages/signup/signup';
import home from './components/pages/home/home';

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route path='/' exact component={login} />
        <Route path='/signup' exact component={signup} />
        <Route path='/home' exact component={home} />
        <Route path='/logout'>
          <Redirect to='/' />
        </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
