import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

import style from './style.scss';

class ItemDetailReview extends React.Component {
    constructor(props) {
        super(props);
        const ratingStars = [];
        for (let star = 0; star < props.rating; star++) {
            ratingStars.push(true);
        }
        for (let noStar = 0; noStar < (5 - props.rating); noStar++) {
            ratingStars.push(false);
        }
        this.ratingStars = ratingStars;
    }
    render() {
        const {
            title,
            body,
            author
        } = this.props;
        return (
            <div className={style.itemDetailReview}>
                <h1 className={style.itemDetailReviewTitle}>
                    {title}
                </h1>
                <div className={style.itemDetailReviewByLine}>
                    {author}
                </div>
                <div className={style.itemDetailReviewRating}>
                    {this.ratingStars.map((star, index) => (
                        <div
                            className={cn(style.itemDetailReviewStar, {
                                [style.itemDetailReviewStarFilled]: star
                            })}
                            key={index}>
                        </div>
                    ))}
                </div>
                <div className={style.itemDetailReviewBody}>
                    {body}
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
