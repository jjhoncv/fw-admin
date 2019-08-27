import * as actionTypes from './actionTypes';
import { ModuleHeaderModel } from './../../models/ModuleHeader';

interface State {
  data: ModuleHeaderModel;
  errorMessage: string,
  isFetching: boolean
}

const initialState: State = {
  data: {
    code: null,
    message: '',
    moduleHeader: [{
      id: null,
      name: '',
      icon: '',
      sections: [{
        id: null,
        name: '',
        url: ''
      }]
    }]
  },
  isFetching: false,
  errorMessage: ''
}

const ROOT = '';

export const section = (state: State = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SECTION_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case actionTypes.FETCH_SECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage,
      }
    case actionTypes.FETCH_SECTION_SUCCESS:
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
