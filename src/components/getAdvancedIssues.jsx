import React, { useEffect } from 'react';
import { Row, Col, Card, CardBody, CardHeader, ListGroup, ListGroupItem, Button} from "shards-react"
import { getAdvancedRepoIssues } from '../store/issues/actions/issueActions';
import { getAdvancedRepoLabels } from '../store/labels/actions/labelActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { Tag } from 'antd';

const AdvancedRepoIssues = () => {
    const issueSelector = useSelector(state => state.Issues);
    const labelSelector = useSelector(state => state.Labels);

    const advancedRepoIssues = issueSelector.advancedrepoIssues;
    const advancedRepoLabels = labelSelector.advancedrepoLabels;

    const dispatch = useDispatch();

    const listRepoIssues = () => dispatch(getAdvancedRepoIssues());
    const listRepoLabels = () => dispatch(getAdvancedRepoLabels());

    const repoIssues = advancedRepoIssues.map(issue => { return (
    <div key={issue.id}>
        <ListGroup>
            <ListGroupItem><strong style={{fontWeight:"bold"}}>{issue.title}</strong>{issue.labels.map(label => { return (<Tag color="cyan"> {label.name}</Tag>)})}
            <Tag style={{float:"right", borderRadius:"10px"}} color="volcano">{issue.state}</Tag></ListGroupItem>
        </ListGroup>
        </div>
    )})
    const repoLabels = advancedRepoLabels.map(label => { return (
      <div key={label.id}>
      <ListGroup>
          <ListGroupItem>
            <Tag style={{float:"right", borderRadius:"10px"}} color="volcano">{label.name}</Tag>
          </ListGroupItem>
      </ListGroup>
      </div>
  )})
    useEffect(()=>{
      listRepoIssues();
      listRepoLabels();
    },[])
    return ( 
        <div>
          <Row>
            <Col>
            <Card style={{ maxWidth: "1000px", marginTop:"10px"}}>
            <CardHeader>Advanced Repository Github issues<Link to="/create/advanced_repo_issue"><Button style={{float:"right"}} theme="success">New Issue</Button><Tag style={{float:"right", marginTop:"12px"}} color="volcano">{repoIssues.length} open</Tag></Link></CardHeader>
            <CardBody>
              {repoIssues ? repoIssues :
              <p>Issues are used to track todos, bugs, feature requests, and more. As issues are created, they’ll appear here in a searchable and filterable list. To get started, you should <Link to="/create/repo_issue">create an issue.</Link></p>
              }
            </CardBody>
           </Card>
            </Col>
            <Col sm={4}>
            <h4 style={{marginTop:"30px"}}>Filter Labels</h4>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">filter</span>
              <input type="text" class="form-control" placeholder="Filter label issues" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div style={{maxHeight:"350px", overflowY: "scroll"}}>
            { repoLabels}
            </div>
            <Link to="/create_advanced_repo_label"><Button block theme="success">Create Labels for your repository</Button></Link>
            </Col>
          </Row>
        </div>
     );
}
 
export default AdvancedRepoIssues;