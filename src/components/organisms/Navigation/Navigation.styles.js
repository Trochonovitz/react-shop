import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints, colors, sizes } from 'theme/theme';
import SlideOut from 'components/molecules/SlideOut/SlideOut';
import Text from 'components/atoms/Text/Text';

const slidein = keyframes`
0% {
  transform: translateX(-50%);
}

100% {
  transform: translateX(0%);
}
`;

export const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid ${colors.lightGrey};
  width: 100%;
  padding: 10px;
  z-index: 3;
  background-color: ${({ scrollPosition, isHover }) =>
    scrollPosition < 15 || isHover ? colors.white : colors.transparent};
  transition: background-color 250ms linear;
  position: sticky;
  top: 0px;

  @media ${breakpoints.desktop} {
    grid-template-columns: 15% 70% 15%;
    padding: 0px;
  }
`;

export const StyledSlideOut = styled(SlideOut)`
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
  padding: 0px;

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
  color: ${colors.black};
  padding: 20px 0;
  font-size: 0.8rem;
  letter-spacing: 0.8px;
  border-bottom: 1px solid ${colors.lightGrey};
  width: 80%;

  &:last-child {
    text-transform: none;
    color: ${colors.darkGrey};
  }

  @media ${breakpoints.desktop} {
    border: none;
    margin: 0 20px;
    width: fit-content;
    color: ${({ $scrollPosition, $isHover }) =>
      $scrollPosition < 15 || $isHover ? colors.black : colors.white};
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

    &.active {
      &::before {
        transform: scaleX(1);
      }
    }
  }
`;

export const NavbarCloseButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  color: ${colors.black};
  padding: 20px 20px 20px 0;

  @media ${breakpoints.desktop} {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  justify-self: center;
  align-self: center;
  cursor: pointer;
  text-decoration: none;

  @media ${breakpoints.desktop} {
    grid-column: 2;
    padding: 20px;
  }
`;

export const Logo = styled(Text)`
  font-size: ${sizes.l};
  color: ${({ $scrollPosition, $isHover }) =>
    $scrollPosition < 15 || $isHover ? colors.black : colors.white};
`;

export const NavigationWrapper = styled.div`
  justify-self: end;
  align-self: center;
  display: flex;

  @media ${breakpoints.desktop} {
    grid-column: 3;
    margin: 0 50px 0 0;
  }
`;
