import Text from 'components/atoms/Text/Text';
import styled from 'styled-components';
import { colors, sizes } from 'theme/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${colors.darkBeige};
`;

export const StyledText = styled(Text)`
  letter-spacing: 0.2em;
  text-align: center;
  text-transform: uppercase;
  font-size: ${sizes.s};
  padding: 15px;
`;
