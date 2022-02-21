import styled, { css } from 'styled-components';
import { colors } from 'theme/theme';
import Text from 'components/atoms/Text/Text';
import Button from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: ${({ height, main }) => (main ? '100vh' : `${height}`)};
  background-image: url(${({ cover }) => cover});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  ${({ main }) =>
    main &&
    css`
      top: ${({ $navHeight }) => `-${$navHeight + 1}px`};
      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
      }
    `}
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: end;
  margin: 0 0 50px 30px;
`;

export const StyledButton = styled(Button)`
  width: 130px;
  margin: 10px 0;
`;

export const Title = styled(Text)`
  z-index: 1;
  color ${colors.white};
`;

export const Subtitle = styled(Text)`
  color: ${colors.white};
`;
