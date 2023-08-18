import React from 'react'
import './Checkout.css' ; 
import Subtotal from './Subtotal.js' ;
import CheckoutProduct from './CheckoutProduct.js' ;  
import { useStateValue } from './StateProvider';
function Checkout() {
  const [{basket},dispatch] = useStateValue() ; 
  console.log(basket.item) ; 
  return (
    <div className='checkout'>
        <div className = 'checkout_left'>
            <img src='https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Aug23ART/Header/UNREC_Offer_stripe_PC_CollectNow.jpg' className='checkout_ad' alt=''/>
            <div>
                <h2 className = "checkout_title"> Your Shopping Basket </h2> 
{/* 
                {basket.map(item=>{
                  <CheckoutProduct 
                  id = {item.id}
                  title = {item.title}
                  image = {item.image}
                  price = {item.price}
                  rating = {item.rating}/>
                })} */}
                {/* Basket Item */}
                {/* Basket Item */}
                {/* Basket Item */}
                {/* Basket Item */}
                {/* Basket Item */}
            </div> 
        </div>
        <div className='checkout_right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout