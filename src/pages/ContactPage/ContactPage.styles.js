import styled, { css } from 'styled-components';
import { Title } from 'components/atoms/Title/Title';
import { breakpoints } from 'theme/theme';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Buttton/Button';

const TitleMixin = css`
  margin: 0;
  padding: 30px 0;
  text-align: center;
  color: #595959;
`;

export const StyledTitle = styled(Title)`
  ${TitleMixin};
  font-size: 1.4rem;
`;

export const H3Title = styled.h3`
  ${TitleMixin};
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: normal;
  font-size: 1rem;
  padding: 0px;
  margin: 10px 0;
`;

export const Paragraph = styled.p`
  color: #595959;
  line-height: 1.5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 20px;

  @media ${breakpoints.tablet} {
    width: 40%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 20px;
  column-gap: 20px;

  @media ${breakpoints.tablet} {
    display: grid;
    grid-template-rows: 50px 300px 50px;
  }
`;

export const StyledInput = styled(Input)`
  @media ${breakpoints.tablet} {
    &:first-child {
      grid-row: 1;
      grid-column: 1;
    }

    &:nth-child(2) {
      grid-row: 1;
      grid-column: 2;
    }

    &:nth-child(3) {
      grid-row: 2;
      grid-column: 1/3;
      height: 100%;
    }
  }
`;

export const StyledButton = styled(Button)`
  @media ${breakpoints.tablet} {
    grid-row: 3;
    grid-column: 1/3;
    justify-self: center;
    width: 100%;
  }
`;
