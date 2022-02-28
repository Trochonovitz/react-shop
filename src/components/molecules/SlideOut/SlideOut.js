import styled, { css } from 'styled-components';
import { breakpoints, colors } from 'theme/theme';

export const SlideOut = styled.div`
  display: grid;
  width: 80%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 4;
  background-color: ${colors.white};
  transform: translateX(
    ${({ $from }) => ($from === 'left' ? '-125%' : '125%')}
  );
  ${({ $bottom }) => $bottom && 'transform: translateY(-100%)'}
  transition: transform 0.6s 0.1s ease-in-out;

  ${({ isVisible }) =>
    isVisible &&
    css`
      transform: translateX(0%);
    `};

  @media ${breakpoints.bigPhone} {
    width: 60%;
  }

  @media ${breakpoints.tablet} {
    width: 50%;
  }

  @media ${breakpoints.laptop} {
    width: 40%;
  }

  @media ${breakpoints.desktop} {
    width: 100%;
  }
`;
