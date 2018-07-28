import { connect } from 'react-redux';
import { checkout } from '../reducers/cart';
import Checkout from '../components/cart/Checkout.jsx';

const mapStateToProps = state => ({
    isError: state.cart.error,
    message: state.cart.message
});

const mapDispatchToProps = dispatch => ({
    checkout: () => dispatch(checkout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout);
