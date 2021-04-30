import { BEFORE_STATE, GET_ISSUES_ERROR, GET_ISSUES_SUCCESS,GET_CREATED_ISSUES_SUCCESS,
    GET_CREATED_ISSUES_ERROR, GET_TOPRATED_REPO_ISSUE_SUCCESS, GET_TOPRATED_REPO_ISSUE_ERROR, 
    GET_LIKEE_REPO_ISSUE_SUCCESS, GET_LIKEE_REPO_ISSUE_ERROR, GET_ESHOP_REPO_ISSUE_SUCCESS, 
    GET_ESHOP_REPO_ISSUE_ERROR, GET_ADVANCED_REPO_ISSUE_SUCCESS, GET_ADVANCED_REPO_ISSUE_ERROR, 
    CREATE_TOPRATED_ISSUE_SUCCESS, CREATE_TOPRATED_ISSUE_ERROR, CREATE_LIKEE_ISSUE_SUCCESS, 
    CREATE_LIKEE_ISSUE_ERROR, CREATE_ESHOP_ISSUE_SUCCESS, CREATE_ESHOP_ISSUE_ERROR, 
    CREATE_ADVANCED_ISSUE_SUCCESS, CREATE_ADVANCED_ISSUE_ERROR, GET_ASSIGNED_ISSUES_SUCCESS, 
    GET_ASSIGNED_ISSUES_ERROR, GET_MENTIONED_ISSUES_SUCCESS, GET_MENTIONED_ISSUES_ERROR } 
    from "../actionTypes"

export const initState = {
    issues: [],
    createdIssues: [],
    assignedIssues: [],
    mentionedIssues: [],
    topratedrepoIssues: [],
    likeerepoIssues: [],
    eshoprepoIssues: [],
    advancedrepoIssues: [],
    repos: {},
    isLoading: false,
    issueError: null,
};

const issueReducer = (state = initState, action) => {
    switch(action.type) {

        // This is the state to set when the button is click and we are waiting for response
        case BEFORE_STATE:
            return {
                ...state,
                issueError: null,
                isLoading: true,
            };
        case GET_ISSUES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                issues: action.payload,
                issueError: null,
            };
        case GET_ISSUES_ERROR:
            return {
                ...state,
                isLoading: false,
                issueError: action.payload
            };
        case GET_CREATED_ISSUES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                createdIssues: action.payload,
                issueError: null,
            };
        case GET_CREATED_ISSUES_ERROR:
            return {
                ...state,
                isLoading: false,
                issueError: action.payload
            };
        case GET_ASSIGNED_ISSUES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                assignedIssues: action.payload,
                issueError: null,
            };
        case GET_ASSIGNED_ISSUES_ERROR:
            return {
                ...state,
                isLoading: false,
                issueError: action.payload,
            };
        case GET_MENTIONED_ISSUES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                mentionedIssues: action.payload,
                issueError: null,
            };
        case GET_MENTIONED_ISSUES_ERROR:
            return {
                ...state,
                isLoading: false,
                issueError: action.payload
            };
        case GET_TOPRATED_REPO_ISSUE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                topratedrepoIssues: action.payload,
                issueError: null,
            };
        case GET_TOPRATED_REPO_ISSUE_ERROR:
            return {
                ...state,
                isLoading: false,
                issueError: action.payload,
            };
        case GET_LIKEE_REPO_ISSUE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                likeerepoIssues: action.payload,
                issueError: null,
            };
        case GET_LIKEE_REPO_ISSUE_ERROR:
            return {
                ...state,
                isLoading: false,
                issueError: action.payload
            };
        case GET_ESHOP_REPO_ISSUE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                eshoprepoIssues: action.payload,
                issueError: null,
            };
        case GET_ESHOP_REPO_ISSUE_ERROR:
            return {
                ...state,
                isLoading: false,
                issueError: action.payload,
            };
        case GET_ADVANCED_REPO_ISSUE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                advancedrepoIssues: action.payload,
                issueError: null,
            };
        case GET_ADVANCED_REPO_ISSUE_ERROR:
            return {
                ...state,
                isLoading: false,
                issueError: action.payload
            };
        case CREATE_TOPRATED_ISSUE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                topratedrepoIssues: [action.payload, ...state.topratedrepoIssues],
                issueError: null,
            };
        case CREATE_TOPRATED_ISSUE_ERROR:
            return {
                ...state,
                isLoading: false,
                issueError: action.payload,
            };
        case CREATE_LIKEE_ISSUE_SUCCESS:
        return {
            ...state,
            isLoading: false,
            likeerepoIssues: [action.payload, ...state.likeerepoIssues],
            issueError: null,
        };
        case CREATE_LIKEE_ISSUE_ERROR:
            return {
                ...state,
                isLoading: false,
                issueError: action.payload,
            };
        case CREATE_ESHOP_ISSUE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                eshoprepoIssues: [action.payload, ...state.eshoprepoIssues],
                issueError: null,
            };
        case CREATE_ESHOP_ISSUE_ERROR:
            return {
                ...state,
                isLoading: false,
                issueError: action.payload,
            };
        case CREATE_ADVANCED_ISSUE_SUCCESS:
        return {
            ...state,
            isLoading: false,
            advancedrepoIssues: [action.payload, ...state.advancedrepoIssues],
            issueError: null,
        };
        case CREATE_ADVANCED_ISSUE_ERROR:
            return {
                ...state,
                isLoading: false,
                issueError: action.payload,
            };
        default:
            return state;
    }
};

export default issueReducer
