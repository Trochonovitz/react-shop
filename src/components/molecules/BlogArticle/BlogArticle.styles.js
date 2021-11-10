import { Title } from 'components/atoms/Title/Title';
import styled from 'styled-components';
import { breakpoints } from 'theme/theme';

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

export const BlogButton = styled.button`
  background-color: transparent;
  color: #595959;
  border: none;
  padding: 0 0 5px 0;
  font-size: 0.9rem;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  position: relative;

  @media ${breakpoints.desktop} {
    margin: 0 20px;
  }

  &::before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #595959;
    position: absolute;
    top: 100%;
    left: 0;
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    &::before {
      transform: scaleX(0);
    }
  }
`;
