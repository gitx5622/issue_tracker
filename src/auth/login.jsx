import React, { Component } from "react";
import { Card, CardBody, Row } from "shards-react";
import { uri } from "../utils/constants";
import axios from 'axios';

class Login extends Component {
    async componentDidMount() {
        const params = (new URL(document.location)).searchParams;
        const code = params.get("code");
    
        console.log(code);
    
        const githubRes = await axios.post(`https://github.com/login/oauth/access_token?client_id=Iv1.484927f49fafccc1&client_secret=ae709ff30946c20f5b9e473b1b8ceb41ed0caa23&code=${code}`);
        console.log(githubRes);
      }
  render() {
    return (
        <div className="container-fluid">
        <Row>
            <div className="col-md-4 offset-md-4 logincard">
                <h3 className="black">Track your Github Issues</h3>
                <Card>
                    <CardBody>
                    <center>
                        <a href={uri}>
                        Login with Github
                        </a>
                    </center>
                    </CardBody>
                </Card>
                </div>
        </Row>
        </div>
    );
  }
}

export default Login;