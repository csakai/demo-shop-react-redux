import { connect } from 'react-redux';
import { addCartItem } from '../reducers/cart';
import AddToCart from '../components/AddToCart.jsx';

const mapDispatchToProps = dispatch => ({
    addToCart: (id, quantity) => dispatch(addCartItem(id, quantity))
});

export default connect(
    null,
    mapDispatchToProps
)(AddToCart);
