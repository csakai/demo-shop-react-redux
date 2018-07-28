import PropTypes from 'prop-types';
import React from 'react';

class ItemDetailImageCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageIndex: 0
        };
        this.handleImageNext = this.handleImageNext.bind(this);
        this.handleImagePrev = this.handleImagePrev.bind(this);
    }

    handleImageNext() {
        this.setState((prevState, { images }) => (
            {
                imageIndex: (prevState.imageIndex + 1) % images.length
            }
        ));
    }

    handleImagePrev() {
        this.setState((prevState, { images }) => {
            const imageCount = images.length;
            const prevIndex = imageCount + prevState.imageIndex - 1;
            return {
                imageIndex: prevIndex % imageCount
            };
        });
    }
    render() {
        const {
            images
        } = this.props;
        const {
            imageIndex
        } = this.state;
        return (
            <div className="item-detail-image-carousel">
                <button
                    className="item-detail-image-carousel-prev"
                    onClick={this.handleImagePrev}>
                    &lt;
                </button>
                <img src={images[imageIndex]} />
                <button
                    className="item-detail-image-carousel-next"
                    onClick={this.handleImageNext}>
                    &gt;
                </button>
            </div>
        );
    }
}

ItemDetailImageCarousel.propTypes = {
    images: PropTypes.array
};

export default ItemDetailImageCarousel;
