import React from 'react';
import {Button, Card, CardBody, Row, Col} from "shards-react";
import NavBar from '../components/navbar';
import {AiFillGithub} from 'react-icons/all';
import { useDispatch } from "react-redux";
import { getCode, SignIn } from '../store/auth/actions/authActions';
import { history } from '../utils/history';

const Login = () => {
    const dispatch = useDispatch();

    const userLogin = (credentials) => dispatch(SignIn(credentials));
    return ( 
        <div>
        <NavBar/>
        <div className="container-fluid">
        <Row>
            <div className="col-md-4 offset-md-4 logincard">
                <h3 className="black">Track your Github Issues</h3>
                <Card>
                    <CardBody>
                    <center><Button onClick={() => userLogin() } block theme="dark"><AiFillGithub className="githubicon"/> &nbsp; Login with Github</Button></center>
                    </CardBody>
                </Card>
                </div>
        </Row>
        </div>
        </div>
     );
}
 
export default Login;