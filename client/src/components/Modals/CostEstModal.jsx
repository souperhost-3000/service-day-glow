import React from 'react';

// Cost Estimate modal (conditional app major expansion logic)
function CostEstModal({ showCostEst }) {
  if (!showCostEst) {
    return null;
  }

  return (
    <div className="cost-estimator">
      <div className="cost-left">
        <div className="cost-header">
          {`You won${'\''}t be charged yet`}
        </div>
        <div className="cost-items">
          <button className="price-nights cost-btn" type="button">
            DYNAMIC PRICE x DYNAMIC nights
          </button>
          <button className="cleaning-fee cost-btn" type="button">
            Cleaning fee
          </button>
          <button className="service-fee cost-btn" type="button">
            Service fee
          </button>
          <button className="taxes-fee cost-btn" type="button">
            Occupancy taxes and fees
          </button>
          <span className="total">Total</span>
        </div>
      </div>
    </div>
  );
}

export default CostEstModal;
