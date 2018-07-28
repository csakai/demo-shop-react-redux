import { connect } from 'react-redux';

import { hasItemsSelector } from '../selectors/cart.selector';
import CartPage from '../components/cart/CartPage.jsx';

const mapStateToProps = state => ({
    hasItems: hasItemsSelector(state)
});

export default connect(mapStateToProps)(CartPage);
