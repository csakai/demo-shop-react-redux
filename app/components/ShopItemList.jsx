import PropTypes from 'prop-types';

import ShopItem from './ShopItem.jsx';

const ShopItemList = ({items}) => (
    <div className="shop-item-list-container">
        <div className="shop-item-list-header">
            <div className="shop-item-title">
                Product
            </div>
            <div className="shop-item-price">
                Price
            </div>
        </div>
        <div className="shop-item-list">
            {items.map(
                item => (
                    <ShopItem
                        item={item}
                        key={item.id}
                    />
                )
            )}
        </div>
    </div>
);

ShopItemList.propTypes = {
    items: PropTypes.array
};

export default ShopItemList;
