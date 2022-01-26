import styled, { css } from 'styled-components';
import { colors, slideInAnimation } from 'theme/theme';

const ButtonMixin = css`
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  position: relative;
`;

const MainButtonMixin = css`
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.8rem;
  height: 45px;
  position: relative;
  transition: color 300ms ease-in-out;
  z-index: 1;
  width: 50%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;

    transform: scaleX(0);
    transform-origin: right;
    transition: transform 300ms ease-in-out;
  }
`;

export const types = {
  green: 'green',
  transparent: 'transparent',
  underline: 'underline',
};

const getButtonType = (buttonType) => {
  switch (buttonType) {
    case types.green:
      return css`
        ${ButtonMixin}
        ${MainButtonMixin}
        background-color: ${colors.lightGreen};
        color: ${colors.black};

        &::before {
          background-color: ${colors.white};
        }

        &:hover {
          color: ${colors.darkGreen};
          border: 1px solid ${colors.darkGreen};

          &::before {
            transform-origin: left;
            transform: scaleX(1);
          }
        }
      `;
    case types.transparent:
      return css`
        ${ButtonMixin}
        ${MainButtonMixin}
        background-color: ${colors.white};
        color: ${colors.grey};

        &::before {
          background-color: 'transparent';
        }

        &:hover {
          color: ${colors.white};
          border: 1px solid ${colors.white};

          &::before {
            transform-origin: left;
            transform: scaleX(1);
          }
        }
      `;
    case types.underline:
      return css`
        ${ButtonMixin}
        background: transparent;
        color: ${colors.darkGrey};
        border: none;
        padding: 0 0 5px 0;
        font-size: 0.9rem;

        ${({ animated }) =>
          animated &&
          css`
            animation: 1s ease-in-out ${slideInAnimation};
          `}

        &::before {
          content: '';
          width: 100%;
          height: 1px;
          background-color: ${colors.darkGrey};
          position: absolute;
          top: 100%;
          left: 0;
          transform: scaleX(1);
          transform-origin: left;
          transition: transform 0.3s ease-in-out;
        }

        &:hover {
          &::before {
            transform: scaleX(0);
          }
        }
      `;
    default:
      return css``;
  }
};

export const StyledButton = styled.button`
  ${({ buttonType }) => getButtonType(buttonType)}
`;
