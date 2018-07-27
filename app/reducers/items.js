import api from '../api';
const ITEMS_REQUEST = 'ITEMS_REQUEST';
const ITEMS_REQUEST_SUCCESS = 'ITEMS_REQUEST_SUCCESS';
const ITEMS_REQUEST_FAILURE = 'ITEMS_REQUEST_FAILURE';

const initialState = {
    data: [],
    error: null,
    loading: false
};

export const getItems = () => {
    return dispatch => {
        dispatch({type: ITEMS_REQUEST});
        api.getItems()
            .then(data => dispatch({
                type: ITEMS_REQUEST_SUCCESS,
                payload: data
            }),
            error => dispatch({
                type: ITEMS_REQUEST_FAILURE,
                error
            }));
    };
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ITEMS_REQUEST:
            return {
                data: [],
                error: null,
                loading: true
            };
        case ITEMS_REQUEST_SUCCESS:
            return {
                data: action.payload,
                error: null,
                loading: false
            };
        case ITEMS_REQUEST_FAILURE:
            return {
                data: [],
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}
