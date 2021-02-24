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

    useEffect(()=>{
      listAllIssues();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);

    const issues = allIssues.map(issue => { return (
    <div key={issue.id}>
        <ListGroup>
            <ListGroupItem><CgDanger style={{color:"#f50"}}/>&nbsp;&nbsp; {issue.repository.full_name}
            &nbsp;&nbsp;<strong style={{fontWeight:"bold"}}>{issue.title}</strong>
            <Tag style={{float:"right", borderRadius:"10px"}} color="volcano">
                <a href={`${issue.repository.html_url}/issues`}>{issue.state}</a>
            </Tag>
            </ListGroupItem>
        </ListGroup>
        </div>
    )});
    return ( 
        <div>
          <Row>
            <Col>
            <Nav tabs>
                <NavItem><NavLink active href="#">All</NavLink></NavItem>
            </Nav>
            <Card className="allcard">
              <CardHeader>All Github issues
                  <Tag style={{float:"right", marginTop:"7px"}} color="#f50">
                  Total: {allIssues.length}
                  </Tag>
              </CardHeader>
                <CardBody>
                  <div className="issuescard">
                  {issues ? issues :
                  <p>Issues are used to track todos, bugs, feature requests, and more. As issues are created,
                      they’ll appear here in a searchable and filterable list. To get started, you should create an issue.</p>
                  }
                  </div>
                </CardBody>
            </Card>
            </Col>
          </Row>
        </div>
     );
};
 
export default AllIssues;