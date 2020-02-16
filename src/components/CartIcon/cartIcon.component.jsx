import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import classes from './cartIcon.module.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className={classes.cartIcon} onClick={toggleCartHidden}>
      <ShoppingIcon className={classes['shopping-icon']} />
      <span className={classes['item-count']}> {itemCount} </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = ({ cart }) => ({
  itemCount: cart.cartItems.reduce((acc, it) => acc + it.quantity, 0),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
