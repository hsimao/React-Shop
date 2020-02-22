import styled from 'styled-components';
import rwd from '../../assets/styles/rwd.styles';

export const {{pascalCase name}}Container = styled.div`
  border: solid 1px blue;

  ${rwd.sm`
    border: solid 1px red;
  `}

  ${rwd.xs`
    border: solid 1px blue;
  `}
`