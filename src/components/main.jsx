import React from 'react';
import {InputGroup,InputGroupText,InputGroupAddon, Card, CardBody, CardTitle, CardHeader, Col, Row } from "shards-react";
import Sidebar from './sidebar';

const Main = () => {
    return ( 
        <div className="container-fluid">
        <Row>
        <Col sm={3}>
            <Sidebar/>
        </Col>
        <Col sm={9}>
        <InputGroup size="sm" className="mb-2 pt-3">
        <InputGroupAddon type="prepend">
          <InputGroupText>Created</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon type="append">
          <InputGroupText>Assigned</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon type="append">
          <InputGroupText>Mentioned</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
        <Card style={{ maxWidth: "1000px", height:"500px", marginTop:"10px"}}>
      <CardHeader>Open    Closed</CardHeader>
      <CardBody>
          <center>
        <CardTitle>Welcome to issues!</CardTitle>
        <p>Issues are used to track todos, bugs, feature requests, and more. As issues are created, they’ll appear here in a searchable and filterable list. To get started, you should create an issue.</p>
        </center>
      </CardBody>
    </Card>  
        </Col>
        </Row>
      </div>
     );
}
 
export default Main;