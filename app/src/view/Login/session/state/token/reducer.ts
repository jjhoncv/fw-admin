import * as actionTypes from './actionTypes';

interface State {
    token: string;
    isFetching: boolean;
    error: boolean;
}

const initialState: State = {
    token: '',
    isFetching: false,
    error: false
}

const ROOT = '';

export const token = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TOKEN_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case actionTypes.FETCH_TOKEN_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.data
            }
        case actionTypes.FETCH_TOKEN_SUCCESS:
            return {
                isFetching: false,
                error: false,
                logged: action.data
            }
        default:
            return state;
    }
}
