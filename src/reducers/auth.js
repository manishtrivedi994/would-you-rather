import {LOGIN_SUCCESS, LOGOUT_SUCCESS} from "../actions/auth";

export default function auth(state = {}, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                authenticated: action.authenticated,
                loggedInUser: action.loggedInUser
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                authenticated: action.authenticated,
                loggedInUser: action.loggedInUser
            };
        default:
            return state;
    }
}