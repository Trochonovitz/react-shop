import styled from 'styled-components';
import { breakpoints } from 'theme/theme';
import { Title } from 'components/atoms/Title/Title';
import { Button } from 'components/atoms/Buttton/Button';

export const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BlogHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BlogContent = styled.div`
  @media ${breakpoints.desktop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 30px 100px;
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
