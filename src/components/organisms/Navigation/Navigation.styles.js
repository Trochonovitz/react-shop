import styled, { css, keyframes } from 'styled-components';
import { breakpoints } from 'theme/theme';
import { SlideOut } from 'components/molecules/SlideOut/SlideOut';

const slidein = keyframes`
0% {
  transform: translateX(-50%);
}

100% {
  transform: translateX(0%);
}
`;

export const Wrapper = styled.nav`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 3;
`;

export const WrapperAbsolute = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px;
  top: 0;
  border-bottom: 1px solid #e0e0e0;
  width: 100%;

  background-color: ${({ scrollPosition, isHover }) =>
    scrollPosition < 15 || isHover ? '#fff' : 'transparent'};
  transition: background-color 250ms linear;

  ${({ isAbsolute }) =>
    isAbsolute &&
    css`
      position: absolute;
    `};

  @media ${breakpoints.desktop} {
    grid-template-columns: 15% 70% 15%;
    padding: 0px;
  }
`;

export const StyledSlideOut = styled(SlideOut)`
  left: 0;
  box-shadow: 10px 0px 8px 1px rgba(99, 99, 98, 0.36);

  @media ${breakpoints.desktop} {
    position: static;
    transform: translateX(0);
    grid-row: 2;
    grid-column: 2;
    height: 100%;
    background-color: transparent;
    box-shadow: none;
  }
`;

export const ListElements = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  list-style: none;
  margin: 0 10px 0 20px;
  padding: 0;

  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: 1.1s ease-in-out ${slidein};
    `}

  @media ${breakpoints.desktop} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const NavigationElement = styled.li`
  text-decoration: none;
  text-transform: uppercase;
  color: #303030;
  padding: 20px 0;
  font-size: 0.8rem;
  letter-spacing: 0.8px;
  border-bottom: 1px solid #e0e0e0;
  width: 80%;

  &:last-child {
    text-transform: none;
    color: #595959;
  }

  @media ${breakpoints.desktop} {
    border: none;
    margin: 0 20px;
    width: fit-content;
    color: ${({ scrollPosition, isHover }) =>
      scrollPosition < 15 || isHover ? '#303030' : '#fff'};
    position: relative;

    &::before {
      content: '';
      width: 100%;
      height: 2px;
      background-color: black;
      position: absolute;
      top: 100%;
      left: 0;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease-in-out;
    }

    &:hover {
      &::before {
        transform: scaleX(1);
      }
    }

    &:last-child {
      display: none;
    }
  }
`;

export const NavbarCloseButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  color: #303030;
  padding: 20px 20px 20px 0;

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
  color: ${({ scrollPosition, isHover }) =>
    scrollPosition < 15 || isHover ? 'black' : '#fff'};
  cursor: pointer;
  text-decoration: none;

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
  color: ${({ scrollPosition, isHover }) =>
    scrollPosition < 15 || isHover ? 'black' : '#fff'};

  &:last-child {
    margin: 0 10px 0 10px;
  }

  @media (max-width: 1140px) {
    &:first-child {
      display: none;
    }
  }
`;

export const StyledSVG = styled.svg`
  width: 20px;
  height: 20px;
`;
