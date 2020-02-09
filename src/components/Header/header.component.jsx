import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import classes from './header.module.scss';

const Header = props => {
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
      </div>
    </div>
  );
};

export default Header;
