import styled from 'styled-components';
import { colors } from 'theme/theme';

export const StyledSVG = styled.svg`
  margin: 0 10px 0 0;
  cursor: pointer;
  color: ${({ $scrollPosition, $isHover, searchBarState }) =>
    $scrollPosition < 15 || $isHover || searchBarState
      ? colors.black
      : colors.white};
`;
