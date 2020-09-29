import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// dynamic price goes here
function Price(props) {
  const [listingData, setListingData] = useState(props);

  useEffect(() => {
    setListingData(props);
  }, [props]);

  return (
    <div className="price-app">
      <span id="price-app-header">
        {` $${listingData.price} `}
      </span>
      <span id="suffix">/ night</span>
    </div>
  );
}

const proptypes = {
  price: PropTypes.any.isRequired,
};

export default Price;
