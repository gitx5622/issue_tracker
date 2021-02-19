import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Row, Col } from "shards-react";
import Login from './auth/login';
import AllIssues from './components/allIssues';
import Createdissues from './components/createdIssues';
import CreateRepoIssue from './components/createRepoIssue';
import NavBar from './components/navbar';
import RepoIssues from './components/repoIssues';
import Sidebar from './components/sidebar';
import { history } from './utils/history';

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Router history={history}>
      <Switch>
        <div className="container-fluid">
          <Row>
            <Col sm={3}>
            <Sidebar/>
            </Col>
            <Col sm={9}>
            <div style={{zIndex:1, marginTop:"40px"}}>
            <Route path="/create/repo_issue" component={CreateRepoIssue}/>
            <Route path="/repo_issues" component={RepoIssues}/>
            <Route path="/created_issues" component={Createdissues}/>
            <Route exact path="/" component={AllIssues}/>
            </div>
            </Col>
          </Row>
         </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
