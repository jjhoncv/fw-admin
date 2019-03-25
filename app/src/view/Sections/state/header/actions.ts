import * as actionTypes from './actionTypes';
import { serviceSectionsHeader } from './services';
import { FormatModuleHeader } from './hydrators';
import { ModuleHeader } from './../../models/ModuleHeader';

const fetchSectionsHeaderRequest = () => ({
    type: actionTypes.FETCH_SECTION_HEADER_REQUEST
});

const fetchSectionsHeaderSuccess = (data: ModuleHeader[]) => ({
    type: actionTypes.FETCH_SECTION_HEADER_SUCCESS,
    data
});

const fetchSectionsHeaderFailure = (msgError: string) => ({
    type: actionTypes.FETCH_SECTION_HEADER_FAILURE,
    msgError
});

export const fetchSectionsHeader = (): Function => {
    return async dispatch => {
        dispatch(fetchSectionsHeaderRequest());
        try {
            const { data }: any = await serviceSectionsHeader.get();
            let adapted = data.map((section: ModuleHeader) => FormatModuleHeader(section))
            dispatch(fetchSectionsHeaderSuccess(adapted))
        } catch (e) {
            dispatch(fetchSectionsHeaderFailure('Error get sections header.'));
        }
    }
}