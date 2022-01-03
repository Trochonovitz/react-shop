import styled from 'styled-components';
import { breakpoints } from 'theme/theme';
import { Title } from 'components/atoms/Title/Title';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledTitle = styled(Title)`
  margin: 0;
  padding: 30px 0;
  font-size: 1.4rem;
  text-align: center;
`;

export const BlogContent = styled.div`
  @media ${breakpoints.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${breakpoints.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
