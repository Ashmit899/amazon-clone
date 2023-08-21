import React from 'react'
import './Subtotal.css' ; 
import CurrencyFormat from "react-currency-format" ; 
import { useStateValue } from './StateProvider';
//import { getBasketTotal } from './reducer';
function Subtotal({cartItems}) {

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };
  
  return (
    <div class ='subtotal'>
      <CurrencyFormat renderText = {(value) => (
        <>
          <p>
            Subtotal ({cartItems.length} items) : <strong>{value}</strong>
          </p>
          <small className='subtotal_gift'><input type='checkbox' />This order contains a gift.</small>
        </>
      )}
      decimalScale = {2}
      value = {calculateTotal()}
      displayType = {"text"}
      thousandSeperator = {true}
      prefix = {"$"}
      /> 

      <button>
        Proceed to Checkout
      </button>
    </div>
  )
}

export default Subtotal