import React from 'react';
import { connect } from 'react-redux';

import ButtonCustom from '../ButtonCustom/buttonCustom.component';
import CartItem from '../CartItem/cartItem.component';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import classes from './cartDropdown.module.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className={classes.cartDropdown}>
      <div className={classes['cart-items']}>
        {cartItems.length ? (
          cartItems.map(item => <CartItem {...item} key={item.id} />)
        ) : (
          <span className={classes['empty-message']}>Your cart is empty</span>
        )}
        <ButtonCustom>GO TO CHECKOUT</ButtonCustom>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
