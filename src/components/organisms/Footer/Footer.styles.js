import styled from 'styled-components';
import { breakpoints } from 'theme/theme';
import { Title } from 'components/atoms/Title/Title';
import { Button } from 'components/atoms/Buttton/Button';
import { Input } from 'components/atoms/Input/Input';

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
  padding: 24px;
  width: 100%;

  @media ${breakpoints.tablet} {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
  }

  @media ${breakpoints.desktop} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100%;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
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

export const Paragraph = styled.p`
  color: #595959;
  line-height: 1.65;
  font-size: 0.9rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled(Button)`
  width: 50%;
`;

export const StyledInput = styled(Input)`
  margin: 10px 0 30px;
  padding: 0 20px;
`;
