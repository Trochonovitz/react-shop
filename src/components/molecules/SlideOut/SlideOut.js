import styled, { css } from 'styled-components';
import { breakpoints, colors } from 'theme/theme';

export const SlideOut = styled.div`
  display: grid;
  position: fixed;
  z-index: 4;
  background-color: ${colors.white};
  transition: all 0.6s 0.1s ease-in-out;

  ${({ bottom, $from }) =>
    bottom
      ? css`
          height: 40vh;
          width: 100%;
          bottom: 0;
          transform: translateY(100%);
        `
      : css`
          height: 100vh;
          width: 80%;
          top: 0;
          transform: translateX(${$from === 'left' ? '-125%' : '125%'});

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
        `};

  ${({ isVisible }) =>
    isVisible &&
    css`
      transform: translate(0%);
    `};
`;
