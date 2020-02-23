import React from 'react';
import {
  CartItemContainer,
  CartItemImage,
  ItemDetails,
  ItemDetailsName,
} from './cartItem.styles';

const CartItem = ({ imageUrl, price, name, quantity }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt='item' />
      <ItemDetails>
        <ItemDetailsName>{name}</ItemDetailsName>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
