import styled from 'styled-components';
import { Button } from '../../atoms/Buttton/Button';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const StyledButton = styled(Button)`
  background-color: #d4e4d4;
  color: #303030;
  width: 70%;
  margin: 25px 0;
  position: relative;
  transition: color 300ms ease-in-out;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background-color: #fff;

    transform: scaleX(0);
    transform-origin: left;
    transition: transform 300ms ease-in-out;
  }

  &:hover {
    color: #d4e4d4;
    border: 1px solid #d4e4d4;

    &::before {
      transform: scaleX(1);
    }
  }
`;
