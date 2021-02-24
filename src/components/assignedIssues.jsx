import React, { useEffect } from 'react';
import { Nav, NavItem, NavLink, Card, CardBody, CardHeader, ListGroup, ListGroupItem} from "shards-react"
import { useDispatch, useSelector } from 'react-redux';
import { getAssignedIssues } from '../store/issues/actions/issueActions';
import { Tag } from 'antd';

const Assignedissues = () => {
    const issueSelector = useSelector(state => state.Issues);

    const allassignedIssues = issueSelector.assignedIssues || [];

    const dispatch = useDispatch();

    const listAssignedIssues = () => dispatch(getAssignedIssues());

    const assignedIssues = allassignedIssues.map(issue => { return (
    <div>
        <ListGroup>
            <ListGroupItem>{issue.repository.full_name} &nbsp;&nbsp;
                <strong style={{fontWeight:"bold"}}>{issue.title}</strong>
            <Tag style={{float:"right", borderRadius:"10px"}} color="volcano">
                <a href={`${issue.repository.html_url}/issues`}>{issue.number} {issue.state}</a>
            </Tag>
            </ListGroupItem>
        </ListGroup>
        </div>
    )});

    useEffect(()=>{
        listAssignedIssues();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return ( 
        <div>
        <Nav tabs>
          <NavItem><NavLink active href="#">Assigned</NavLink></NavItem>
        </Nav>
        <Card style={{ maxWidth: "1000px", marginTop:"10px"}}>
        <CardHeader>Assigned Github issues
            <Tag style={{float:"right", marginTop:"7px"}} color="#f50">
            Total: {allassignedIssues.length}
            </Tag>
        </CardHeader>
        <CardBody>
        {assignedIssues}
        </CardBody>
        </Card>
        </div>
     );
};
 
export default Assignedissues;