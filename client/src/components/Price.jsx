import React, { useState } from 'react';

// dynamic price goes here
function Price() {
  return (
    <div className="price-app">
      <span id="price-app-header">$190</span>
      <span id="suffix">/night</span>
    </div>
  );
}

export default Price;
