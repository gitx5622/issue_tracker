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
import TopratedCreateLabels from './components/topratedCreateLabels';
import LikeeCreateLabel from './components/likeeCreateLabel';
import EshopCreateLabel from './components/eshopCreateLabel';
import AdvancedCreateLabel from './components/advancedCreateLabel';
import Assignedissues from './components/assignedIssues';
import Mentionedissues from './components/mentionedIssues';

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
            <div style={{marginTop:"10px"}}>
            <Route path="/create_advanced_repo_label" component={AdvancedCreateLabel}/>
            <Route path="/create_eshop_repo_label" component={EshopCreateLabel}/>
            <Route path="/create_likee_repo_label" component={LikeeCreateLabel}/>
            <Route path="/create_toprated_repo_label" component={TopratedCreateLabels}/>
            <Route path="/advanced_repo_issues" component={AdvancedRepoIssues}/>
            <Route path="/eshop_repo_issues" component={EshopRepoIssues}/>
            <Route path="/likee_repo_issues" component={LikeeRepoIssues}/>
            <Route path="/toprated_repo_issues" component={TopratedRepoIssues}/>
            <Route path="/create/advanced_repo_issue" component={CreateAdvancedIssue}/>
            <Route path="/create/eshop_repo_issue" component={CreateEshopIssue}/>
            <Route path="/create/likee_repo_issue" component={CreateLikeeIssue}/>
            <Route path="/create/toprated_repo_issue" component={CreateTopratedIssue}/>
            <Route path="/mentioned_issues" component={Mentionedissues}/>
            <Route path="/assigned_issues" component={Assignedissues}/>
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
