import React, { useEffect }  from 'react';
import { Row, Col, Nav, NavItem, NavLink, Card, CardBody, CardHeader, ListGroup, ListGroupItem} from "shards-react"
import { getAllIssues } from '../store/issues/actions/issueActions';
import { useDispatch, useSelector } from 'react-redux';
import {CgDanger} from "react-icons/all";
import { Tag } from 'antd';

const AllIssues = () => {
    const issueSelector = useSelector(state => state.Issues);
    const allIssues = issueSelector.issues;

    const dispatch = useDispatch();

    const listAllIssues = () => dispatch(getAllIssues());

    const issues = allIssues.map(issue => { return (
    <div>
        <ListGroup>
            <ListGroupItem><CgDanger style={{color:"#f50"}}/>&nbsp;&nbsp; {issue.repository.full_name} &nbsp;&nbsp;<strong style={{fontWeight:"bold"}}>{issue.title}</strong>
            <Tag style={{float:"right", borderRadius:"10px"}} color="volcano"><a href={`${issue.repository.html_url}/issues`}>{issue.number} {issue.state}</a></Tag></ListGroupItem>
        </ListGroup>
        </div>
    )})

    useEffect(()=>{
    listAllIssues();
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
              <CardHeader>All Github issues </CardHeader>
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
     );
}
 
export default AllIssues;