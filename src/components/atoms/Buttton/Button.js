import styled, { css, keyframes } from 'styled-components';

const slidein = keyframes`
0% {
  transform: translateY(100%);
  opacity: 0;
}

100% {
  transform: translateY(0%);
  opacity: 1;
}
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${({ backgroundColor }) => backgroundColor};
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.8rem;
  color: ${({ fontColorMain }) => fontColorMain};
  height: 45px;
  position: relative;
  transition: color 300ms ease-in-out;
  z-index: 1;

  ${({ animated }) =>
    animated &&
    css`
      animation: 1s ease-in-out ${slidein};
    `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background-color: ${({ backgroundColorHover }) => backgroundColorHover};

    transform: scaleX(0);
    transform-origin: right;
    transition: transform 300ms ease-in-out;
  }

  &:hover {
    color: ${({ fontColorHover }) => fontColorHover};
    border: 1px solid ${({ borderColor }) => borderColor};

    &::before {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
`;
