import React, { useEffect } from 'react';
import { Card, CardBody, CardHeader, ListGroup, ListGroupItem, Button} from "shards-react"
import { useDispatch, useSelector } from 'react-redux';
import { getLikeeRepoIssues } from '../store/issues/actions/issueActions';
import { Link } from "react-router-dom";
import { Tag } from 'antd';

const LikeeRepoIssues = () => {
    const issueSelector = useSelector(state => state.Issues);

    const likeeRepoIssues = issueSelector.likeerepoIssues;

    const dispatch = useDispatch();

    const listRepoIssues = () => dispatch(getLikeeRepoIssues());

    const repoIssues = likeeRepoIssues.map(issue => { return (
    <div key={issue.id}>
        <ListGroup>
            <ListGroupItem><strong style={{fontWeight:"bold"}}>{issue.title}</strong>{issue.labels.map(label => { return (<Tag color="cyan"> {label.name}</Tag>)})}
            <Tag style={{float:"right", borderRadius:"10px"}} color="volcano">{issue.state}</Tag></ListGroupItem>
        </ListGroup>
        </div>
    )})

    useEffect(()=>{
      listRepoIssues();
    },[])
    return ( 
        <div>
        <Card style={{ maxWidth: "1000px", marginTop:"10px"}}>
      <CardHeader>Likee Repository Github issues<Link to="/create/repo_issue"><Button style={{float:"right"}} theme="success">New Issue</Button><Tag style={{float:"right", marginTop:"12px"}} color="volcano">{repoIssues.length} open</Tag></Link></CardHeader>
      <CardBody>
        {repoIssues ? repoIssues :
        <p>Issues are used to track todos, bugs, feature requests, and more. As issues are created, they’ll appear here in a searchable and filterable list. To get started, you should <Link to="/create/repo_issue">create an issue.</Link></p>
        }
        </CardBody>
    </Card>
        </div>
     );
}
 
export default LikeeRepoIssues;