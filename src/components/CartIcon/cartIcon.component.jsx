import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import classes from './cartIcon.module.scss';

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className={classes.cartIcon} onClick={toggleCartHidden}>
      <ShoppingIcon className={classes['shopping-icon']} />
      <span className={classes['item-count']}> 0 </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
