import styled from 'styled-components';
import { breakpoints, colors } from 'theme/theme';
import Text from 'components/atoms/Text/Text';
import Button from 'components/atoms/Button/Button';

export const BlogsArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 25px;
  line-height: 1.65rem;
  margin: 0 0 40px 0;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const TextBox = styled.div`
  @media ${breakpoints.desktop} {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }
`;

export const StyledText = styled(Text)`
  font-size: 0.8rem;
`;

export const Title = styled(Text)`
  font-size: 1.3rem;
  color: ${colors.darkGrey};
`;

export const StyledButton = styled(Button)`
  @media ${breakpoints.desktop} {
    margin: 0 20px;
  }
`;

export const Category = styled(Text)`
  color: ${colors.darkGrey};
`;
