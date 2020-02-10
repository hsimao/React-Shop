import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import classes from './header.module.scss';

const Header = ({ currentUser }) => {
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
      </div>
    </div>
  );
};

export default Header;
