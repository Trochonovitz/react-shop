import styled from 'styled-components';
import { breakpoints, colors, sizes } from 'theme/theme';
import { Input } from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Text from 'components/atoms/Text/Text';

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: ${colors.lightGrey};
  padding: 24px;
  width: 100%;

  @media ${breakpoints.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
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
  color: ${colors.darkGrey};
  margin: 0 0 20px 0;
  font-size: ${sizes.m};

  &:hover {
    color: ${colors.black};
  }
`;

export const Title = styled(Text)`
  color: ${colors.darkGrey};
  font-size: ${sizes.l};
  margin: 0 0 20px 0;
`;

export const Paragraph = styled(Text)`
  line-height: 1.65;
  font-size: ${sizes.m};
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
