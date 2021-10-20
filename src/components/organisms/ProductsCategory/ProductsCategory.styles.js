import styled, { css } from 'styled-components';
import { Button } from '../../atoms/Buttton/Button';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const StyledButton = styled(Button)`
  ${({ animated }) =>
    animated &&
    css`
      @keyframes slidein {
        from {
          transform: translateY(100%);
          opacity: 0;
        }

        to {
          transform: translateY(0%);
          opacity: 1;
        }
      }

      animation: 1s ease-in-out slidein;
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #d4e4d4;
      color: #303030;
      width: 70%;
      margin: 25px 0;
    `}
`;
