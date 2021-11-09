import styled, { css } from 'styled-components';

export const NavAccountSlideOut = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  width: 80%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background-color: #fff;

  transform: translateX(-150%);
  transition: transform 0.3s 0.1s ease-in-out;

  ${({ isVisible }) =>
    isVisible &&
    css`
      transform: translateX(0%);
    `};
`;
