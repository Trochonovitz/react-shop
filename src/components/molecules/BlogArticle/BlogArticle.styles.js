import styled from 'styled-components';

export const BlogsArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 25px;
  line-height: 1.65rem;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const StyledParagraph = styled.p`
  color: #595959;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.8rem;
`;

export const BlogTitle = styled.h1`
  color: #595959;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 0.2em;
  font-size: 1.3rem;
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
