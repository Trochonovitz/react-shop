import styled from 'styled-components';
import { breakpoints, colors } from 'theme/theme';
import { SlideOut } from 'components/molecules/SlideOut/SlideOut';
import Button from 'components/atoms/Button/Button';
import Text from 'components/atoms/Text/Text';

export const StyledSlideOut = styled(SlideOut)`
  right: 0;
  grid-template-rows: 15% 70% 15%;
  box-shadow: -10px 0px 8px 1px rgba(99, 99, 98, 0.36);

  @media ${breakpoints.desktop} {
    width: 25%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BasketCloseButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  color: ${colors.darkGrey};
  font-size: 1.15rem;
  margin: 0 20px 0 0;
`;

export const Title = styled(Text)`
  height: fit-content;
  margin: 20px;
  align-self: start;
  color: ${colors.darkGrey};
`;

export const Paragraph = styled(Text)`
  font-size: 0.8rem;
  border: 1px solid ${colors.lightGrey};
  border-left: none;
  border-right: none;
  padding: 10px 20px;
`;

export const ItemsList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-y: auto;
`;

export const Checkout = styled.div`
  width: 100%;
  border-top: 1px ${colors.lightGrey} solid;
  padding: 25px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  width: 80%;
`;
