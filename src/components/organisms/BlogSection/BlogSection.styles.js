import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints, colors, sizes } from 'theme/theme';
import Text from 'components/atoms/Text/Text';

export const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${colors.lightGrey};
  margin: 50px 0 50px 0;
  padding: 0 25px;
`;

export const BlogHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0 0;
`;

export const BlogContent = styled.div`
  margin: 0 0 50px 0;

  @media ${breakpoints.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
  }

  @media ${breakpoints.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Title = styled(Text)`
  color: ${colors.darkGrey};
  font-size: ${sizes.xl};
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 100%;

  @media ${breakpoints.desktop} {
    width: 50%;
  }
`;
