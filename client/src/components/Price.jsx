import React, { useState } from 'react';
import PropTypes from 'prop-types';

// dynamic price goes here
function Price({ price }) {
  return (
    <div className="price-app">
      <span id="price-app-header">
        $
        {price}
      </span>
      <span id="suffix">/night</span>
    </div>
  );
}

Price.proptypes = {
  price: PropTypes.any.isRequired,
};

export default Price;
