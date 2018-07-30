import { connect } from 'react-redux';
import { filteredItemsSelector as shopItemsSelector } from '../../selectors/shop.selector';

import ShopItemList from '../../components/shop/ShopItemList.jsx';

const mapStateToProps = state => ({
    items: shopItemsSelector(state)
});

export default connect(mapStateToProps)(ShopItemList);
