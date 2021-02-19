import React, {useState} from "react";
import { createRepoIssue } from "../store/issues/actions/issueActions";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import {Row, Col, Button} from 'shards-react';
import 'tinymce/skins/content/default/content.min.css';
import 'tinymce/skins/ui/oxide/content.min.css';
import { Editor } from '@tinymce/tinymce-react';
import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/tinymce';
import 'tinymce/icons/default';
import 'tinymce/themes/silver';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/table';
import { history } from "../utils/history";

const CreateRepoIssue = () => {
  const [contentEditor, setContentEditor] = React.useState();
  const currentState = useSelector((state) => state.Issues);

  const [issue, setIssue] = useState({
      title:'',
      body:'',
  });
  const dispatch = useDispatch();

  const addRepoIssue = (credentials) => dispatch(createRepoIssue(credentials));

  const handleChange = e => {
      setIssue({
          ...issue,
          [e.target.name]: e.target.value
      })
  };
  const submitIssue = (e) => {
      e.preventDefault();
      addRepoIssue({
          title: issue.title,
          body: issue.body,
      });
      history.push("/");
      window.location.reload();
  };

    const handleEditorChange = (content) => {
        setContentEditor(content);
    };


  if(currentState.isAuthenticated){
    return <Redirect to='/' />
  }

    return (
      <div>
          <form onSubmit={submitIssue}>
            <div className="form-group">
                <input 
                type="text" 
                name="title"
                placeholder="Title"
                className="form-control" 
                onChange={handleChange} 
                />
              </div>
              <div className="form-group">
              <Editor
                    initialValue="<p></p>"
                    init={{
                        skin: false,
                        content_css: false,
                        height: 200,
                        menubar: false,
                        plugins: [
                            'link image',
                            'table paste'
                        ],
                        toolbar:
                            'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
                    }}
                    value={contentEditor}
                    onEditorChange={handleEditorChange}
                />
              </div>
              <Row>
              <Col>
              <Button
                  outline
                  theme="success"
                  type="submit"
                  className="btn btn-solid order-color"
                  name="register"
                  disabled={
                    issue.title === ""
                  }
                >
                  Submit new issue
                </Button>
                </Col>
              </Row>
            </form>
        </div>
    );
}
export default CreateRepoIssue;
