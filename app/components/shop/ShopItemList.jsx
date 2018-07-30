import PropTypes from 'prop-types';
import React from 'react';

import ShopItem from './ShopItem.jsx';
import style from './style.scss';

const ShopItemList = ({items}) => (
    <div className={style.shopItemListContainer}>
        <div className={style.shopItemGrid}>
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
