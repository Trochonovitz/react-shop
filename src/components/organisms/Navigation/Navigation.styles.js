import styled, { css } from 'styled-components';
import { breakpoints } from 'theme/theme';
import { NavAccountSlideOut } from 'components/molecules/NavAccountSlideOut/NavAccountSlideOut';
import { Title } from 'components/atoms/Title/Title';

const closeButton = css`
  cursor: pointer;
  border: none;
  background: transparent;
  color: #303030;
`;

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

export const StyledSlideOutLeft = styled(NavAccountSlideOut)`
  left: 0;
  align-items: flex-start;
  justify-content: flex-start;

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

export const StyledSlideOutRight = styled(NavAccountSlideOut)`
  right: 0;
  align-items: center;

  @media ${breakpoints.desktop} {
    width: 25%;
  }
`;

export const NavigationElement = styled.li`
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

export const NavbarCloseButton = styled.button`
  ${closeButton}
  padding: 20px;

  @media ${breakpoints.desktop} {
    display: none;
  }
`;

export const BasketCloseButton = styled.button`
  ${closeButton}
  font-size: 1.15rem;
  margin: 0 20px 0 0;
`;

export const StyledTitle = styled(Title)`
  font-size: 1rem;
  font-weight: normal;
  height: fit-content;
  margin: 20px;
`;

export const Wrapper1 = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StyledParagraph = styled.p`
  font-size: 0.8rem;
  border: 1px solid #e6e6e6;
  border-left: none;
  border-right: none;
  padding: 10px 20px;
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
