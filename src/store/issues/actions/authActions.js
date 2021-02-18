import { GET_ISSUES_ERROR, GET_ISSUES_SUCCESS, CREATE_ISSUES_ERROR, CREATE_ISSUES_SUCCESS } from "../actionTypes";

export const getIssues = (repo) => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/issues`);
            dispatch({type: GET_ISSUES_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: GET_ISSUES_ERROR, payload: err.response.data.error_message})
        }
    }
};

export const createIssues = (credentials) => {
    return async(dispatch) => {
        try {
            const res = await axios.post(`${API_ROUTE}/gitx5622/${repo}/issues`, credentials);
            dispatch({type: CREATE_ISSUES_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: CREATE_ISSUES_ERROR, payload: err.response.data.error_message})
        }
    }
};

export const getRepoDetails = (credentials) => {
    return async(dispatch) => {
        try {
            const res = await axios.post(`${API_ROUTE}/gitx5622/${repo}`, credentials);
            dispatch({type: CREATE_ISSUES_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: CREATE_ISSUES_ERROR, payload: err.response.data.error_message})
        }
    }
};


