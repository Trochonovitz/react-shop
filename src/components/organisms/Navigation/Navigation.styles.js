import { NavAccountSlideOut } from 'components/molecules/NavAccountSlideOut/NavAccountSlideOut';
import styled, { css } from 'styled-components';
import { breakpoints } from 'theme/theme';

export const WrapperAbsolute = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px 0;
  position: absolute;
  top: 0;
  border-bottom: 1px solid #e0e0e0;
  width: 100%;

  background-color: ${({ scrollPosition }) =>
    scrollPosition < 15 ? '#fff' : 'transparent'};
  transition: background-color 250ms linear;

  @media ${breakpoints.desktop} {
    grid-template-columns: 15% 70% 15%;
  }
`;

export const Wrapper = styled.nav`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 3;
`;

export const StyledNavAccountSlideOut = styled(NavAccountSlideOut)`
  @media ${breakpoints.desktop} {
    position: static;
    transform: translateX(0);
    grid-row: 2;
    grid-column: 2;
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: center;
    background-color: transparent;
  }
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

  @media ${breakpoints.desktop} {
    border: none;
    padding: 10px;
    margin: 0;
    width: fit-content;
    color: ${({ scrollPosition }) =>
      scrollPosition < 15 ? '#303030' : '#fff'};

    &:last-child {
      display: none;
    }
  }
`;

export const CloseButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  color: #303030;
  padding: 20px;

  @media ${breakpoints.desktop} {
    display: none;
  }
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

  @media ${breakpoints.desktop} {
    grid-column: 2;
    padding: 20px;
  }
`;

export const NavigationWrapper = styled.div`
  justify-self: end;
  align-self: center;

  @media ${breakpoints.desktop} {
    grid-column: 3;
  }
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

  @media (max-width: 1140px) {
    &:first-child {
      display: none;
    }
  }
`;
