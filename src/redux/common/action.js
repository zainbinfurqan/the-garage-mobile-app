
export const LOADING = 'LOADING';
export const API_RESPONSE = 'API_RESPONSE';
export const CATEGORIES = 'CATEGORIES';
import api from '../../utils/apis'

const action = {};

action.loading = function (data) {
    return async function (dispatch) {
        dispatch({ type: LOADING, payload: data });
    };
};

action.apiresponse = function (data) {
    return async function (dispatch) {
        dispatch({ type: API_RESPONSE, payload: data });
    };
};

action.fetchCategory = function (data) {
    return async function (dispatch) {
        const response = await api.fetchCategory();
        dispatch({ type: CATEGORIES, payload: response });
    };
};


export default action;
