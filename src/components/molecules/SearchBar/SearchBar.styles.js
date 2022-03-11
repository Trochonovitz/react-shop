import styled, { css } from 'styled-components';
import { colors } from 'theme/theme';
import { Input } from 'components/atoms/Input/Input';
import SlideOut from 'components/molecules/SlideOut/SlideOut';
import { Link } from 'react-router-dom';

export const StyledSlideOut = styled(SlideOut)`
  ${({ heightNav, heightInfoBox }) =>
    !heightInfoBox
      ? css`
          top: ${heightNav}px;
          height: ${heightNav}px;
        `
      : css`
          top: ${heightNav + heightInfoBox}px;
          height: ${heightNav}px;
        `};
  width: 100%;
  grid-template-columns: 15% 75% 10%;
  justify-items: center;
  align-items: center;
  border-top: 1px solid ${colors.lightGrey};
  padding: 0 10px;
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const StyledInput = styled(Input)`
  border: none;
  width: 100%;
`;

export const ListElements = styled.ul`
  position: absolute;
  top: 33px;
  left: 0px;
  width: 100%;
  height: fit-content;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;
