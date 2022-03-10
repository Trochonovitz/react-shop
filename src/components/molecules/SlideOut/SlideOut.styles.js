import styled, { css } from 'styled-components';
import { breakpoints, colors } from 'theme/theme';

const types = {
  bottom: 'bottom',
  left: 'left',
  right: 'right',
  top: 'top',
};

const mainMixin = css`
  display: grid;
  position: fixed;
  z-index: 4;
  background-color: ${colors.white};
  transition: all 0.6s 0.1s ease-in-out;
`;

const slideLeftRightMixin = css`
  height: 100vh;
  width: 80%;
  top: 0;

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

const getSlideType = (slideType) => {
  switch (slideType) {
    case types.bottom:
      return css`
        ${mainMixin}
        height: 40vh;
        width: 100%;
        bottom: 0;
        transform: translateY(1000%);

        ${({ isVisible }) =>
          isVisible &&
          css`
            transform: translateY(0%);
          `};
      `;
    case types.left:
      return css`
        ${slideLeftRightMixin}
        ${mainMixin}
        transform: translateX(-125%);
        left: 0;

        ${({ isVisible }) =>
          isVisible &&
          css`
            transform: translateX(0%);
          `};
      `;
    case types.right:
      return css`
        ${slideLeftRightMixin}
        ${mainMixin}
        transform: translateX(125%);
        right: 0;

        ${({ isVisible }) =>
          isVisible &&
          css`
            transform: translateX(0%);
          `};
      `;
    case types.top:
      return css`
        ${mainMixin}
        transform: translateY(-1000%);

        ${({ isVisible }) =>
          isVisible &&
          css`
            transform: translateY(0%);
          `};
      `;
    default:
      return css``;
  }
};

export const StyledSlideOut = styled.div`
  ${({ slideType }) => getSlideType(slideType)}
`;
