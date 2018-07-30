import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import beautifyCurrency from '../../util/beautifyCurrency';
import ItemDetailImageCarousel from './ItemDetailImageCarousel.jsx';
import ItemDetailReviewList from './ItemDetailReviewList.jsx';
import AddToCart from '../../containers/add_to_cart/ConnectedAddToCart.jsx';
import style from './style.scss';

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
                    <div className={style.itemDetailContainer}>
                        <div className={style.itemDetailRow}>
                            <div className={style.itemDetailCol}>
                                <h1 className={style.itemDetailTitle}>
                                    {item.title}
                                </h1>
                                <ItemDetailImageCarousel images={item.images} />
                                <div className="item-detail-description">
                                    {item.description}
                                </div>
                            </div>
                            <div className={style.itemDetailCol}>
                                <div className={cn(style.itemDetailStockAlert, {
                                    [style.inStock]: item.inStock,
                                    [style.outOfStock]: !item.inStock
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
                        <div className={style.itemDetailRow}>
                            <div className={style.itemDetailCol}>
                                <ItemDetailReviewList
                                    reviews={item.reviews}
                                />
                            </div>
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
