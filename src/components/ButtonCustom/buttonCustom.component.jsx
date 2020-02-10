import React from 'react';
import classes from './buttonCustom.module.scss';

const ButtonCustom = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${classes.buttonCustom} ${
        isGoogleSignIn ? classes['google-sign-in'] : ''
      }`}
      {...otherProps}>
      {children}
    </button>
  );
};

export default ButtonCustom;
