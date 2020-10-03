import React from 'react';

// Cost Estimate modal (conditional app major expansion logic)
function CostEstModal({ showCostEst }) {
  if (!showCostEst) {
    return null;
  }

  return (
    <div className="cost-estimator">
      <div className="cost-header">
        {`You won${'\''}t be charged yet`}
      </div>
      <div className="cost-left">
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
      <div className="cost-right">
        <div className="sub sub-price">
          $XXX
        </div>
        <div className="sub sub-cleaning">
          $XXX
        </div>
        <div className="sub sub-service">
          $XXX
        </div>
        <div className="sub sub-taxes">
          $XXX
        </div>
        <span className="sub-total">
          $XXX
        </span>
      </div>
      <span className="line" />
    </div>
  );
}

export default CostEstModal;
