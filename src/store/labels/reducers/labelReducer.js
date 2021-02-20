import {message} from 'antd';
import { BEFORE_STATE, CREATE_ADVANCED_LABEL_ERROR, CREATE_ADVANCED_LABEL_SUCCESS, CREATE_ESHOP_LABEL_ERROR, 
    CREATE_ESHOP_LABEL_SUCCESS, CREATE_LIKEE_LABEL_ERROR, CREATE_LIKEE_LABEL_SUCCESS, 
    CREATE_TOPRATED_LABEL_ERROR, CREATE_TOPRATED_LABEL_SUCCESS, GET_ADVANCED_REPO_LABEL_ERROR, 
    GET_ADVANCED_REPO_LABEL_SUCCESS, GET_ESHOP_REPO_LABEL_ERROR, GET_ESHOP_REPO_LABEL_SUCCESS,
    GET_LIKEE_REPO_LABEL_ERROR, GET_LIKEE_REPO_LABEL_SUCCESS, GET_TOPRATED_REPO_LABEL_ERROR,
    GET_TOPRATED_REPO_LABEL_SUCCESS } from "../actionTypes"

export const initState = {
    topratedrepoLabels: [],
    likeerepoLabels: [],
    eshoprepoLabels: [],
    advancedrepoLabels: [],
    isLoading: false,
    labelError: null,
}


const labelReducer = (state = initState, action) => {
    switch(action.type) {

        // This is the state to set when the button is click and we are waiting for response
        case BEFORE_STATE:
            return {
                ...state,
                labelError: null,
                isLoading: true,
            }
        case GET_TOPRATED_REPO_LABEL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                topratedrepoLabels: action.payload,
                labelError: null,
            }
        case GET_TOPRATED_REPO_LABEL_ERROR:
            return {
                ...state,
                isLoading: false,
                labelError: action.payload,
                message: message.error('Toprated labels could not be loaded. Lost connection to the server', 10)
            }
        case GET_LIKEE_REPO_LABEL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                likeerepoLabels: action.payload,
                labelError: null,
            }
        case GET_LIKEE_REPO_LABEL_ERROR:
            return {
                ...state,
                isLoading: false,
                labelError: action.payload,
                message: message.error('Likee labels could not be loaded. Lost connection to the server', 10)
            }
        case GET_ESHOP_REPO_LABEL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                eshoprepoLabels: action.payload,
                labelError: null,
            }
        case GET_ESHOP_REPO_LABEL_ERROR:
            return {
                ...state,
                isLoading: false,
                labelError: action.payload,
                message: message.error('Eshop labels could not be loaded. Lost connection to the server', 10)
            }
        case GET_ADVANCED_REPO_LABEL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                advancedrepoLabels: action.payload,
                labelError: null,
            }
        case GET_ADVANCED_REPO_LABEL_ERROR:
            return {
                ...state,
                isLoading: false,
                labelError: action.payload,
                message: message.error('Advanced labels could not be loaded. Lost connection to the server', 10)
            }  
        case CREATE_TOPRATED_LABEL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                topratedrepoLabels: [action.payload, ...state.topratedrepoLabels],
                labelError: null,
            }
        case CREATE_TOPRATED_LABEL_ERROR:
            return {
                ...state,
                isLoading: false,
                labelError: action.payload,

            }
        case CREATE_LIKEE_LABEL_SUCCESS:
        return {
            ...state,
            isLoading: false,
            likeerepoLabels: [action.payload, ...state.likeerepoLabels],
            labelError: null,
        }
        case CREATE_LIKEE_LABEL_ERROR:
            return {
                ...state,
                isLoading: false,
                labelError: action.payload,
            }
        case CREATE_ESHOP_LABEL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                eshoprepoLabels: [action.payload, ...state.eshoprepoLabels],
                labelError: null,
            }
        case CREATE_ESHOP_LABEL_ERROR:
            return {
                ...state,
                isLoading: false,
                labelError: action.payload,
            }
        case CREATE_ADVANCED_LABEL_SUCCESS:
        return {
            ...state,
            isLoading: false,
            advancedrepoLabels: [action.payload, ...state.advancedrepoLabels],
            labelError: null,
        }
        case CREATE_ADVANCED_LABEL_ERROR:
            return {
                ...state,
                isLoading: false,
                labelError: action.payload,
            }
        default:
            return state;
    }
}

export default labelReducer;
