import styled from 'styled-components';
import ButtonCustom from '../ButtonCustom/buttonCustom.component';

export const CollectionItemContainer = styled.div`
  position: relative;
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;

  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
    }
  }
`;

export const CollectionItemImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: url(${props => props.imageUrl});
`;

export const CollectionItemFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const FooterName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const FooterPrice = styled.span`
  width: 10%;
`;

export const AddButton = styled(ButtonCustom)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
`;
