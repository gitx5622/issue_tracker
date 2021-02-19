import { GET_ISSUES_ERROR, GET_ISSUES_SUCCESS, GET_CREATED_ISSUES_ERROR, GET_CREATED_ISSUES_SUCCESS, GET_REPO_ISSUE_SUCCESS, GET_REPO_ISSUE_ERROR } from "../actionTypes";
import axios from 'axios';
import API_ROUTE from "../../../utils/constants";


const token = '47a0229512f1827ff5768e627d2063e9cae4c55b';
const owner = 'gitx5622';
const repo = 'topratedprofessors';
 
export const getAllIssues = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/issues?filter=all`, 
            {
                headers: {
                  Authorization: 'token ' + token
                }
              });
              console.log(res.data);
            dispatch({type: GET_ISSUES_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: GET_ISSUES_ERROR, payload: err.response.data.error_message})
        }
    }
};

export const getCreatedIssues = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/issues?filter=created`, 
            {
                headers: {
                  Authorization: 'token ' + token
                }
              });
              console.log(res.data);
            dispatch({type: GET_CREATED_ISSUES_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: GET_CREATED_ISSUES_ERROR, payload: err.response.data.error_message})
        }
    }
};

export const getRepoIssues = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/repos/${owner}/${repo}/issues`, 
            {
                headers: {
                  Authorization: 'token ' + token
                }
              });
              console.log(res.data);
            dispatch({type: GET_REPO_ISSUE_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: GET_REPO_ISSUE_ERROR, payload: err.response.data.error_message})
        }
    }
};

// create an issue 
export const createRepoIssue = (credentials) => {
    return async(dispatch) => {
        try {
            const res = await axios.post(`${API_ROUTE}/repos/${owner}/${repo}/issues`, credentials,  
            {
                headers: {
                  Authorization: 'token ' + token
                }
              });
              console.log(res.data);
            dispatch({type: GET_REPO_ISSUE_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: GET_REPO_ISSUE_ERROR, payload: err.response.data.error_message})
        }
    }
};
