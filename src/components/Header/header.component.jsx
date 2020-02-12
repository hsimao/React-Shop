import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../CartIcon/cartIcon.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import classes from './header.module.scss';

const Header = ({ currentUser }) => {
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
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
