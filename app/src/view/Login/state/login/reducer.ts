import * as actionTypes from './actionTypes';

interface State {
    logged: boolean;
    isFetching: boolean;
    error: boolean;
}

const initialState: State = {
    logged: false,
    isFetching: false,
    error: false
}

const ROOT = '';

export const login = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case actionTypes.FETCH_LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.data
            }
        case actionTypes.FETCH_LOGIN_SUCCESS:
            return {
                isFetching: false,
                error: false,
                logged: action.data
            }
        default:
            return state;
    }
}
