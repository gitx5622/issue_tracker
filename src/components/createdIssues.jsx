import React, { useEffect } from 'react';
import { Nav, NavItem, NavLink, Card, CardBody, CardHeader, ListGroup, ListGroupItem} from "shards-react"
import { useDispatch, useSelector } from 'react-redux';
import { getCreatedIssues } from '../store/issues/actions/issueActions';
import { Tag } from 'antd';

const Createdissues = () => {
    const issueSelector = useSelector(state => state.Issues);

    const allcreatedIssues = issueSelector.createdIssues;

    const dispatch = useDispatch();

    const listCreatedIssues = () => dispatch(getCreatedIssues());

    const createdIssues = allcreatedIssues.map(issue => { return (
    <div>
        <ListGroup>
            <ListGroupItem>{issue.repository.full_name} &nbsp;&nbsp;<strong style={{fontWeight:"bold"}}>{issue.title}</strong>
            <Tag style={{float:"right", borderRadius:"10px"}} color="volcano"><a href={`${issue.repository.html_url}/issues`}>{issue.number} {issue.state}</a></Tag></ListGroupItem>
        </ListGroup>
        </div>
    )})

    useEffect(()=>{
    listCreatedIssues();
    },[])
    return ( 
        <div>
             <Nav tabs>
      <NavItem>
        <NavLink href="/">
          All
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active href="#">Created <Tag style={{borderRadius:"10px"}} color="green">{allcreatedIssues.length}</Tag></NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/assigned_issues">Assigned</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/mentioned_issues">Mentioned</NavLink>
      </NavItem>
    </Nav>
        <Card style={{ maxWidth: "1000px", marginTop:"10px"}}>
      <CardHeader>Created Github issues </CardHeader>
      <CardBody>
        {createdIssues ? createdIssues :
        <p>Issues are used to track todos, bugs, feature requests, and more. As issues are created, they’ll appear here in a searchable and filterable list. To get started, you should create an issue.</p>
        }
        </CardBody>
    </Card>
        </div>
     );
}
 
export default Createdissues;