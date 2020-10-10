/* eslint-disable camelcase */

import React from 'react';

// dynamic reviews goes here
function Reviews({ rating, reviews_count }) {
  return (
    <div className="reviews">
      <img id="star-sym" src="https://ghrsea12-fec.s3-us-west-2.amazonaws.com/sample/star.png" alt="" />
      <span className="rating-scored" id="stars">
        {`  ${rating}`}
      </span>
      <span className="reviewsCount" id="numReviews">
        {`  (${reviews_count})`}
      </span>
    </div>
  );
}

export default Reviews;
