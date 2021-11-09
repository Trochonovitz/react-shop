import styled from 'styled-components';
import { breakpoints } from 'theme/theme';

export const Wrapper = styled.div`
  width: 100%;

  @media ${breakpoints.bigPhone} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
