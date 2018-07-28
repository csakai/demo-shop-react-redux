import { connect } from 'react-redux';
import { cartItemsWithDetailsSelector } from '../../selectors/cart.selector';

import CartItemList from '../../components/cart/CartItemList.jsx';

const mapStateToProps = state => ({
    items: cartItemsWithDetailsSelector(state),
});

export default connect(mapStateToProps)(CartItemList);
