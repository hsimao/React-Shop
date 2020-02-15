import React from 'react';
import classes from './cartItem.module.scss';

const CartItem = ({ imageUrl, price, name, quantity }) => {
  return (
    <div className={classes.cartItem}>
      <img src={imageUrl} alt='item' />
      <div className={classes['item-details']}>
        <span className={classes.name}>{name}</span>
        <span className={classes.price}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
