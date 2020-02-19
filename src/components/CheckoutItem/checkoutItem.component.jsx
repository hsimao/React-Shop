import React from 'react';

import classes from './checkoutItem.module.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className={classes.checkoutItem}>
    <div className={classes['image-container']}>
      <img src={imageUrl} alt='item' />
    </div>
    <span className={classes.name}>{name}</span>
    <span className={classes.quantity}>{quantity}</span>
    <span className={classes.price}>{price}</span>
    <div className={classes['remove-button']}>&#10005;</div>
  </div>
);

export default CheckoutItem;
