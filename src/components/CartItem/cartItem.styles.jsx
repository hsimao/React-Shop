import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  margin-bottom: 15px;
`;

export const CartItemImage = styled.img`
  width: 30%;
`;

export const ItemDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 70%;
  padding: 10px 20px;
`;

export const ItemDetailsName = styled.span`
  font-size: 16px;
`;
