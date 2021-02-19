import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ListGroup, ListGroupItem } from "shards-react";
import { Row, Col } from "shards-react";
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
            <Col sm={6}>
            <div style={{marginTop:"10px"}}>
            <Route path="/create/repo_issue" component={CreateRepoIssue}/>
            <Route path="/repo_issues" component={RepoIssues}/>
            <Route path="/created_issues" component={Createdissues}/>
            <Route exact path="/" component={AllIssues}/>
            </div>
            </Col>
            <Col sm={3}>
            <h4 style={{marginTop:"30px"}}>Filter Issues</h4>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">filter</span>
              <input type="text" class="form-control" placeholder="Filter label issues" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <ListGroup>
              <h4>Issues Tags</h4>
              <ListGroupItem>#Tag1</ListGroupItem>
              <ListGroupItem>#Tag2</ListGroupItem>
              <ListGroupItem>#Tag3</ListGroupItem>
              <ListGroupItem>#Tag4</ListGroupItem>
              <ListGroupItem>#Tag5</ListGroupItem>
            </ListGroup>
            </Col>
          </Row>
         </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
