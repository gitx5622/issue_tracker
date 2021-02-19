import { combineReducers } from "redux"
import issueReducer from "../issues/reducers/issueReducer";

const reducer = combineReducers({
    Issues: issueReducer,
});

export default reducer
