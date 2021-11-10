import styled, { css } from 'styled-components';

export const NavAccountSlideOut = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 80%;
  height: 100vh;
  position: absolute;
  top: 0;
  margin: 0;
  padding: 0;
  background-color: #fff;

  transform: translateX(${({ from }) => (from === 'left' ? '-125%' : '125%')});
  transition: transform 0.3s 0.1s ease-in-out;

  ${({ isVisible }) =>
    isVisible &&
    css`
      transform: translateX(0%);
    `};
`;
