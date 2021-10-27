import styled from 'styled-components';

export const StyledHamburger = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: 0 0 0 10px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledHamburgerInner = styled.span`
  display: flex;

  width: 100%;
  height: 2px;
  position: relative;
  background-color: ${({ scrollPosition }) =>
    scrollPosition < 15 ? 'black' : '#fff'};

  &::after,
  &::before {
    position: absolute;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background-color: ${({ scrollPosition }) =>
      scrollPosition < 15 ? 'black' : '#fff'};
  }

  &::after {
    top: 5px;
  }

  &::before {
    top: -5px;
  }
`;
