import styled, { css } from 'styled-components';
import { colors, breakpoints, sizes } from 'theme/theme';
import SlideOut from 'components/molecules/SlideOut/SlideOut';
import Text from 'components/atoms/Text/Text';

export const StyledSlideOut = styled(SlideOut)`
  box-shadow: -10px 0px 8px 1px rgba(99, 99, 98, 0.36);
  grid-template-rows: 10% 90%;

  @media ${breakpoints.desktop} {
    position: static;
    transform: translateX(0);
    height: 100%;
    background-color: transparent;
    box-shadow: none;
    grid-column: 1;
    grid-row: 1;
    z-index: 2;
  }
`;

export const Header = styled.header`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 85% 15%;
  border-bottom: 1px solid ${colors.veryLightGrey};
  margin: 0;
  position: relative;

  @media ${breakpoints.desktop} {
    display: none;
  }
`;

export const Title = styled(Text)`
  color: ${colors.darkGrey};
  font-size: ${sizes.l};
  position: absolute;
`;

export const FiltersCloseButton = styled.button`
  background-color: transparent;
  margin: 0;
  border: none;
  cursor: pointer;
  font-size: ${sizes.l};
  grid-column: 2;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const CategoryName = styled(Text)`
  color: ${colors.darkGrey};
  font-weight: normal;
  padding: 5px 0;

  ${({ main }) =>
    main &&
    css`
      font-weight: bold;
      padding: 20px 0;

      @media ${breakpoints.desktop} {
        padding: 0 0 20px 0;
      }
    `}
`;
