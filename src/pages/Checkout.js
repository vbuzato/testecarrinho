import React, { useCallback, useEffect, useState } from 'react';

import fetchCart from '../api';
import ProductsList from '../components/ProductsList';
import formatPriceToShowIt from '../utils';
import './Checkout.css';

function Checkout() {
  const [cart, setCart] = useState();
  const valueToFreeShipping = 1000;

  const fetchCartData = useCallback(async () => {
    const cartData = await fetchCart();
    setCart(cartData);
  }, []);

  useEffect(() => {
    fetchCartData();
  }, [fetchCartData]);

  return (
    <div className="wrap-checkout">
      <header>Meu carrinho</header>
      {cart ? (
        <div>
          <ProductsList cart={cart.data.items} />
          <div className="cart-total">
            <span>Total</span>
            <span>
              R$
              {' '}
              {formatPriceToShowIt(cart.data.value)}
            </span>
            {(cart.data.value > valueToFreeShipping)
            && <div className="message-ok">Parabéns, sua compra tem frete grátis !</div>}
          </div>
          <div className="cart-total">
            <button type="button" className="finish-bt">Finalizar compra</button>
          </div>
        </div>
      ) : 'Loading'}
    </div>
  );
}

export default Checkout;
