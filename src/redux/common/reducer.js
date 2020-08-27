import { LOADING, API_RESPONSE, CATEGORIES, SET_UNREAD_LOCAL_NOTIFICATION } from './action';
const initialState = {
    loading: false,
    apiResponse: { flag: false, isError: false, isSuccess: false, message: '' },
    categories: [],
    unReadLocalNotification: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: action.payload };
        case API_RESPONSE:
            return { ...state, apiResponse: action.payload };
        case CATEGORIES:
            return { ...state, categories: action.payload };
        case SET_UNREAD_LOCAL_NOTIFICATION:
            return { ...state, unReadLocalNotification: action.payload };
        default:
            return state;
    }
}
