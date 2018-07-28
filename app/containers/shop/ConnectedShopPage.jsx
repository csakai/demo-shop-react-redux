import { connect } from 'react-redux';

import { loadingSelector as shopLoadingSelector } from '../selectors/shop.selector';
import { getItems } from '../reducers/shop';
import ShopPage from '../components/shop/ShopPage.jsx';

const mapStateToProps = state => ({
    loading: shopLoadingSelector(state)
});

const mapDispatchToProps = dispatch => ({
    loadPage: () => dispatch(getItems())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopPage);
