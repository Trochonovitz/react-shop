import styled, { css } from 'styled-components';

export const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  position: relative;
  padding: 10px 0;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #fff;

  background-color: ${({ scrollPosition }) =>
    scrollPosition < 15 ? '#fff' : 'transparent'};
  transition: background-color 250ms linear;
`;

export const StyledUl = styled.ul`
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

export const StyledHeader = styled.li`
  text-decoration: none;
  text-transform: uppercase;
  color: #303030;
  padding: 20px 0;
  margin: 0 10px 0 20px;
  font-size: 0.8rem;
  letter-spacing: 0.8px;
  border-bottom: 1px solid #e0e0e0;
  width: 80%;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  color: #303030;
  padding: 20px;
`;

export const Logo = styled.h1`
  justify-self: center;
  align-self: center;
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin: 0;
  color: ${({ scrollPosition }) => (scrollPosition < 15 ? 'black' : '#fff')};
`;

export const NavigationWrapper = styled.div`
  justify-self: end;
  align-self: center;
`;

export const Icon = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  margin: 0 0 0 10px;
  color: ${({ scrollPosition }) => (scrollPosition < 15 ? 'black' : '#fff')};

  &:last-child {
    margin: 0 10px 0 10px;
  }
`;
