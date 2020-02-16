import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ButtonCustom from '../ButtonCustom/buttonCustom.component';
import CartItem from '../CartItem/cartItem.component';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import classes from './cartDropdown.module.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className={classes.cartDropdown}>
      <div className={classes['cart-items']}>
        {cartItems.length ? (
          cartItems.map(item => <CartItem {...item} key={item.id} />)
        ) : (
          <span className={classes['empty-message']}>Your cart is empty</span>
        )}
        <ButtonCustom
          onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
          }}>
          GO TO CHECKOUT
        </ButtonCustom>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
