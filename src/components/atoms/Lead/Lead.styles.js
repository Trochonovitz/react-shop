import styled from 'styled-components';
import Text from 'components/atoms/Text/Text';
import { breakpoints, colors, sizes } from 'theme/theme';

export const StyledText = styled(Text)`
  margin: 0 0 0 26px;
  line-height: ${sizes.xxl};
  position: relative;

  &:before {
    position: absolute;
    content: '';
    background-color: ${colors.lightGrey};
    height: 100%;
    width: 3px;
    top: 0px;
    left: -25px;

    @media ${breakpoints.laptop} {
      left: -40px;
    }
  }
`;
