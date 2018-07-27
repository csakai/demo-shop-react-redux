import { connect } from 'react-redux';
import { itemsSelector as shopItemsSelector } from '../selectors/shop.selector';

import ShopItemList from '../components/ShopItemList.jsx';

const mapStateToProps = state => ({
    items: shopItemsSelector(state)
});

export default connect(mapStateToProps)(ShopItemList);
