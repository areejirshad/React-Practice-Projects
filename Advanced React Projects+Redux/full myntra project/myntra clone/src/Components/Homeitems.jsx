import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bagactions } from '../store/bagslice';

export default function Home({item}) {
  const dispatch=useDispatch();
  const bagItems=useSelector(store=>store.bag)
  const elementFound=bagItems.indexOf(item.id)>=0;
  const handleAdd=()=>{
    dispatch(bagactions.addToBag(item.id))
  }
  const removeBag=()=>{
    dispatch(bagactions.removeFromBag(item.id))
  }

  return (
    <>
    <div className="item-container">
  <img className="item-image" src={item.image} alt="item" />
  <div className="rating">
    {item.rating.stars} ⭐ | {item.rating.count}
  </div>
  <div className="company-name">{item.company}</div>
  <div className="item-name">{item.item_name}</div>
  <div className="price">
    <span className="current-price">Rs {item.current_price}</span>
    <span className="original-price">Rs {item.original_price}</span>
    <span className="discount">{item.discount_percentage}% OFF</span>
  </div>
  {!elementFound?<button
    className="btn-add-bag"
    onClick={handleAdd}
  >
    Add to Bag
  </button>:<button
    className="btn-add-bag"
    onClick={removeBag}
    style={{backgroundColor:'#d33535', color:'white'}}
  >
    Remove from bag
  </button>}
  
  
</div>

    </>
  )
}
