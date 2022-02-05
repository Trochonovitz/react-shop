import styled from 'styled-components';
import { breakpoints } from 'theme/theme';
import { Link } from 'react-router-dom';

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

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 100%;
  margin: 50px 0;

  @media ${breakpoints.desktop} {
    width: 50%;
  }
`;
