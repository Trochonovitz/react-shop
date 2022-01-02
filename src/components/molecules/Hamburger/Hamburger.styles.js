import styled from 'styled-components';
import { breakpoints } from 'theme/theme';

export const StyledHamburger = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: 0 0 0 10px;

  @media ${breakpoints.desktop} {
    display: none;
  }
`;

export const StyledHamburgerInner = styled.span`
  display: flex;

  width: 100%;
  height: 2px;
  position: relative;
  background-color: ${({ scrollPosition, isHover }) =>
    scrollPosition < 15 || isHover ? 'black' : '#fff'};

  &::after,
  &::before {
    position: absolute;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background-color: ${({ scrollPosition, isHover }) =>
      scrollPosition < 15 || isHover ? 'black' : '#fff'};
  }

  &::after {
    top: 5px;
  }

  &::before {
    top: -5px;
  }
`;
