import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import beautifyCurrency from '../../util/beautifyCurrency';
import ItemDetailImageCarousel from './ItemDetailImageCarousel.jsx';
import AddToCart from '../../containers/add_to_cart/ConnectedAddToCart.jsx';

class ItemDetailPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {
            getItems,
            match: {
                params: {
                    id
                }
            },
            ready,
            setDetailId
        } = this.props;
        setDetailId(id);
        if (!ready) {
            getItems();
        }
    }

    componentWillUnmount() {
        const {
            setDetailId
        } = this.props;
        setDetailId('');
    }

    render() {
        const {
            item,
            ready
        } = this.props;
        return (
            <div>
                {!ready && (
                    <div className="loading-screen">
                        Loading...
                    </div>
                )}
                {ready && (
                    <div className="item-detail-container">
                        <div className="item-detail-col">
                            <h1 className="item-detail-title">
                                {item.title}
                            </h1>
                            <ItemDetailImageCarousel images={item.images} />
                            <div className="item-detail-description">
                                {item.description}
                            </div>
                        </div>
                        <div className="item-detail-col">
                            <div className={cn('item-detail-stock-alert', {
                                'in-stock': item.inStock,
                                'out-of-stock': !item.inStock
                            })}>
                                {item.inStock && 'In Stock!'}
                                {!item.inStock && 'Out of Stock'}
                            </div>
                            <div className="item-detail-price">
                                {beautifyCurrency(item.price)}
                            </div>
                            <AddToCart
                                id={item.id}
                                inStock={item.inStock}
                            />
                        </div>
                    </div>
                )}
                <Link to="/">
                    See all items
                </Link>
            </div>
        );
    }
}

ItemDetailPage.propTypes = {
    getItems: PropTypes.func,
    item: PropTypes.object,
    match: PropTypes.object,
    ready: PropTypes.bool,
    setDetailId: PropTypes.func
};

export default ItemDetailPage;
