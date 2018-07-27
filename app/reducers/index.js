import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import cart from './cart';
import items from './items';

const rootReducer = combineReducers({
    cart,
    items,
    routing
});

export default rootReducer;
