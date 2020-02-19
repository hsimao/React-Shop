import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cart.actions';

import classes from './checkoutItem.module.scss';

const CheckoutItem = ({ cartItem, clearItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;

  return (
    <div className={classes.checkoutItem}>
      <div className={classes['image-container']}>
        <img src={imageUrl} alt='item' />
      </div>
      <span className={classes.name}>{name}</span>
      <span className={classes.quantity}>{quantity}</span>
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
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
