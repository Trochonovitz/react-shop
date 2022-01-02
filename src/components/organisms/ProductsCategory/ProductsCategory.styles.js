import { Button } from 'components/atoms/Buttton/Button';
import styled from 'styled-components';
import { breakpoints } from 'theme/theme';

export const Wrapper = styled.div`
  width: 100%;
  display: grid;

  @media ${breakpoints.bigPhone} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  @media ${breakpoints.desktop} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 50% 50%;
  }
`;

export const StyledButton = styled(Button)`
  display: grid;
  width: 70%;
  text-decoration: none;
  align-items: center;
  justify-items: center;

  @media ${breakpoints.desktop} {
    width: 25%;
  }
`;
