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

export const Title = styled.h2`
  color: ${({ color }) => color};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  z-index: 1;

  ${({ animated }) =>
    animated &&
    css`
      animation: 1s ease-in-out ${slidein};
    `}
`;
