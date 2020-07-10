import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Logout from './components/Logout'
import Admin from './components/Admin'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;
