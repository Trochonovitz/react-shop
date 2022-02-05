import styled from 'styled-components';
import { breakpoints, colors } from 'theme/theme';
import Text from 'components/atoms/Text/Text';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px;

  @media ${breakpoints.tablet} {
    width: 40%;
  }
`;

export const Title = styled(Text)`
  color: ${colors.darkGrey};
  margin: 30px 0;
`;

export const Subtitle = styled(Text)`
  color: ${colors.darkGrey};
  margin: 10px 0;
`;

export const Paragraph = styled(Text)`
  line-height: 1.5rem;
  margin: 10px 0;
`;
