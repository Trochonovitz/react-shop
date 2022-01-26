import styled from 'styled-components';
import { breakpoints } from 'theme/theme';
import Text from 'components/atoms/Text/Text';

export const Title = styled(Text)`
  font-size: 1.4rem;
`;

export const H3Title = styled(Text)`
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
