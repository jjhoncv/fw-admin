import * as actionTypes from './actionTypes';
import { UserModel } from './../../models/User';

interface State {
  data: UserModel,
  errorMessage: string,
  isFetching: boolean
};

const initialState: State = {
  data: {
    code: null,
    message: '',
    user: {
      id: null,
      name: '',
      surname: '',
      mail: '',
      photo: '',
      login: '',
      password: '',
      token: ''
    }
  },
  errorMessage: '',
  isFetching: false
};

const ROOT = '';

export const user = (state: State = initialState, action) => {
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
        errorMessage: action.errorMessage,
      }
    case actionTypes.FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        data: action.data,
        isFetching: false
      }
    default:
      return state;
  }
}
