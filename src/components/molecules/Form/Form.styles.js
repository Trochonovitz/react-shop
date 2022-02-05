import styled from 'styled-components';
import { breakpoints } from 'theme/theme';
import { Input } from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 20px;
  column-gap: 20px;
  margin: 0 0 20px 0;

  @media ${breakpoints.tablet} {
    display: grid;
    grid-template-rows: 50px 300px 50px;
  }
`;

export const StyledInput = styled(Input)`
  @media ${breakpoints.tablet} {
    &:first-child {
      grid-row: 1;
      grid-column: 1;
    }

    &:nth-child(2) {
      grid-row: 1;
      grid-column: 2;
    }

    &:nth-child(3) {
      grid-row: 2;
      grid-column: 1/3;
      height: 100%;
    }
  }
`;

export const StyledButton = styled(Button)`
  @media ${breakpoints.tablet} {
    grid-row: 3;
    grid-column: 1/3;
    justify-self: center;
    width: 100%;
  }
`;
