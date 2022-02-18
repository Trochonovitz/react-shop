import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { breakpoints, colors } from 'theme/theme';

export const SlideOut = styled.div`
  display: grid;
  width: 80%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 4;
  background-color: ${colors.white};

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

SlideOut.propTyes = {
  from: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
};
