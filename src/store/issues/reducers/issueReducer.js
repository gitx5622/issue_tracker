import { BEFORE_STATE, GET_ISSUES_ERROR, GET_ISSUES_SUCCESS, CREATE_ISSUES_SUCCESS, 
    CREATE_ISSUES_ERROR, GET_CREATED_ISSUES_SUCCESS, GET_CREATED_ISSUES_ERROR, 
    GET_REPO_ISSUE_ERROR, GET_REPO_ISSUE_SUCCESS } from "../actionTypes"

export const initState = {
    issues: [],
    createdIssues: [],
    repoIssues: [],
    repos: {},
    isLoading: false,
    issueError: null,
}


const issueReducer = (state = initState, action) => {
    switch(action.type) {

        // This is the state to set when the button is click and we are waiting for response
        case BEFORE_STATE:
            return {
                ...state,
                issueError: null,
                isLoading: true,
            }
        case GET_ISSUES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                issues: action.payload,
                issueError: null,
            }
        case GET_ISSUES_ERROR:
            return {
                ...state,
                isLoading: false,
                issueError: action.payload,
            }
        case GET_CREATED_ISSUES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                createdIssues: action.payload,
                issueError: null,
            }
        case GET_CREATED_ISSUES_ERROR:
            return {
                ...state,
                isLoading: false,
                issueError: action.payload,
            }
        case GET_REPO_ISSUE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                repoIssues: action.payload,
                issueError: null,
            }
        case GET_REPO_ISSUE_ERROR:
            return {
                ...state,
                isLoading: false,
                issueError: action.payload,
            }
        case CREATE_ISSUES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                issueError: null,
            }
        case CREATE_ISSUES_ERROR:
            return {
                ...state,
                isUpdatingUser: false,
                currentUser: action.payload,
                userError: null,
                authSuccessUser: "Details Updated"
            }
        default:
            return state;
    }
}

export default issueReducer
