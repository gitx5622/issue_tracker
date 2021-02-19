import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateTopratedIssue from './components/createTopratedIssue';
import CreateLikeeIssue from './components/createLikeeIssue';
import CreateAdvancedIssue from './components/createAdvancedIssue';
import CreateEshopIssue from './components/createEshopIssue';
import { ListGroup, ListGroupItem } from "shards-react";
import Createdissues from './components/createdIssues';
import TopratedRepoIssues from './components/getTopratedIssues';
import AllIssues from './components/allIssues';
import { Row, Col } from "shards-react";
import NavBar from './components/navbar';
import Sidebar from './components/sidebar';
import { history } from './utils/history';
import LikeeRepoIssues from './components/getLikeeIssues';
import EshopRepoIssues from './components/getEshopIssues';
import AdvancedRepoIssues from './components/getAdvancedIssues';

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
            <Route path="/advanced_repo_issues" component={AdvancedRepoIssues}/>
            <Route path="/eshop_repo_issues" component={EshopRepoIssues}/>
            <Route path="/likee_repo_issues" component={LikeeRepoIssues}/>
            <Route path="/toprated_repo_issues" component={TopratedRepoIssues}/>
            <Route path="/create/advanced_repo_issue" component={CreateAdvancedIssue}/>
            <Route path="/create/eshop_repo_issue" component={CreateEshopIssue}/>
            <Route path="/create/likee_repo_issue" component={CreateLikeeIssue}/>
            <Route path="/create/toprated_repo_issue" component={CreateTopratedIssue}/>
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
