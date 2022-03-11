import Text from 'components/atoms/Text/Text';
import styled from 'styled-components';
import { colors, sizes } from 'theme/theme';

export const Wrapper = styled.div`
  display: flex;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 0 0 10px;
`;

export const Image = styled.img`
  height: 80px;
  width: 80px;
  object-fit: cover;
`;

export const Title = styled(Text)`
  font-weight: normal;
  font-size: ${sizes.s};
  color: ${colors.grey};
`;
