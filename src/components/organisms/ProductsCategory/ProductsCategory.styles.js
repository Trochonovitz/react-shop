import { Button } from 'components/atoms/Buttton/Button';
import styled from 'styled-components';
import { breakpoints } from 'theme/theme';

export const Wrapper = styled.div`
  width: 100%;

  @media ${breakpoints.bigPhone} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${breakpoints.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StyledButton = styled(Button)`
  width: 70%;

  @media ${breakpoints.desktop} {
    width: 25%;
  }
`;
