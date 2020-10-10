import React from 'react';

// dynamic price goes here
function Price({ adjPrice }) {
  return (
    <div className="price-app">
      <span id="price-app-header">
        {` $${adjPrice} `}
      </span>
      <span id="suffix">/ night</span>
    </div>
  );
}

export default Price;
