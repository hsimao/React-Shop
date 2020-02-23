import React from 'react';
import { ButtonCustomContainer } from './buttonCustom.styles';

const ButtonCustom = ({ children, ...props }) => {
  console.log(props);
  return <ButtonCustomContainer {...props}>{children}</ButtonCustomContainer>;
};

export default ButtonCustom;
