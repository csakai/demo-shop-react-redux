import api from '../api';
const ITEMS_REQUEST = 'ITEMS_REQUEST';
const ITEMS_REQUEST_SUCCESS = 'ITEMS_REQUEST_SUCCESS';
const ITEMS_REQUEST_FAILURE = 'ITEMS_REQUEST_FAILURE';

const SHOP_SET_DETAIL_ID = 'SHOP_SET_DETAIL_ID';

const initialState = {
    items: [],
    detailId: '',
    error: null,
    loaded: false,
    loading: false
};

export const setDetailId = id => ({
    type: SHOP_SET_DETAIL_ID,
    payload: {
        id
    }
});

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
        case SHOP_SET_DETAIL_ID:
            return {
                ...state,
                detailId: action.payload.id
            };
        case ITEMS_REQUEST:
            return {
                ...state,
                items: [],
                error: null,
                loading: true
            };
        case ITEMS_REQUEST_SUCCESS:
            return {
                ...state,
                items: action.payload,
                error: null,
                loaded: true,
                loading: false
            };
        case ITEMS_REQUEST_FAILURE:
            return {
                ...state,
                items: [],
                error: action.error,
                loading: false
            };
        default:
            return {
                ...state
            };
    }
}
