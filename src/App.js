import React from 'react';
import MainPage from './components/mainPage'
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './assets/scss/style.scss'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Login />
        </Route>
        <Route path='/playgame' exact>
        {!localStorage.getItem('token') ? <Redirect to="/" /> : <MainPage />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
