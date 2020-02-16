import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

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

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
