import React, { Component } from "react";
import { Card, CardBody, Row } from "shards-react";
import NavBar from "../components/navbar";
import axios from 'axios';

const CLIENT_ID = `69e165413c11b10cd90f`;
const REDIRECT_URI = `http://localhost:3000`;

const uri = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

class Login extends Component {
    async componentDidMount() {
        const params = (new URL(document.location)).searchParams;
        const code = params.get("code");
    
        console.log(code);
    
        const githubRes = await axios.post(`https://github.com/login/oauth/access_token?client_id=69e165413c11b10cd90f&client_secret=f3a239632ad3d8156d82317ba3d4c440890cbc15&code=${code}`);
        console.log(githubRes);
      }
  render() {
    return (
        <div>
        <NavBar/>
        <div className="container-fluid">
        <Row>
            <div className="col-md-4 offset-md-4 logincard">
                <h3 className="black">Track your Github Issues</h3>
                <Card>
                    <CardBody>
                    <center>
                        <a href={uri}>
                        Login with Github
                        </a></center>
                    </CardBody>
                </Card>
                </div>
        </Row>
        </div>
        </div>
    );
  }
}

export default Login;