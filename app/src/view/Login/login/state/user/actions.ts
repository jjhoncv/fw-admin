import * as actionTypes from './actionTypes';
import { serviceUser } from './services';
import { STATUS_CODE } from './constants';

const fetchLoginRequest = () => ({
  type: actionTypes.FETCH_LOGIN_REQUEST
});

const fetchLoginFailure = (msgError: string) => ({
  type: actionTypes.FETCH_LOGIN_FAILURE,
  msgError
});

const fetchLoginSuccess = (data) => ({
  type: actionTypes.FETCH_LOGIN_SUCCESS,
  data
});


export const fetchLogin = (values, history): Function => {
  return async dispatch => {
    dispatch(fetchLoginRequest());
    try {

      const data = await serviceUser.login(values);

      if (data.code === STATUS_CODE.OK) {
        dispatch(fetchLoginSuccess(data));
        sessionStorage.setItem('token', data.user.token);
        history.push('/admin/dashboard');
      }

      if (data.code === STATUS_CODE.ERROR) {
        dispatch(fetchLoginFailure(data.message));
      }
      if (data.code === STATUS_CODE.INTERNAL_ERROR) {
        dispatch(fetchLoginFailure(data.message));
      }

    } catch (e) {
      dispatch(fetchLoginFailure('Conexión Fallida'));
    }
  }
}

// export const logoutLogin = (): Function => {
//     return async dispatch => {
//         try {
//             dispatch(fetchLoginSuccess(false));
//         } catch (e) {
//             dispatch(fetchLoginFailure('Error logout.'));
//         }
//     }
// } 