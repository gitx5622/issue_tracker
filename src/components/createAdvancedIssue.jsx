import React, {useState} from "react";
import { createAdvancedRepoIssue } from "../store/issues/actions/issueActions";
import { useDispatch } from "react-redux";
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


const CreateAdvancedIssue = () => {
  const [contentEditor, setContentEditor] = React.useState();

  const [issue, setIssue] = useState({
      title:'',
      body:'',
  });
  const dispatch = useDispatch();

  const addRepoIssue = (credentials) => dispatch(createAdvancedRepoIssue(credentials));

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
  };

    const handleEditorChange = (content) => {
        setContentEditor(content);
    };

    return (
      <div style={{marginTop:"10px"}}>
        <h3>Create an Issue</h3>
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
                  theme="success"
                  type="submit"
                  className="btn btn-solid"
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
};
export default CreateAdvancedIssue;
