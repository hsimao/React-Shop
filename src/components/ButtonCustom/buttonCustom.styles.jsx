import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: black;
  color: white;

  &:hover {
    border: 1px solid black;
    background-color: white;
    color: black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const ButtonCustomContainer = styled.button`
  display: flex;
  justify-content: center;
  width: auto;
  min-width: 165px;
  height: 50px;
  padding: 0 35px 0 35px;
  font-family: 'Open Sans Condensed';
  font-size: 15px;
  font-weight: bolder;
  line-height: 50px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  border: none;

  ${getButtonStyles}
`;
