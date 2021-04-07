import React from 'react';
import PropTypes from 'prop-types';
import formatPriceToShowIt from '../utils';
import './ProductsList.css';

export default function ProductsList({ cart }) {
  return (
    <div className="cards-container">
      {cart && cart.map((item) => (
        <div key={item.uniqueId} className="card-checkout">
          <div className="container-img-checkout">
            <img src={item.imageUrl} alt={item.name} className="img-checkout" />
          </div>
          <div className="info-card-checkout">
            <h2 className="product-title">{item.name.toUpperCase()}</h2>
            <span className="price line-through">
              R$
              {' '}
              {formatPriceToShowIt(item.price)}
              {' '}
              / un
            </span>
            <span className="priceWithDiscount">
              R$
              {' '}
              {formatPriceToShowIt(item.sellingPrice) }
              {' '}
              <span className="unit">/ un</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

ProductsList.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
