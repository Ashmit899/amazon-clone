import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
function Product({id,title, image, price, rating, addToCart}) {

  const [{basket},dispatch] = useStateValue() ;  
  console.log("Basket : ",basket) ; 
  const addToBasket = () => {
    dispatch({
      type : "ADD_TO_BASKET",
      item : {
        id : id, 
        title : title, 
        image : image, 
        price : price, 
        rating : rating,
      }, 
    }) ; 
  } ; 
  
  return (
    <div className='product'>
        <div className='product_info'>
          <p>{title}</p>
          <div className='product_price'>
            <small>$</small>
            <strong>{price}</strong>
          </div>
          <div className='product_rating'>
            {Array(rating).fill().map((_,i) => (
              <p>🌟</p>
            ))}
          </div>
        </div>
          
        <img src={image} alt = ""/>
          
        <button onClick={() => addToCart({
        id : id, 
        title : title, 
        image : image, 
        price : price, 
        rating : rating,})}>Add to basket</button>
      </div>
  )
}

export default Product