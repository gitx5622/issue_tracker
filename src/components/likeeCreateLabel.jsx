import React, {useState} from "react";
import { createLikeeRepoLabel } from "../store/labels/actions/labelActions";
import { useDispatch } from "react-redux";
import {Row, Col, Button} from 'shards-react';


const LikeeCreateLabel = () => {

  const [label, setLabel] = useState({
      name:'',
      color:'',
  });
  const dispatch = useDispatch();

  const addRepoLabel = (credentials) => dispatch(createLikeeRepoLabel(credentials));

  const handleChange = e => {
      setLabel({
          ...label,
          [e.target.name]: e.target.value
      })
  };
  const submitIssue = (e) => {
      e.preventDefault();
      addRepoLabel({
          name: label.name,
          color: label.color,
      });
    };
    return (
      <div className="margintop">
        <h3>Create a label for Likee Repository</h3>
          <form onSubmit={submitIssue}>
            <div className="form-group">
                <input 
                type="text" 
                name="name"
                placeholder="Name"
                className="form-control" 
                onChange={handleChange} 
                />
              </div>
              <div className="form-group">
              <input 
                type="text" 
                name="color"
                placeholder="#bdbffa,,,,without the leading #"
                className="form-control" 
                onChange={handleChange} 
                />
              </div>
              <Row>
              <Col>
              <Button
                  theme="success"
                  type="submit"
                  className="btn btn-solid"
                  disabled={
                    label.name === ""
                  }
                >
                  Create label
                </Button>
                </Col>
              </Row>
            </form>
        </div>
    );
};
export default LikeeCreateLabel;
