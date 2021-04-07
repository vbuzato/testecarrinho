import React, { useCallback, useEffect, useState } from 'react';
import { FaOpencart } from 'react-icons/fa';
import Loading from '../components/Loading';

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
    <>
      <header>
        <div className="circle" />
        <h1>
          <FaOpencart size="30" />
          Meu carrinho
        </h1>
      </header>
      {cart ? (
        <div className="wrap-checkout">
          <div className="column-checkout">
            <ProductsList cart={cart.data.items} />
          </div>
          <div className="column-checkout p-fixed">
            <div className="cart-total">
              <span>Preço total</span>
              <span>
                R$
                {' '}
                {formatPriceToShowIt(cart.data.totalizers[0].value)}
              </span>
            </div>
            <div className="cart-total">
              <span>Desconto</span>
              <span>
                R$
                {' '}
                {formatPriceToShowIt(cart.data.totalizers[1].value)}
              </span>
            </div>
            <div className="cart-total total-result">
              <b>Total</b>
              <b>
                R$
                {' '}
                {formatPriceToShowIt(cart.data.value)}
              </b>
              {(cart.data.value > valueToFreeShipping)
                && <div className="message-ok">Parabéns, sua compra tem frete grátis!</div>}
            </div>
            <div className="cart-total">
              <button type="button" className="finish-bt">Finalizar compra</button>
            </div>
          </div>
        </div>
      ) : <Loading /> }
    </>
  );
}

export default Checkout;
