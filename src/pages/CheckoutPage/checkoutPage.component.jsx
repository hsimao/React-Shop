import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selcetCartTotal,
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/CheckoutItem/checkoutItem.component';
import ButtonStripe from '../../components/ButtonStripe/buttonStripe.component';

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

      {cartItems.map(cartItem => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <div className={classes.total}>
        <span>TOTAL: ${total}</span>
      </div>
      <div className={classes['test-warning']}>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242
      </div>
      <ButtonStripe price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selcetCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
