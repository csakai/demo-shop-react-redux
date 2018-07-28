import { connect } from 'react-redux';
import {
    cartItemsSubtotalDisplaySelector,
    cartItemsTaxDisplaySelector,
    cartItemsShippingDisplaySelector,
    cartItemsTotalDisplaySelector
} from '../selectors/cart.selector';

import CartDetails from '../components/cart/CartDetails.jsx';

const mapStateToProps = state => ({
    subtotal: cartItemsSubtotalDisplaySelector(state),
    tax: cartItemsTaxDisplaySelector(state),
    shipping: cartItemsShippingDisplaySelector(),
    total: cartItemsTotalDisplaySelector(state)
});

export default connect(mapStateToProps)(CartDetails);
