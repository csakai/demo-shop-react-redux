import api from '../api';

const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST';
const CHECKOUT_REQUEST_SUCCESS = 'CHECKOUT_REQUEST_SUCCESS';
const CHECKOUT_REQUEST_FAILURE = 'CHECKOUT_REQUEST_FAILURE';

const CART_ADD_ITEM = 'CART_ADD_ITEM';
const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
const CART_UPDATE_ITEM_QUANTITY = 'CART_UPDATE_ITEM_QUANTITY';

const initialState = {
    items: [],
    error: false,
    message: '',
    loading: false
};

export const addCartItem = (id, quantity) => ({
    type: CART_ADD_ITEM,
    payload: {
        id,
        quantity
    }
});

export const removeCartItem = id => ({
    type: CART_REMOVE_ITEM,
    payload: {
        id
    }
});

export const updateCartItemQuantity = (id, quantity) => ({
    type: CART_UPDATE_ITEM_QUANTITY,
    payload: {
        id,
        quantity
    }
});

export const checkout = () => {
    return (dispatch, getState) => {
        dispatch({type: CHECKOUT_REQUEST});
        api.checkout(getState().cart.items)
            .then(data => dispatch({
                type: CHECKOUT_REQUEST_SUCCESS,
                payload: data
            }),
            error => dispatch({
                type: CHECKOUT_REQUEST_FAILURE,
                error
            }));
    };
};

const _getItemIndex = (state, itemId) => {
    return state.items.findIndex(({id}) => id === itemId);
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case CHECKOUT_REQUEST:
            return {
                ...state,
                error: false,
                message: 'Processing...',
                loading: true
            };
        case CHECKOUT_REQUEST_SUCCESS:
            return {
                ...state,
                error: false,
                message: action.payload.message,
                loading: false
            };
        case CHECKOUT_REQUEST_FAILURE:
            return {
                ...state,
                error: true,
                message: action.error.error,
                loading: false
            };
        case CART_ADD_ITEM: {
            const newItem = {
                ...action.payload
            };
            const itemIndex = _getItemIndex(state, newItem.id);
            let newItems;
            if (itemIndex > -1) {
                const newQuantity = state.items[itemIndex].quantity + newItem.quantity;
                newItems = state.items.slice(0, itemIndex)
                    .concat({
                        ...newItem,
                        quantity: newQuantity
                    })
                    .concat(state.items.slice(itemIndex + 1));
            } else {
                newItems = state.items.concat(newItem);
            }
            return {
                ...state,
                items: newItems
            };
        }
        case CART_REMOVE_ITEM: {
            const itemIndex = _getItemIndex(state, action.payload.id);
            let newItems;
            if (itemIndex > -1) {
                newItems = state.items.slice(0, itemIndex)
                    .concat(state.items.slice(itemIndex + 1));
            } else {
                newItems = [...state.items];
            }
            return {
                ...state,
                items: newItems
            };
        }
        case CART_UPDATE_ITEM_QUANTITY: {
            const itemIndex = _getItemIndex(state, action.payload.id);
            let newItems;
            if (itemIndex > -1) {
                const newItem = {
                    ...action.payload
                };
                newItems = state.items.slice(0, itemIndex)
                    .concat(newItem)
                    .concat(state.items.slice(itemIndex + 1));
            } else {
                newItems = [...state.items];
            }
            return {
                ...state,
                items: newItems
            };
        }
        default:
            return state;
    }
}
