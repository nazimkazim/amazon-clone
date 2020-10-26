import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import { Link, useHistory } from 'react-router-dom';


function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  return (
    <div className="checkout">
      <div className="checkout__left">

        { !user ? history.push('/') : <h3>Hello, { user.email }</h3> }
        <h2 className="checkout__title">Your shopping basket</h2>
        { basket.map(item => (
          <CheckoutProduct
            id={ item.id }
            title={ item.title }
            image={ item.image }
            price={ item.price }
            rating={ item.rating }
          />
        )) }
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
