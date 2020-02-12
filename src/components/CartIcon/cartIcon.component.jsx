import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import classes from './cartIcon.module.scss';

const CartIcon = props => {
  return (
    <div className={classes.cartIcon}>
      <ShoppingIcon className={classes['shopping-icon']} />
      <span className={classes['item-count']}> 0 </span>
    </div>
  );
};

export default CartIcon;
