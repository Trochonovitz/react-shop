import styled from 'styled-components';
import { colors } from 'theme/theme';

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid ${colors.veryLightGrey};
  height: 50px;

  &::placeholder {
    color: ${colors.darkGrey};
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
  }
`;
