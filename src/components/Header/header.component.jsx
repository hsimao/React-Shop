import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../CartIcon/cartIcon.component';
import CartDropdown from '../CartDropdown/cartDropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import classes from './header.module.scss';

const Header = ({ currentUser, cartHidden }) => {
  console.log(currentUser);
  return (
    <div className={classes.header}>
      <Link to='/' className={classes['logo-container']}>
        <Logo className={classes.logo} />
      </Link>
      <div className={classes.options}>
        <Link to='/shop' className={classes.option}>
          SHOP
        </Link>
        <Link to='/conatct' className={classes.option}>
          CONTACT
        </Link>
        {currentUser ? (
          <div className={classes.option} onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to='/signin' className={classes.option}>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {cartHidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
