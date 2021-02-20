import { combineReducers } from "redux"
import issueReducer from "../issues/reducers/issueReducer";
import labelReducer from "../labels/reducers/labelReducer";

const reducer = combineReducers({
    Issues: issueReducer,
    Labels: labelReducer,
});

export default reducer
