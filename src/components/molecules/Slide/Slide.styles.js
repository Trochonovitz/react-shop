import styled, { css, keyframes } from 'styled-components';
import { Button } from 'components/atoms/Buttton/Button';
import { Title } from 'components/atoms/Title/Title';

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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${({ height }) => `${height}`};
  background-image: url(${({ cover }) => cover});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 50px 20px;
`;

export const StyledButton = styled(Button)`
  position: relative;
  transition: color 300ms ease-in-out;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background-color: black;

    transform: scaleX(0);
    transform-origin: left;
    transition: transform 300ms ease-in-out;
  }

  &:hover {
    color: #fff;
    border: 1px solid #fff;

    &::before {
      transform: scaleX(1);
    }
  }

  ${({ animated }) =>
    animated &&
    css`
      animation: 1s ease-in-out ${slidein};
    `}
`;

export const StyledTitle = styled(Title)`
  ${({ animated }) =>
    animated &&
    css`
      animation: 1s ease-in-out ${slidein};
    `}
`;
