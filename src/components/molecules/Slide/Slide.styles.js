import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ height }) => `${height}`};
  background-image: url(${({ cover }) => cover});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${({ main }) =>
    main &&
    css`
      position: absolute;
      top: 0;
    `}
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* margin: 0 0 50px 20px; */
`;
