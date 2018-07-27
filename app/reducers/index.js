import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import cart from './cart';
import shop from './shop';

const rootReducer = combineReducers({
    cart,
    shop,
    routing
});

export default rootReducer;
