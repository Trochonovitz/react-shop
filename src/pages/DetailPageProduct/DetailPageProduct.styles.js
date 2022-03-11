import Text from 'components/atoms/Text/Text';
import styled from 'styled-components';
import { breakpoints, colors, sizes } from 'theme/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${breakpoints.desktop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 40px;
  }
`;

export const Image = styled.img`
  width: 100%;

  @media ${breakpoints.desktop} {
    padding: 40px 0 40px 40px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 20px;

  @media ${breakpoints.desktop} {
    align-items: flex-start;
    padding: 40px 0 40px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 20px 20px;

  @media ${breakpoints.phone} {
    padding: 0 40px;
  }

  @media ${breakpoints.bigPhone} {
    padding: 0 60px;
  }

  @media ${breakpoints.desktop} {
    padding: 0 40px 40px 0;
  }
`;

export const Title = styled(Text)`
  color: ${colors.darkGrey};
  font-size: ${sizes.m};
  font-weight: normal;
  margin: 20px 0;

  @media ${breakpoints.desktop} {
    font-size: ${sizes.l};
  }
`;

export const Subtitle = styled(Text)`
  color: ${colors.darkGrey};

  &:last-child {
    @media ${breakpoints.desktop} {
      font-size: ${sizes.l};
    }
  }
`;

export const Description = styled.div`
  border-top: 1px solid ${colors.veryLightGrey};
  line-height: ${sizes.xxl};
  font-size: ${sizes.m};
  color: ${colors.darkGrey};
`;

export const AdditionalInformations = styled.div`
  border-top: 1px solid ${colors.lightGrey};
  border-bottom: 1px solid ${colors.veryLightGrey};
  margin: 0 0 20px;

  @media ${breakpoints.phone} {
    margin: 40px;
  }

  @media ${breakpoints.bigPhone} {
    margin: 60px;
  }

  @media ${breakpoints.desktop} {
    margin: 40px;
  }
`;

export const ShowContentButton = styled.button`
  padding: 0 20px;
  border: none;
  background: transparent;
  width: 100%;
  cursor: pointer;
  display: flex;
`;

export const StyledText = styled(Text)`
  font-size: ${sizes.m};
`;
