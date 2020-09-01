
export const SET_UNREAD_LOCAL_NOTIFICATION = 'SET_UNREAD_LOCAL_NOTIFICATION';
export const API_RESPONSE = 'API_RESPONSE';
export const CATEGORIES = 'CATEGORIES';
export const LOADING = 'LOADING';

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

action.fetchUnReadLocalNotification = function (data, token) {
    return async function (dispatch) {
        const response = await api.fetchUnReadLocalNotification_(null, token, null, data);
        dispatch({ type: SET_UNREAD_LOCAL_NOTIFICATION, payload: response });
    };
}

action.updateUnReadLcoalNotification = function (data) {
    return async function (dispatch) {
        try {
            dispatch({ type: SET_UNREAD_LOCAL_NOTIFICATION, payload: data });
        } catch (e) {
            console.log('e =>', e);
        }
    };
};


export default action;
