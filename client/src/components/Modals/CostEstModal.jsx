import React from 'react';

// Cost Estimate modal (conditional app major expansion logic)
function CostEstModal({ showCostEstModal, setCostEstModal, price }) {
  if (!showCostEstModal) {
    return null;
  }

  return (
    <div className="bob">
      <div className="modal-header">
        `You won`&#39;`t be charged yet`
        <div className="cost-items">
          <button className="price-nights" type="button">
            DYNAMIC PRICE x DYNAMIC nights
          </button>
          <button className="cleaning-fee" type="button">
            Cleaning fee
          </button>
          <button className="service-fee" type="button">
            Service fee
          </button>
          <button className="taxes-fee" type="button">
            Occupancy taxes and fees
          </button>
          <span className="total">Total</span>
        </div>

      </div>
    </div>
  );
}

export default CostEstModal;
