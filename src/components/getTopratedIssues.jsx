import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, CardHeader, ListGroup, ListGroupItem, Button} from "shards-react"
import { getTopratedRepoLabels } from '../store/labels/actions/labelActions';
import { getTopratedRepoIssues } from '../store/issues/actions/issueActions';
import { API_ROUTE, owner, token } from "../utils/constants";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Popover, Tag } from 'antd';

const TopratedRepoIssues = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const issueSelector = useSelector(state => state.Issues);
    const labelSelector = useSelector(state => state.Labels);

    const allRepoIssues = issueSelector.topratedrepoIssues;
    const topratedRepoLabels = labelSelector.topratedrepoLabels || [];

    const dispatch = useDispatch();

    const listRepoIssues = () => dispatch(getTopratedRepoIssues());
    const listRepoLabels = () => dispatch(getTopratedRepoLabels());

    const handleInputChange = (e) => {
      setQuery(e.target.value)
    }; 
        // filter advanced Repo label by searchbox
    const filterTopratedRepoLabel = async() => {
          try {
              const res = await axios.get(`${API_ROUTE}/repos/${owner}/topratedprofessors/labels/${query}`, 
              { headers: { Authorization: 'token ' + token}})
              setResults(res.data)
          }catch (err) {
              
          }
    };

    useEffect(()=>{
      filterTopratedRepoLabel();
    },[query]);

    const repoIssues = allRepoIssues.map(issue => { return (
    <   div key={issue.id}>
        <ListGroup>
            <ListGroupItem><strong style={{fontWeight:"bold"}}>{issue.title}</strong>{issue.labels.map(label => { return (<Tag color="cyan"> {label.name}</Tag>)})}
            <Tag style={{float:"right", borderRadius:"10px"}} color="volcano">{issue.state}</Tag></ListGroupItem>
        </ListGroup>
        </div>
    )})
    const repoLabels = topratedRepoLabels.map(label => { return (
          <div key={label.id}>
          <ListGroup>
              <ListGroupItem>
                <Tag style={{float:"right", borderRadius:"10px"}} color="volcano">{label.name}</Tag>
              </ListGroupItem>
          </ListGroup>
          </div>
      )})
    const content = (
      <div>
        <p>{results.name}</p>
        <p></p>
      </div>
    );

    useEffect(()=>{
      listRepoIssues();
      listRepoLabels();
    },[])
    return ( 
        <div>
          <Row>
            <Col>
              <Card style={{ maxWidth: "1000px", marginTop:"10px"}}>
              <CardHeader>Topratedprofessors Github issues<Link to="/create/repo_issue"><Button style={{float:"right"}} theme="success">New Issue</Button><Tag style={{float:"right", marginTop:"12px"}} color="volcano">{repoIssues.length} open</Tag></Link></CardHeader>
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
              <input onChange={handleInputChange} type="text" class="form-control" placeholder="Filter label issues"/>
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
            <Link to="/create_toprated_repo_label"><Button block theme="success">Create Labels for your repository</Button></Link>
            </Col>
            </Row>
        </div>
     );
}
 
export default TopratedRepoIssues;