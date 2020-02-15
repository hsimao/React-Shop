import React from 'react';
import ButtonCustom from '../ButtonCustom/buttonCustom.component';

import classes from './cartDropdown.module.scss';

const CartDropdown = props => {
  return (
    <div className={classes.cartDropdown}>
      <div className={classes['cart-items']}>
        <ButtonCustom>GO TO CHECKOUT</ButtonCustom>
      </div>
    </div>
  );
};

export default CartDropdown;
