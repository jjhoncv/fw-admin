import * as actionTypes from './actionTypes';
import { serviceToken } from './services';

const tokenRequest = () => ({
    type: actionTypes.FETCH_TOKEN_REQUEST
});

const tokenSuccess = (data) => ({
    type: actionTypes.FETCH_TOKEN_SUCCESS,
    data
});

const tokenFailure = (msgError: string) => ({
    type: actionTypes.FETCH_TOKEN_FAILURE,
    msgError
});

export const getToken = (): Function => {
    return async dispatch => {
        dispatch(tokenRequest());
        try {
            const { data }: any = await serviceToken.get();

            if (data.token) {
                dispatch(tokenSuccess(data.token));
                localStorage.setItem('token', data.token)
                // history.push('/admin/dashboard');
            }

        } catch (e) {
            dispatch(tokenFailure('Error logged in.'));
        }
    }
}

// export const logoutLogin = (): Function => {
//     return async dispatch => {
//         try {
//             dispatch(loginSuccess(false));
//         } catch (e) {
//             dispatch(loginFailure('Error logout.'));
//         }
//     }
// } 