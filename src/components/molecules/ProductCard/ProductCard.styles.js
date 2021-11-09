import styled from 'styled-components';
import { breakpoints } from 'theme/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 10px;
`;

export const Image = styled.img`
  justify-self: center;
  align-self: center;
  object-fit: cover;
  cursor: pointer;
  width: 350px;
  height: 350px;

  @media ${breakpoints.phone} {
    width: 544px;
    height: 544px;
  }

  @media ${breakpoints.bigPhone} {
    width: 100%;
    height: 100%;
  }
`;

export const Header2 = styled.h4`
  justify-self: center;
  align-self: center;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: #595959;
  margin: 10px 0 0 0;
  font-weight: normal;
  cursor: pointer;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: 3px solid black;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  padding: 10px;
`;
