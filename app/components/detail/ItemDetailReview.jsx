import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

import style from './style.scss';

class ItemDetailReview extends React.Component {
    constructor(props) {
        super(props);
        this.ratingStars = [...Array(5)]
            .map((_, index) => index < this.props.rating);
    }
    render() {
        const {
            title,
            body,
            author
        } = this.props;
        return (
            <div className={style.itemDetailReview}>
                <h2 className={style.itemDetailReviewTitle}>
                    {title}
                </h2>
                <div className={style.itemDetailReviewByLine}>
                    {author}
                </div>
                <div className={style.itemDetailReviewBody}>
                    <div className={style.itemDetailReviewRating}>
                        {this.ratingStars.map((star, index) => (
                            <span
                                className={cn(style.itemDetailReviewStar, {
                                    [style.itemDetailReviewStarFilled]: star
                                })}
                                key={index}>
                                {!star && '☆'}
                                {star && '★'}
                            </span>
                        ))}
                    </div>
                    <div className={style.itemDetailReviewBodyText}>
                        {body}
                    </div>
                </div>
            </div>
        );
    }
}

ItemDetailReview.propTypes = {
    author: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    rating: PropTypes.number
};

export default ItemDetailReview;
