import styled from 'styled-components';
import { breakpoints } from 'theme/theme';
import { Title } from 'components/atoms/Title/Title';
import { Button } from 'components/atoms/Buttton/Button';

export const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  margin: 20px 0 0 0;
`;

export const BlogHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0 0 0;
`;

export const BlogContent = styled.div`
  @media ${breakpoints.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${breakpoints.laptop} {
    grid-template-columns: repeat(3, 1fr);
    /* padding: 30px 100px; */
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
`;

export const StyledButton = styled(Button)`
  width: 70%;

  @media ${breakpoints.desktop} {
    width: 20%;
  }
`;
