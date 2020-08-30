import { SET_USERDATA, UPDATE_USERDATA, SET_API_ERROR, LOGOUT, SET_WANT_TO_IN_QUEUE, UPDATE_PROFILE_URL, ADD_FAVOURITE_DOCTOR, SET_INFO_NOTIFICATION } from './action';
const initialState = {
    userData: null,
    isLogin: false,
    apiResponseError: { isError: false, errorMessage: '', flag: '' },
    infoNofitication: { isActive: false, message: '', },
};

export default function (state = initialState, action) {
    console.log("action.payload=>", action.payload)
    switch (action.type) {
        case SET_USERDATA:
            // return { ...state, userData: action.payload.data, isLogin: true };
            return { ...state, userData: action.payload, isLogin: true };
        case SET_API_ERROR:
            return { ...state, apiResponseError: action.payload };
        case SET_INFO_NOTIFICATION:
            return { ...state, infoNofitication: action.payload };
        case ADD_FAVOURITE_DOCTOR:
            return { ...state, favourite: action.payload.data };
        case SET_WANT_TO_IN_QUEUE:
            return { ...state, wantToInQueue: action.payload };
        case UPDATE_PROFILE_URL:
            return { ...state, userData: action.payload };
        case UPDATE_USERDATA:
            return { ...state, userData: action.payload };
        case LOGOUT:
            return { ...state, userData: null, isLogin: false };
        default:
            return state;
    }
}
