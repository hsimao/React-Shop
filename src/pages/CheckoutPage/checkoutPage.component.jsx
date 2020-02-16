import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selcetCartTotal,
} from '../../redux/cart/cart.selectors';

import classes from './checkoutPage.module.scss';

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className={classes.checkoutPage}>
      <div className={classes['checkout-header']}>
        <div className={classes['header-block']}>
          <span>Product</span>
        </div>
        <div className={classes['header-block']}>
          <span>Description</span>
        </div>
        <div className={classes['header-block']}>
          <span>Quantity</span>
        </div>
        <div className={classes['header-block']}>
          <span>Price</span>
        </div>
        <div className={classes['header-block']}>
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map(cartItem => cartItem.name)}
      <div className={classes.total}>
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selcetCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
