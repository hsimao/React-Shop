import React from 'react';
import classes from './buttonCustom.module.scss';

const ButtonCustom = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`button-custom ${classes.buttonCustom}
      ${inverted ? classes['inverted'] : ''}
      ${isGoogleSignIn ? classes['google-sign-in'] : ''}`}
      {...otherProps}>
      {children}
    </button>
  );
};

export default ButtonCustom;
