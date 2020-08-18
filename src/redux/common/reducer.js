import { LOADING, API_RESPONSE } from './action';
const initialState = {
    loading: false,
    apiResponse: { flag: false, isError: false, isSuccess: false, message: '' }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: action.payload };
        case API_RESPONSE:
            return { ...state, apiResponse: action.payload };
        default:
            return state;
    }
}
