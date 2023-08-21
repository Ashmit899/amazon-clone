import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal.js';
import { useStateValue } from './StateProvider';
import { Button } from '@mui/material';
function Checkout({ cartItems, removeFromCart }) {
  // const [{basket},dispatch] = useStateValue() ; 
  // console.log(basket.item) ; 
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Aug23ART/Header/UNREC_Offer_stripe_PC_CollectNow.jpg' className='checkout_ad' alt='' />
        <div>
          <h2 className="checkout_title"> Your Shopping Basket </h2>

          <div>
            {cartItems.map((item) => (
              <div className='checkoutProduct'>
                <img src={item.image} className='checkoutProduct_image' />
                <div className='checkoutProduct_info'>
                  <p className='checkoutProduct_title'>{item.title}</p>
                  <p className='checkoutProduct_price'>
                    <small>$</small>
                    <strong>{item.price}</strong>
                  </p>
                  <div className="checkoutProduct_rating">
                    {Array(item.rating).fill().map((_, i) => (
                      <p>🌟</p>
                    ))}
                  </div>
                  <button onClick={()=> removeFromCart(item)}>Remove From Cart</button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      <div className='checkout_right'>
        <Subtotal cartItems={cartItems} />
      </div>
    </div>
  )
}

export default Checkout