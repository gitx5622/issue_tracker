import React from 'react';
import {Card, CardBody, Row } from "shards-react";
import NavBar from '../components/navbar';
import {AiFillGithub} from 'react-icons/all';

const Login = () => {
    return ( 
        <div>
        <NavBar/>
        <div className="container-fluid">
        <Row>
            <div className="col-md-4 offset-md-4 logincard">
                <h3 className="black">Track your Github Issues</h3>
                <Card>
                    <CardBody>
                    <center><a href="https://github.com/login/oauth/authorize?scope=user&client_id=69e165413c11b10cd90f&redirect_uri=https://issuetracker.toprated.co.ke">
                    <AiFillGithub className="githubicon"/> &nbsp; Login with Github</a></center>
                    </CardBody>
                </Card>
                </div>
        </Row>
        </div>
        </div>
     );
}
 
export default Login;