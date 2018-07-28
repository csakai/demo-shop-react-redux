import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

import beautifyCurrency from '../util/beautifyCurrency';
import AddToCart from '../containers/ConnectedAddToCart.jsx';

class ItemDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageIndex: 0
        };
        this.handleImageNext = this.handleImageNext.bind(this);
        this.handleImagePrev = this.handleImagePrev.bind(this);
    }

    componentDidMount() {
        const {
            item,
            match: {
                params: {
                    id
                }
            },
            setDetailId
        } = this.props;
        setDetailId(id);
    }

    componentWillUnmount() {
        const {
            setDetailId
        } = this.props;
        setDetailId('');
    }

    handleImageNext() {
        this.setState((prevState, props) => (
            {
                imageIndex: (prevState.imageIndex + 1) % props.item.images.length
            }
        ));
    }

    handleImagePrev() {
        this.setState((prevState, props) => {
            const imageCount = props.item.images.length;
            const prevIndex = imageCount + prevState.imageIndex - 1;
            return {
                imageIndex: prevIndex % imageCount
            };
        });
    }
    render() {
        const {
            item
        } = this.props;
        const {
            imageIndex
        } = this.state;
        return (
            <div className="item-detail-container">
                <div className="item-detail-col">
                    <h1 className="item-detail-title">
                        {item.title}
                    </h1>
                    <div className="item-detail-image-carousel">
                        <button
                            className="item-detail-image-carousel-prev"
                            onClick={this.handleImagePrev}>
                            &lt;
                        </button>
                        <img src={item.images[imageIndex]} />
                        <button
                            className="item-detail-image-carousel-next"
                            onClick={this.handleImageNext}>
                            &gt;
                        </button>
                    </div>
                    <div className="item-detail-description">
                        {item.description}
                    </div>
                </div>
                <div className="item-detail-col">
                    <div className={cn('item-detail-stock-alert', {
                        'in-stock': item.inStock,
                        'out-of-stock': !item.inStock
                    })}>
                        {item.inStock && "In Stock!"}
                        {!item.inStock && "Out of Stock"}
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
        );
    }
}

ItemDetail.propTypes = {
    item: PropTypes.object
};

export default ItemDetail;
