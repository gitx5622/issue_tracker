import React, {useState, useEffect} from 'react';
import {InputGroup,InputGroupText,InputGroupAddon, Card, CardBody, CardTitle, CardHeader, Col, Row } from "shards-react";
import Sidebar from './sidebar';
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import { Redirect } from "react-router-dom";
import { LOGIN_SUCCESS } from '../store/auth/actionTypes';
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {
  const location = useLocation();
  const [data, setData] = useState({ errorMessage: "", isLoading: false });
  const authState = useSelector(state => state.Auth);
  const dispatch = useDispatch();

  let redirect_uri = `https://issuetracker.toprated.co.ke`;

  useEffect(() => {
      const value = queryString.parse(location.search); // result: '?query=abc'
      const code = value.code;
      localStorage.setItem('code', code);
      const hasCode = localStorage.getItem('code');
      console.log(hasCode);
  
      // If Github API returns the code parameter
      if (hasCode) {
        const proxy_url = `https://github.com/login/oauth/access_token?client_id=69e165413c11b10cd90f&client_secret=f3a239632ad3d8156d82317ba3d4c440890cbc15&code=${hasCode}`
  
        // Use code parameter and other parameters to make POST request to proxy_server
        fetch(proxy_url, {
          method: "POST",
        })
          .then(response => response.json())
          .then(data => {
          console.log(data);
          dispatch({type: LOGIN_SUCCESS, payload: { user: data, isLoggedIn: true }});
          })
          .catch(error => {
            setData({
              isLoading: false,
              errorMessage: "Sorry! Login failed"
            });
          });
      }
   }, [location, redirect_uri]);
  
    if (authState.isLoggedIn) {
      return <Redirect to="/" />;
    }

  
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