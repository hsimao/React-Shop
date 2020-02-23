import styled from 'styled-components';
import ButtonCustom from '../ButtonCustom/buttonCustom.component';

export const CartDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 90px;
  right: 40px;
  width: 240px;
  height: 340px;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  z-index: 5;
`;

export const CartDropdownButton = styled(ButtonCustom)`
  margin-top: auto;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 240px;
  overflow: scroll;
`;
