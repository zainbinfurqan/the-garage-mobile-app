
export const LOADING = 'LOADING';
export const API_RESPONSE = 'API_RESPONSE';


const action = {};

action.loading = function (data) {
    return async function (dispatch) {
        // dispatch({ type: SET_USERDATA, payload: data });
        dispatch({ type: LOADING, payload: data });
    };
};

action.apiresponse = function (data) {
    return async function (dispatch) {
        // dispatch({ type: SET_USERDATA, payload: data });
        dispatch({ type: API_RESPONSE, payload: data });
    };
};


export default action;
