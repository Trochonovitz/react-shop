import styled from 'styled-components';
import Text from 'components/atoms/Text/Text';
import { breakpoints, colors, sizes } from 'theme/theme';

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px 20px;

  @media ${breakpoints.bigPhone} {
    padding: 0 40px 40px;
  }

  @media ${breakpoints.laptop} {
    width: 80%;
  }

  @media ${breakpoints.desktop} {
    width: 40%;
  }
`;

export const Title = styled(Text)`
  color: ${colors.darkGrey};
  padding: 30px 0;

  @media ${breakpoints.tablet} {
    font-size: ${sizes.l};
  }
`;

export const Paragraph = styled(Text)`
  line-height: ${sizes.xxl};
  padding: 10px 0;

  @media ${breakpoints.tablet} {
    font-size: ${sizes.m};
    padding: 20px 0;
  }
`;
