import React, { useEffect }  from 'react';
import { Nav, NavItem, NavLink, Card, CardBody, CardHeader, ListGroup, ListGroupItem} from "shards-react"
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
            <Nav tabs>
      <NavItem>
        <NavLink active href="#">
          All <Tag style={{borderRadius:"10px"}} color="green">{issues.length}</Tag>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/created_issues">Created <Tag style={{borderRadius:"10px"}} color="green">2</Tag></NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/assigned_issues">Assigned <Tag style={{borderRadius:"10px"}} color="green">{issues.length}</Tag></NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/mentioned_issues">Mentioned <Tag style={{borderRadius:"10px"}} color="green">{issues.length}</Tag></NavLink>
      </NavItem>
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
        </div>
     );
}
 
export default AllIssues;