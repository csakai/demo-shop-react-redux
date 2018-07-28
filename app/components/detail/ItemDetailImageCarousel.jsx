import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

import style from './style.scss';
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
            <div className={style.itemDetailImageCarousel}>
                <button
                    className={cn(style.itemDetailImageCarouselControl,
                        style.itemDetailImageCarouselPrev)}
                    onClick={this.handleImagePrev}>
                    &lt;
                </button>
                <img src={images[imageIndex]} />
                <button
                    className={cn(style.itemDetailImageCarouselControl,
                        style.itemDetailImageCarouselNext)}
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
