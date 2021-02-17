import { combineReducers } from "redux"
import authReducer from "../auth/reducers/authReducer";
import issueReducer from "../issues/reducers/issueReducer";

const reducer = combineReducers({
    Auth: authReducer,
    Issues: issueReducer,
});

export default reducer
