import { connect } from 'react-redux';

import { tagSelector } from '../../selectors/routing.selector';
import { initLoadedSelector, loadingSelector as shopLoadingSelector } from '../../selectors/shop.selector';
import { getItems } from '../../reducers/shop';
import ShopPage from '../../components/shop/ShopPage.jsx';

const mapStateToProps = state => ({
    loaded: initLoadedSelector(state),
    loading: shopLoadingSelector(state),
    tag: tagSelector(state)
});

const mapDispatchToProps = dispatch => ({
    loadPage: () => dispatch(getItems())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopPage);
