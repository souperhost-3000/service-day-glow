import React from 'react';

// Cost Estimate modal (conditional app major expansion logic)
function CostEstModal({
  listingData, showCostEst, adjPrice, numNights,
}) {
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
            {`$${adjPrice} x ${numNights} nights`}
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
          {`$${adjPrice * numNights}`}
        </div>
        <div className="sub sub-cleaning">
          {`$${listingData.cleaning_fee}`}
        </div>
        <div className="sub sub-service">
          {`$${listingData.service_fee * numNights}`}
        </div>
        <div className="sub sub-taxes">
          {`$${listingData.taxes * numNights}`}
        </div>
        <span className="sub-total">
          {`$${((adjPrice + listingData.service_fee + listingData.taxes) * numNights) + listingData.cleaning_fee}`}
        </span>
      </div>
      <span className="line" />
    </div>
  );
}

export default CostEstModal;
