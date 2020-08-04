import { FETCH_DATA, CATCH_ERROR, FETCH_SUCCESS } from '../actions';

const initialState = {
    items: [],
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetching: true
            }
        case CATCH_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.payload.data,
                error: ""
            };
        default:
            return state;
    }
}
