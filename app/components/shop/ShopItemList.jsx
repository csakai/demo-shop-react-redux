import PropTypes from 'prop-types';
import React from 'react';

import ShopItem from './ShopItem.jsx';
import style from './style.scss';

const ShopItemList = ({items}) => (
    <div className="shop-item-list-container">
        <div className={style.shopItemListHeader}>
            <div className={style.shopItemTitle}>
                Product
            </div>
            <div className={style.shopItemPrice}>
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
