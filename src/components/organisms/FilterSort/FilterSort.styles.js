import styled from 'styled-components';
import { colors, breakpoints, sizes } from 'theme/theme';
import SlideOut from 'components/molecules/SlideOut/SlideOut';
import Text from 'components/atoms/Text/Text';

export const StyledSlideOut = styled(SlideOut)`
  box-shadow: 0px -10px 8px 1px rgba(99, 99, 98, 0.36);
  grid-template-rows: 20% 80%;

  @media ${breakpoints.desktop} {
    position: absolute;
    width: 20%;
    height: fit-content;
    box-shadow: -5px -10px 20px -15px rgba(0, 0, 0, 0.75);
    padding: 20px;
    top: -20px;
    right: 3px;
    border: 1px solid ${colors.veryLightGrey};

    &:before {
      content: '';
      height: 15px;
      width: 15px;
      transform: rotate(45deg);
      top: -8px;
      right: 20%;
      position: absolute;
      background-color: white;
      border-left: 1px solid ${colors.veryLightGrey};
      border-top: 1px solid ${colors.veryLightGrey};
    }
  }
`;

export const Header = styled.header`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 15% 85%;
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

export const SortCloseButton = styled.button`
  background-color: transparent;
  margin: 0;
  border: none;
  cursor: pointer;
  font-size: ${sizes.l};
  grid-column: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

export const SortName = styled(Text)`
  color: ${colors.darkGrey};
  font-weight: normal;
  padding: 5px 0;
  cursor: pointer;
`;
