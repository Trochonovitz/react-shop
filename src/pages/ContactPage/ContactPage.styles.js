import styled, { css } from 'styled-components';
import { Title } from 'components/atoms/Title/Title';
import { breakpoints } from 'theme/theme';

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
