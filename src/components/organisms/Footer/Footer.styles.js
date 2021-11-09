import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
  padding: 24px;
  width: 100%;
`;

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

export const StyledElement = styled.li`
  text-decoration: none;
  color: #595959;
  margin: 0 0 20px 0;
  font-size: 0.9rem;

  &:first-child {
    margin: 20px 0 20px 0;
  }

  &:hover {
    color: #303030;
  }
`;

export const StyledTitle = styled(Title)`
  font-size: 0.9rem;
`;

export const StyledParagraph = styled.p`
  color: #595959;
  line-height: 1.65;
  font-size: 0.9rem;
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: 1px solid #e0e0e0;
  height: 50px;
  margin: 10px 0 30px;
  padding: 0 20px;

  &::placeholder {
    color: #595959;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
  }
`;
