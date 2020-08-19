import { LOADING, API_RESPONSE, CATEGORIES } from './action';
const initialState = {
    loading: false,
    apiResponse: { flag: false, isError: false, isSuccess: false, message: '' },
    categories: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: action.payload };
        case API_RESPONSE:
            return { ...state, apiResponse: action.payload };
        case CATEGORIES:
            return { ...state, categories: action.payload };
        default:
            return state;
    }
}
