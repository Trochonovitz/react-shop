import styled, { css } from 'styled-components';
import { breakpoints } from 'theme/theme';

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: ${({ height }) => `${height}`};
  background-image: url(${({ cover }) => cover});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${({ main }) =>
    main &&
    css`
      @media ${breakpoints.phone} {
        height: 95vh;
      }
    `}
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: end;
  padding: 0 0 50px 20px;
`;
