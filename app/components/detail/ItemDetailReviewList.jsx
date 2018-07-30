import PropTypes from 'prop-types';
import React from 'react';

import ItemDetailReview from './ItemDetailReview.jsx';
import style from './style.scss';

const ItemDetailReviewList = ({reviews}) => (
    <div className={style.itemDetailReviewList}>
        {reviews.map((review, index) => (
            <ItemDetailReview
                title={review.title}
                body={review.body}
                author={review.author}
                rating={review.rating}
                key={index}
            />
        ))}
    </div>
);

ItemDetailReviewList.propTypes = {
    reviews: PropTypes.array
};

export default ItemDetailReviewList;
