import { connect } from 'react-redux';

import { readySelector, detailItemSelector } from '../selectors/shop.selector';
import { getItems, setDetailId } from '../reducers/shop';
import ItemDetailPage from '../components/detail/ItemDetailPage.jsx';

const mapStateToProps = state => ({
    ready: readySelector(state),
    item: detailItemSelector(state)
});

const mapDispatchToProps = dispatch => ({
    getItems: () => dispatch(getItems()),
    setDetailId: id => dispatch(setDetailId(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemDetailPage);
