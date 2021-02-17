import axios from 'axios';
import { history } from '../../../utils/history';
import { BEFORE_STATE, LOGIN_SUCCESS, LOGIN_ERROR } from "../actionTypes/index";
import queryString from 'query-string';


export const SignIn = (props) => {
    return async dispatch => {
        dispatch({type: BEFORE_STATE});
        try {
            history.push(`https://github.com/login/oauth/authorize?client_id=69e165413c11b10cd90f`);
            const value=queryString.parse(props.location.search);
            console.log(value);
            const code=value.code;
            console.log('code',code)// code
            const res = await axios.post(`https://github.com/login/oauth/access_token?client_id=69e165413c11b10cd90f&client_secret=f3a239632ad3d8156d82317ba3d4c440890cbc15`);
            console.log(res);
            dispatch({type: LOGIN_SUCCESS, payload: res});
        }catch (err) {
            console.log(err.response);
            dispatch({type:LOGIN_ERROR, payload:  err.response.data.error_message})
        }
    }
};

export const SignOut = () => {
    window.localStorage.clear(); //update the localstorage
    window.location.reload(true);
};
