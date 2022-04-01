import styled, { css } from 'styled-components';
import { colors } from 'theme/theme';

export const StyledSVG = styled.svg`
  cursor: pointer;

  ${({ nav }) =>
    nav
      ? css`
          margin: 0 10px 0 0;
          color: ${({ $scrollPosition, $isHover, searchBarState }) =>
            $scrollPosition < 15 || $isHover || searchBarState
              ? colors.black
              : colors.white};
        `
      : css`
          color: ${colors.darkGrey};
          margin: 0px;
          padding: 0px;
        `}
`;
