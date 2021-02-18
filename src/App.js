import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import Login from './auth/login';
import Home from './components/home';
import { history } from './utils/history';

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
      <Switch>
        <Route path={["/", "/"]}>
            <Route exact path="/" component={Login}/>
            <Route exact path="/home" component={Home}/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
