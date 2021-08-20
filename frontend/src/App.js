import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import login from './components/pages/login';
import signup from './components/pages/signup';

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route path='/' exact component={login} />
        <Route path='/signup' exact component={signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
