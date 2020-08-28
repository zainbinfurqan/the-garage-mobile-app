
export const SET_INFO_NOTIFICATION = 'SET_INFO_NOTIFICATION';
export const SET_WANT_TO_IN_QUEUE = 'SET_WANT_TO_IN_QUEUE';
export const ADD_FAVOURITE_DOCTOR = 'ADD_FAVOURITE_DOCTOR';
export const UPDATE_PROFILE_URL = 'UPDATE_PROFILE_URL';
export const UPDATE_USERDATA = 'UPDATE_USERDATA';
export const SET_API_ERROR = 'SET_API_ERROR';
export const SET_USERDATA = 'SET_USERDATA';
export const LOGOUT = 'LOGOUT';

const action = {};

action.saveUserData = function (data) {
    console.log("Data=>", data)
    return async function (dispatch) {
        // dispatch({ type: SET_USERDATA, payload: data });
        dispatch({ type: SET_USERDATA, payload: data });
    };
};

action.logout = function (data) {
    return async function (dispatch) {
        // dispatch({ type: SET_USERDATA, payload: data });
        dispatch({ type: LOGOUT, payload: data });
    };
};
// action.updateUserData = function (data) {
//   return async function (dispatch) {
//     dispatch({ type: UPDATE_USERDATA, payload: data });
//   };
// };

// action.logoutUser = function (params) {
//   return async function (dispatch) {
//     const response = await api.logout(null, null, params);
//     dispatch({ type: LOGOUT, payload: { data: {} } });
//     // console.log('zain ahmed')
//   };
// };

// action.apiResponse = function (error, flag) {
//   let errorResponse = { isError: true, errorMessage: error, flag: flag };
//   return async function (dispatch) {
//     dispatch({ type: SET_API_ERROR, payload: errorResponse });
//   };
// };

// action.apiErrorClose = function () {
//   return async function (dispatch) {
//     dispatch({
//       type: SET_API_ERROR,
//       payload: { isError: false, errorMessage: '' },
//     });
//   };
// };

// action.infoNotificationClose = function () {
//   return async function (dispatch) {
//     dispatch({
//       type: SET_INFO_NOTIFICATION,
//       payload: { isActive: false, message: '' },
//     });
//   };
// };

// action.wantToInQueue = function () {
//   return async function (dispatch) {
//     dispatch({
//       type: SET_WANT_TO_IN_QUEUE,
//       payload: true,
//     });
//   };
// };

// action.infoNotificationOpen = function (message) {
//   let infoMessage = { isActive: true, message };
//   return async function (dispatch) {
//     dispatch({
//       type: SET_INFO_NOTIFICATION,
//       payload: infoMessage,
//     });
//   };
// };

// //---- favourite-----//
// action.addFavouriteDoctor = function (data, id) {
//   return async function (dispatch) {
//     let body = {
//       patientId: id,
//       favouriteIds: data,
//     };
//     let response = await api.createDocFavrList(body);
//     dispatch({
//       type: ADD_FAVOURITE_DOCTOR,
//       payload: { data: data },
//     });
//   };
// };

// action.fetchFavouriteDoctor = async function (data) {
//   try {
//     const response = await api.fetchFavouriteDoctor(data);
//     return async function (dispatch) {
//       dispatch({
//         type: ADD_FAVOURITE_DOCTOR,
//         payload: { data: response[0].data },
//       });
//     };
//   } catch (error) { }
// };

// action.updateProfileUrl = function (data) {
//   try {
//     return async function (dispatch) {
//       dispatch({
//         type: UPDATE_PROFILE_URL,
//         payload: data,
//       });
//     };
//   } catch (error) { }
// };

export default action;
