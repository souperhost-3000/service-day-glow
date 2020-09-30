/* eslint-disable camelcase */
// reviews goes here

import React, { useState } from 'react';

// dynamic reviews goes here
function Reviews({ rating, reviews_count }) {
  return (
    <div className="reviews">
      <img id="star-sym" src="https://ghrsea12-fec.s3-us-west-2.amazonaws.com/sample/star.png" alt="" />
      <span id="stars">
        {`  ${rating}`}
      </span>
      <span id="numReviews">
        {`  (${reviews_count})`}
      </span>
    </div>
  );
}

export default Reviews;
