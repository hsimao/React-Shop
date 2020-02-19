import React from 'react';
import { connect } from 'react-redux';
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';

import classes from './checkoutItem.module.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;

  return (
    <div className={classes.checkoutItem}>
      <div className={classes['image-container']}>
        <img src={imageUrl} alt='item' />
      </div>
      <span className={classes.name}>{name}</span>
      <span className={classes.quantity}>
        <div className={classes.arrow} onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <div className={classes.value}>{quantity}</div>
        <div className={classes.arrow} onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className={classes.price}>{price}</span>
      <div
        className={classes['remove-button']}
        onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
