import React from 'react'
import { useSelector } from 'react-redux';

export default function Bagsummary() {
  const bagItems=useSelector(store=>store.bag)
  const items=useSelector(store=>store.items)
  const finalItems=items.filter((item)=>{
    const itemIndex=bagItems.indexOf(item.id);
    return itemIndex>=0
  })
  const CONVENIENCE_FEES=99;
  let totalItems = bagItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach(bagItem => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  return (
    <div class="bag-summary">
      <div className="bag-details-container">
      <div className="price-header">
        PRICE DETAILS ({totalItems} Items)
      </div>
      <div className="price-item">
        <span className="price-item-tag">Total MRP</span>
        <span className="price-item-value">Rs.{totalMRP}</span>
      </div>
      <div className="price-item">
        <span className="price-item-tag">Discount on MRP</span>
        <span className="price-item-value priceDetail-base-discount">
          -Rs.{totalDiscount}
        </span>
      </div>
      <div className="price-item">
        <span className="price-item-tag">Convenience Fee</span>
        <span className="price-item-value">Rs.99</span>
      </div>
      <hr />
      <div className="price-footer">
        <span className="price-item-tag">Total Amount</span>
        <span className="price-item-value">Rs.{finalPayment}</span>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
      </div>
    </div>
  )
}
