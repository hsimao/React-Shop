import React from 'react';
import classes from './buttonCustom.module.scss';

const ButtonCustom = ({ children, ...otherProps }) => {
  return (
    <button className={classes.buttonCustom} {...otherProps}>
      {children}
    </button>
  );
};

export default ButtonCustom;
