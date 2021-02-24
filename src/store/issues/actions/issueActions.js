import axios from 'axios';
import { API_ROUTE, owner, token } from "../../../utils/constants";
import { history } from "../../../utils/history";
import { GET_ISSUES_ERROR, GET_ISSUES_SUCCESS, GET_CREATED_ISSUES_ERROR, GET_CREATED_ISSUES_SUCCESS, 
         GET_TOPRATED_REPO_ISSUE_SUCCESS, GET_TOPRATED_REPO_ISSUE_ERROR, GET_LIKEE_REPO_ISSUE_SUCCESS, 
         GET_LIKEE_REPO_ISSUE_ERROR, GET_ESHOP_REPO_ISSUE_SUCCESS, GET_ESHOP_REPO_ISSUE_ERROR, 
         GET_ADVANCED_REPO_ISSUE_SUCCESS, GET_ADVANCED_REPO_ISSUE_ERROR, CREATE_TOPRATED_ISSUE_SUCCESS,
         CREATE_TOPRATED_ISSUE_ERROR, CREATE_LIKEE_ISSUE_SUCCESS, CREATE_LIKEE_ISSUE_ERROR, 
         CREATE_ESHOP_ISSUE_SUCCESS, CREATE_ESHOP_ISSUE_ERROR, CREATE_ADVANCED_ISSUE_SUCCESS, 
         CREATE_ADVANCED_ISSUE_ERROR, GET_MENTIONED_ISSUES_SUCCESS,GET_MENTIONED_ISSUES_ERROR, 
         GET_ASSIGNED_ISSUES_SUCCESS, GET_ASSIGNED_ISSUES_ERROR } from "../actionTypes";

 
// get All Repo issues
export const getAllIssues = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/issues?filter=all`, 
            { headers: { Authorization: 'token ' + token}});
            dispatch({type: GET_ISSUES_SUCCESS, payload: res.data})
        }catch (err) {
            console.log(err);
            dispatch({type: GET_ISSUES_ERROR, payload: err.Error})
        }
    }
};

// get All Created Repo issues
export const getCreatedIssues = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/issues?filter=created`, 
            { headers: { Authorization: 'token ' + token }});
            dispatch({type: GET_CREATED_ISSUES_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: GET_CREATED_ISSUES_ERROR, payload: err.Error})
        }
    }
};

// get All Mentioned Repo issues
export const getMentionedIssues = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/issues?filter=mentioned`, 
            { headers: { Authorization: 'token ' + token }});
            dispatch({type: GET_MENTIONED_ISSUES_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: GET_MENTIONED_ISSUES_ERROR, payload: err.Error})
        }
    }
};

// get All Assigned Repo issues
export const getAssignedIssues = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/issues?filter=assigned`, 
            { headers: { Authorization: 'token ' + token }});
            dispatch({type: GET_ASSIGNED_ISSUES_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: GET_ASSIGNED_ISSUES_ERROR, payload: err.Error})
        }
    }
};

// get Toprated Repo issues
export const getTopratedRepoIssues = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/repos/${owner}/topratedprofessors/issues`, 
            { headers: { Authorization: 'token ' + token }});
            dispatch({type: GET_TOPRATED_REPO_ISSUE_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: GET_TOPRATED_REPO_ISSUE_ERROR, payload: err.Error})
        }
    }
};

// get Likee Repo issues
export const getLikeeRepoIssues = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/repos/${owner}/likee_frontend/issues`, 
            { headers: { Authorization: 'token ' + token }});
            dispatch({type: GET_LIKEE_REPO_ISSUE_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: GET_LIKEE_REPO_ISSUE_ERROR, payload: err.Error})
        }
    }
};

// get Eshop Repo issues
export const getEshopRepoIssues = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/repos/${owner}/e-shop_front/issues`, 
            { headers: { Authorization: 'token ' + token }});
            dispatch({type: GET_ESHOP_REPO_ISSUE_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: GET_ESHOP_REPO_ISSUE_ERROR, payload: err.Error})
        }
    }
};

// get Advanced Repo issues
export const getAdvancedRepoIssues = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/repos/${owner}/advanced/issues`, 
            { headers: { Authorization: 'token ' + token }});
            dispatch({type: GET_ADVANCED_REPO_ISSUE_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: GET_ADVANCED_REPO_ISSUE_ERROR, payload: err.Error})
        }
    }
};

// create Toprated Repo issue 
export const createTopratedRepoIssue = (credentials) => {
    return async(dispatch) => {
        try {
            const res = await axios.post(`${API_ROUTE}/repos/${owner}/topratedprofessors/issues`, credentials,  
            { headers: { Authorization: 'token ' + token}});
            dispatch({type: CREATE_TOPRATED_ISSUE_SUCCESS, payload: res.data});
            history.push('/created_issues');
            window.location.reload();
        }catch (err) {
            dispatch({type: CREATE_TOPRATED_ISSUE_ERROR, payload: err.Error})
        }
    }
};

// create Likee Repo issue 
export const createLikeeRepoIssue = (credentials) => {
    return async(dispatch) => {
        try {
            const res = await axios.post(`${API_ROUTE}/repos/${owner}/likee_frontend/issues`, credentials,  
            { headers: { Authorization: 'token ' + token}});
            dispatch({type: CREATE_LIKEE_ISSUE_SUCCESS, payload: res.data});
            history.push('/created_issues');
        }catch (err) {
            dispatch({type: CREATE_LIKEE_ISSUE_ERROR, payload: err.Error})
        }
    }
};

// create eshop Repo issue 
export const createEshopRepoIssue = (credentials) => {
    return async(dispatch) => {
        try {
            const res = await axios.post(`${API_ROUTE}/repos/${owner}/e-shop_front/issues`, credentials,  
            { headers: { Authorization: 'token ' + token }});
            dispatch({type: CREATE_ESHOP_ISSUE_SUCCESS, payload: res.data});
            history.push('/created_issues');
        }catch (err) {
            dispatch({type: CREATE_ESHOP_ISSUE_ERROR, payload: err.Error})
        }
    }
};

// create advanced Repo issue 
export const createAdvancedRepoIssue = (credentials) => {
    return async(dispatch) => {
        try {
            const res = await axios.post(`${API_ROUTE}/repos/${owner}/advanced/issues`, credentials,  
            { headers: { Authorization: 'token ' + token}});
            dispatch({type: CREATE_ADVANCED_ISSUE_SUCCESS, payload: res.data});
            history.push('/created_issues');
        }catch (err) {
            dispatch({type: CREATE_ADVANCED_ISSUE_ERROR, payload: err.Error})
        }
    }
};
