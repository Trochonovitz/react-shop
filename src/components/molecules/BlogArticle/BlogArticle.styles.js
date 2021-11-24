import styled from 'styled-components';
import { breakpoints } from 'theme/theme';
import { Title } from 'components/atoms/Title/Title';
import { ButtonWithUnderline } from 'components/atoms/ButtonWithUnderline/ButtonWithUnderline';

export const BlogsArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 25px;
  line-height: 1.65rem;
  margin: 0 0 40px 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 40%;
  object-fit: cover;
`;

export const TextBox = styled.div`
  @media ${breakpoints.desktop} {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }
`;

export const StyledParagraph = styled.p`
  color: #595959;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.8rem;
`;

export const StyledTitle = styled(Title)`
  font-size: 1.3rem;
  margin: 0;
`;

export const StyledButtonWithUnderline = styled(ButtonWithUnderline)`
  @media ${breakpoints.desktop} {
    margin: 0 20px;
  }
`;
