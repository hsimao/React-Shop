import React from 'react';
import { connect } from 'react-redux';

import ButtonCustom from '../ButtonCustom/buttonCustom.component';
import CartItem from '../CartItem/cartItem.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import classes from './cartDropdown.module.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className={classes.cartDropdown}>
      <div className={classes['cart-items']}>
        {cartItems.map(item => (
          <CartItem {...item} key={item.id} />
        ))}
        <ButtonCustom>GO TO CHECKOUT</ButtonCustom>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
