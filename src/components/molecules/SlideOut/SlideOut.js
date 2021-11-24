import styled, { css } from 'styled-components';
import { breakpoints } from 'theme/theme';

export const SlideOut = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100vh;
  position: absolute;
  top: 0;
  background-color: #fff;

  transform: translateX(${({ from }) => (from === 'left' ? '-125%' : '125%')});
  transition: transform 0.6s 0.1s ease-in-out;

  ${({ isVisible }) =>
    isVisible &&
    css`
      transform: translateX(0%);
    `};

  @media ${breakpoints.tablet} {
    width: 40%;
  }

  @media ${breakpoints.desktop} {
    width: 100%;
  }
`;
