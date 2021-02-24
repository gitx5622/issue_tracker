import React, { useEffect } from 'react';
import { Nav, NavItem, NavLink, Card, CardBody, CardHeader, ListGroup, ListGroupItem} from "shards-react"
import { useDispatch, useSelector } from 'react-redux';
import { getMentionedIssues } from '../store/issues/actions/issueActions';
import { Tag } from 'antd';

const Mentionedissues = () => {
    const issueSelector = useSelector(state => state.Issues);

    const allmentionedIssues = issueSelector.mentionedIssues || [];

    const dispatch = useDispatch();

    const listMentionedIssues = () => dispatch(getMentionedIssues());

    const mentionedIssues = allmentionedIssues.map(issue => { return (
    <div>
        <ListGroup>
            <ListGroupItem>{issue.repository.full_name} &nbsp;&nbsp;
                <strong style={{fontWeight:"bold"}}>{issue.title}</strong>
            <Tag style={{float:"right", borderRadius:"10px"}} color="volcano">
                <a href={`${issue.repository.html_url}/issues`}>{issue.state}</a>
            </Tag>
            </ListGroupItem>
        </ListGroup>
        </div>
    )});

    useEffect(()=>{
        listMentionedIssues();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return ( 
        <div>
        <Nav tabs>
          <NavItem><NavLink active href="#">Mentioned</NavLink></NavItem>
        </Nav>
        <Card style={{ maxWidth: "1000px", marginTop:"10px"}}>
        <CardHeader>Mentioned Github issues
            <Tag style={{float:"right", marginTop:"7px"}} color="#f50">
            Total: {allmentionedIssues.length}
            </Tag>
        </CardHeader>
        <CardBody>
        {mentionedIssues}
        </CardBody>
        </Card>
        </div>
     );
};
 
export default Mentionedissues;