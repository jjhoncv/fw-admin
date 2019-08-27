import * as actionTypes from './actionTypes';
import { serviceSection } from './services';
import { STATUS_CODE } from './constants';

const fetchSectionRequest = () => ({
  type: actionTypes.FETCH_SECTION_REQUEST
});

const fetchSectionSuccess = (data) => ({
  type: actionTypes.FETCH_SECTION_SUCCESS,
  data
});

const fetchSectionFailure = (msgError: string) => ({
  type: actionTypes.FETCH_SECTION_FAILURE,
  msgError
});

export const fetchSection = (): Function => {
  return async dispatch => {
    dispatch(fetchSectionRequest());
    try {

      const data = await serviceSection.all();
      
      if (data.code === STATUS_CODE.OK) {
        dispatch(fetchSectionSuccess(data))
      }

      if (data.code === STATUS_CODE.ERROR) {
        dispatch(fetchSectionFailure(data.message));
      }
      if (data.code === STATUS_CODE.INTERNAL_ERROR) {
        dispatch(fetchSectionFailure(data.message));
      }

    } catch (e) {
      dispatch(fetchSectionFailure('Error get sections header.'));
    }
  }
}