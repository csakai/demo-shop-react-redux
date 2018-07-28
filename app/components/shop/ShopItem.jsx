import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import beautifyCurrency from '../../util/beautifyCurrency';
import AddToCart from '../../containers/add_to_cart/ConnectedAddToCart.jsx';

const ShopItem = ({item}) => (
    <div className="shop-item-container">
        <div className="shop-item-title-with-thumbnail">
            <Link to={`/detail/${item.id}`}>
                <img
                    src={item.thumbnail}
                    height="100"
                    width="100"
                    alt={`Thumbnail image for ${item.title}`}
                />
                <div className="shop-item-title">
                    {item.title}
                </div>
            </Link>
        </div>
        <div className="shop-item-price">
            {beautifyCurrency(item.price)}
        </div>
        <AddToCart
            id={item.id}
            inStock={item.inStock}
        />
    </div>
);

ShopItem.propTypes = {
    item: PropTypes.object
};

export default ShopItem;
