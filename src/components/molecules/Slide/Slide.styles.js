import styled from 'styled-components';

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
