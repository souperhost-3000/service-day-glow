// reviews goes here

import React, { useState } from 'react';

// dynamic reviews goes here
function Reviews({ reviews }) {
  return (
    <div className="reviews">
      <img id="star-sym" src="https://ghrsea12-fec.s3-us-west-2.amazonaws.com/sample/star.png" />
      <span id="stars"> 4.87</span>
      <span id="numReviews"> (86)</span>
    </div>
  );
}

export default Reviews;
