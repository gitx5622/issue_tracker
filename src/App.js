import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './auth/login';
import Home from './components/home';
import { history } from './utils/history';

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
      <Switch>
        <Route path={["/login", "/"]}>
            <Route path="/login" component={Login}/>
            <Route exact path="/" component={Home}/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
