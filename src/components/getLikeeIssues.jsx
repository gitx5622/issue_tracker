import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, CardHeader, ListGroup, ListGroupItem, Button} from "shards-react"
import { getLikeeRepoIssues } from '../store/issues/actions/issueActions';
import { getLikeeRepoLabels } from '../store/labels/actions/labelActions';
import { useDispatch, useSelector } from 'react-redux';
import { API_ROUTE, owner, token } from "../utils/constants";
import { Link } from "react-router-dom";
import { Popover, Tag } from 'antd';
import axios from 'axios';

const LikeeRepoIssues = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const issueSelector = useSelector(state => state.Issues);
    const labelSelector = useSelector(state => state.Labels);

    const likeeRepoIssues = issueSelector.likeerepoIssues || [];
    const likeeRepoLabels = labelSelector.likeerepoLabels || [];

    const dispatch = useDispatch();

    const listRepoIssues = () => dispatch(getLikeeRepoIssues());
    const listRepoLabels = () => dispatch(getLikeeRepoLabels());

    const repoIssues = likeeRepoIssues.map(issue => { return (
    <div key={issue.id}>
        <ListGroup>
            <ListGroupItem><strong style={{fontWeight:"bold"}}>{issue.title}</strong>{issue.labels.map(label => { return (<Tag color="cyan"> {label.name}</Tag>)})}
            <Tag style={{float:"right", borderRadius:"10px"}} color="volcano">{issue.state}</Tag></ListGroupItem>
        </ListGroup>
        </div>
    )})
    const repoLabels = likeeRepoLabels.map(label => { return (
      <div key={label.id}>
      <ListGroup>
          <ListGroupItem>
            <Tag style={{float:"right"}} color="cyan">{label.name}</Tag>
          </ListGroupItem>
      </ListGroup>
      </div>
    )})
    
    const handleInputChange = (e) => {
      setQuery(e.target.value)
    }; 
        // filter advanced Repo label by searchbox
    const filterLikeeRepoLabel = async() => {
          try {
              const res = await axios.get(`${API_ROUTE}/repos/${owner}/likee_frontend/labels/${query}`, 
              { headers: { Authorization: 'token ' + token}})
              setResults(res.data)
          }catch (err) {
              
          }
    };
    const content = (
      <div>
        <p>{results.name}</p>
      </div>
    );
    useEffect(()=>{
      filterLikeeRepoLabel();
    },[query]);

    useEffect(()=>{
      listRepoIssues();
      listRepoLabels();
    },[])
    return ( 
        <div>
          <Row>
            <Col>
            <Card style={{ maxWidth: "1000px", marginTop:"10px"}}>
            <CardHeader>Likee Repository Github issues<Link to="/create/repo_issue"><Button style={{float:"right"}} theme="success">New Issue</Button><Tag style={{float:"right", marginTop:"7px"}} color="#f50">{repoIssues.length} open</Tag></Link></CardHeader>
            <CardBody>
              {repoIssues ? repoIssues :
              <p>Issues are used to track todos, bugs, feature requests, and more. As issues are created, they’ll appear here in a searchable and filterable list. To get started, you should <Link to="/create/repo_issue">create an issue.</Link></p>
              }
              </CardBody>
            </Card>
            </Col>
            <Col sm={4}>
            <h4 style={{marginTop:"30px"}}>Filter Likee Labels</h4>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">filter</span>
              <input type="text" onChange={handleInputChange} class="form-control" placeholder="Filter label name"/>
            </div>
            <div style={{maxHeight:"350px", overflowY: "scroll"}}>
            <Popover content={content}>
            <ListGroup>
              <ListGroupItem>
                <Tag color={`#${results.color}`}>{results.name}</Tag>
                {results.description}
              </ListGroupItem>
            </ListGroup>
              </Popover>
            { repoLabels}
            </div>
            <Link to="/create_likee_repo_label"><Button block theme="success">Create Labels for your repository</Button></Link>
            </Col>
          </Row>
        </div>
     );
}
 
export default LikeeRepoIssues;