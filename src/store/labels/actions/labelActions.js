import axios from 'axios';
import { API_ROUTE, owner, token } from "../../../utils/constants";
import { history } from "../../../utils/history";
import { CREATE_ADVANCED_LABEL_ERROR, CREATE_ADVANCED_LABEL_SUCCESS, CREATE_ESHOP_LABEL_ERROR, 
    CREATE_ESHOP_LABEL_SUCCESS, CREATE_LIKEE_LABEL_ERROR, CREATE_LIKEE_LABEL_SUCCESS, 
    CREATE_TOPRATED_LABEL_ERROR, CREATE_TOPRATED_LABEL_SUCCESS, GET_ADVANCED_REPO_LABEL_ERROR, 
    GET_ADVANCED_REPO_LABEL_SUCCESS, GET_ESHOP_REPO_LABEL_ERROR, GET_ESHOP_REPO_LABEL_SUCCESS, 
    GET_LIKEE_REPO_LABEL_ERROR, GET_LIKEE_REPO_LABEL_SUCCESS, GET_TOPRATED_REPO_LABEL_ERROR, 
    GET_TOPRATED_REPO_LABEL_SUCCESS } from '../actionTypes';


// get Toprated Repo issues
export const getTopratedRepoLabels = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/repos/${owner}/topratedprofessors/labels`, 
            { headers: { Authorization: 'token ' + token }});
            dispatch({type: GET_TOPRATED_REPO_LABEL_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: GET_TOPRATED_REPO_LABEL_ERROR, payload: err.Error})
        }
    }
};

// get Likee Repo issues
export const getLikeeRepoLabels = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/repos/${owner}/likee_frontend/labels`, 
            { headers: { Authorization: 'token ' + token }});
            dispatch({type: GET_LIKEE_REPO_LABEL_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: GET_LIKEE_REPO_LABEL_ERROR, payload: err.Error})
        }
    }
};

// get Eshop Repo issues
export const getEshopRepoLabels = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/repos/${owner}/e-shop_front/labels`, 
            { headers: { Authorization: 'token ' + token }});
            console.log(res);
            dispatch({type: GET_ESHOP_REPO_LABEL_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: GET_ESHOP_REPO_LABEL_ERROR, payload: err.Error})
        }
    }
};

// get Advanced Repo issues
export const getAdvancedRepoLabels = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/repos/${owner}/advanced/labels`, 
            { headers: { Authorization: 'token ' + token }});
            dispatch({type: GET_ADVANCED_REPO_LABEL_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: GET_ADVANCED_REPO_LABEL_ERROR, payload: err.Error})
        }
    }
};

// create Toprated Repo issue 
export const createTopratedRepoLabel = (credentials) => {
    return async(dispatch) => {
        try {
            const res = await axios.post(`${API_ROUTE}/repos/${owner}/topratedprofessors/labels`, credentials,  
            { headers: { Authorization: 'token ' + token}});
            dispatch({type: CREATE_TOPRATED_LABEL_SUCCESS, payload: res.data});
            history.push('/toprated_repo_issues');
        }catch (err) {
            dispatch({type: CREATE_TOPRATED_LABEL_ERROR, payload: err.Error})
        }
    }
};

// create Likee Repo issue 
export const createLikeeRepoLabel = (credentials) => {
    return async(dispatch) => {
        try {
            const res = await axios.post(`${API_ROUTE}/repos/${owner}/likee_frontend/labels`, credentials,  
            { headers: { Authorization: 'token ' + token}});
            dispatch({type: CREATE_LIKEE_LABEL_SUCCESS, payload: res.data});
            history.push('/created_issues');
        }catch (err) {
            dispatch({type: CREATE_LIKEE_LABEL_ERROR, payload: err.Error})
        }
    }
};

// create eshop Repo issue 
export const createEshopRepoLabel = (credentials) => {
    return async(dispatch) => {
        try {
            const res = await axios.post(`${API_ROUTE}/repos/${owner}/e-shop_front/labels`, credentials,  
            { headers: { Authorization: 'token ' + token }});
            dispatch({type: CREATE_ESHOP_LABEL_SUCCESS, payload: res.data});
            history.push('/created_issues');
        }catch (err) {
            dispatch({type: CREATE_ESHOP_LABEL_ERROR, payload: err.Error})
        }
    }
};

// create advanced Repo issue 
export const createAdvancedRepoLabel = (credentials) => {
    return async(dispatch) => {
        try {
            const res = await axios.post(`${API_ROUTE}/repos/${owner}/advanced/labels`, credentials,  
            { headers: { Authorization: 'token ' + token}});
            dispatch({type: CREATE_ADVANCED_LABEL_SUCCESS, payload: res.data});
            history.push('/created_issues');
        }catch (err) {
            dispatch({type: CREATE_ADVANCED_LABEL_ERROR, payload: err.Error})
        }
    }
};
