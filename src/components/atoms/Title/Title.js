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

export const Title = styled.h1`
  color: #fff;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 1.3rem;

  ${({ animated }) =>
    animated &&
    css`
      animation: 1s ease-in-out ${slidein};
    `}
`;
