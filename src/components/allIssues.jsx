import React, { useEffect }  from 'react';import { getAdvancedRepoLabels, getEshopRepoLabels, getLikeeRepoLabels, getTopratedRepoLabels } from '../store/labels/actions/labelActions';
import { Row, Col, Nav, NavItem, NavLink, Card, CardBody, CardHeader, ListGroup, ListGroupItem} from "shards-react"
import { getAllIssues } from '../store/issues/actions/issueActions';
import { useDispatch, useSelector } from 'react-redux';
import {CgDanger} from "react-icons/all";
import { Tag } from 'antd';


const AllIssues = () => {
    const issueSelector = useSelector(state => state.Issues);
    const labelSelector = useSelector(state => state.Labels);
    const allIssues = issueSelector.issues;

    const topratedRepoLabels = labelSelector.topratedrepoLabels;
    const likeeRepoLabels = labelSelector.likeerepoLabels;
    const eshopRepoLabels = labelSelector.eshoprepoLabels;
    const advancedRepoLabels = labelSelector.advancedrepoLabels;

    const dispatch = useDispatch();

    const listAllIssues = () => dispatch(getAllIssues());
    const listTopratedRepoLabels = () => dispatch(getTopratedRepoLabels());
    const listLikeeRepoLabels = () => dispatch(getLikeeRepoLabels());
    const listEshopRepoLabels = () => dispatch(getEshopRepoLabels());
    const listAdvancedRepoLabels = () => dispatch(getAdvancedRepoLabels());

    const issues = allIssues.map(issue => { return (
    <div key={issue.id}>
        <ListGroup>
            <ListGroupItem><CgDanger style={{color:"#f50"}}/>&nbsp;&nbsp; {issue.repository.full_name} &nbsp;&nbsp;<strong style={{fontWeight:"bold"}}>{issue.title}</strong>
            <Tag style={{float:"right", borderRadius:"10px"}} color="volcano"><a href={`${issue.repository.html_url}/issues`}>{issue.state}</a></Tag></ListGroupItem>
        </ListGroup>
        </div>
    )})

    const topratedAllRepoLabels = topratedRepoLabels.map(label => { return (
      <div key={label.id}>
      <ListGroup>
          <ListGroupItem>
            <Tag style={{float:"right", borderRadius:"10px"}} color="volcano">{label.name}</Tag>
          </ListGroupItem>
      </ListGroup>
      </div>
    )})

    const likeeAllRepoLabels = likeeRepoLabels.map(label => { return (
      <div key={label.id}>
      <ListGroup>
          <ListGroupItem>
            <Tag style={{float:"right", borderRadius:"10px"}} color="volcano">{label.name}</Tag>
          </ListGroupItem>
      </ListGroup>
      </div>
    )})

    const eshopAllRepoLabels = eshopRepoLabels.map(label => { return (
      <div key={label.id}>
      <ListGroup>
          <ListGroupItem>
            <Tag style={{float:"right", borderRadius:"10px"}} color="volcano">{label.name}</Tag>
          </ListGroupItem>
      </ListGroup>
      </div>
    )})

    const advancedAllRepoLabels = advancedRepoLabels.map(label => { return (
      <div key={label.id}>
      <ListGroup>
          <ListGroupItem>
            <Tag style={{float:"right", borderRadius:"10px"}} color="volcano">{label.name}</Tag>
          </ListGroupItem>
      </ListGroup>
      </div>
    )})

    useEffect(()=>{
    listAllIssues();
    listTopratedRepoLabels();
    listLikeeRepoLabels();
    listEshopRepoLabels();
    listAdvancedRepoLabels();
    },[])
    return ( 
        <div>
          <Row>
            <Col>
            <Nav tabs>
                <NavItem><NavLink active href="#">All</NavLink></NavItem>
                <NavItem><NavLink href="#">Created</NavLink></NavItem>
                <NavItem><NavLink href="#">Assigned</NavLink></NavItem>
                <NavItem><NavLink href="#">Mentioned</NavLink></NavItem>
            </Nav>
            <Card style={{ maxWidth: "1000px", height:"500px", marginTop:"10px"}}>
              <CardHeader>All Github issues <Tag style={{float:"right", marginTop:"7px"}} color="#f50">Total: {allIssues.length}</Tag></CardHeader>
                <CardBody>
                  <div style={{maxHeight:"400px", overflowY: "scroll"}}>
                  {issues ? issues :
                  <p>Issues are used to track todos, bugs, feature requests, and more. As issues are created, they’ll appear here in a searchable and filterable list. To get started, you should create an issue.</p>
                  }
                  </div>
                </CardBody>
            </Card>
            </Col>
            <Col sm={4}>
            <h4 style={{marginTop:"30px"}}>All Repo Labels <Tag style={{float:"right", marginTop:"7px"}} color="#f50">Total: {topratedAllRepoLabels.length + likeeAllRepoLabels.length + eshopAllRepoLabels.length + advancedAllRepoLabels.length}</Tag></h4>
            <div style={{maxHeight:"480px", overflowY: "scroll"}}>
            {topratedAllRepoLabels}
            {likeeAllRepoLabels}
            {eshopAllRepoLabels}
            {advancedAllRepoLabels}
            </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default AllIssues;