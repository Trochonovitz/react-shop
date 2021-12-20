import styled from 'styled-components';
import { breakpoints } from 'theme/theme';
import { SlideOut } from 'components/molecules/SlideOut/SlideOut';
import { Title } from 'components/atoms/Title/Title';

export const StickyWrapper = styled.div`
  width: 100%;
  position: sticky;
  z-index: 4;
  top: 0;
`;

export const StyledSlideOut = styled(SlideOut)`
  right: 0;
  align-items: center;

  @media ${breakpoints.desktop} {
    width: 25%;
  }
`;

export const BasketCloseButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  color: #303030;
  font-size: 1.15rem;
  margin: 0 20px 0 0;
`;

export const StyledTitle = styled(Title)`
  font-size: 1rem;
  font-weight: normal;
  height: fit-content;
  margin: 20px;
`;

export const Wrapper = styled.div`
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

export const ItemsList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
`;
