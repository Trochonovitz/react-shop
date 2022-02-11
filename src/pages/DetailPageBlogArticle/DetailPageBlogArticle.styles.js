import Text from 'components/atoms/Text/Text';
import styled from 'styled-components';
import { colors, sizes } from 'theme/theme';

export const Image = styled.img`
  width: 100%;
`;

export const Wrapper = styled.article``;

export const Header = styled.header`
  padding: 20px 20px 10px 20px;
`;

export const Title = styled(Text)`
  color: ${colors.darkGrey};
  margin: 20px 0;
`;

export const Subtitle = styled(Text)`
  margin: 10px 0;
`;

export const Lead = styled(Text)`
  padding: 10px 70px;
  line-height: ${sizes.xxl};
  position: relative;

  &:before {
    position: absolute;
    content: '';
    background-color: ${colors.lightGrey};
    height: 100%;
    width: 3px;
    top: 0;
    left: 20px;
  }
`;

export const Content = styled.div`
  padding: 20px;
  line-height: ${sizes.xxl};
`;
