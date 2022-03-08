import styled from 'styled-components';
import Text from 'components/atoms/Text/Text';
import { breakpoints, colors, sizes } from 'theme/theme';

export const Image = styled.img`
  width: 100%;

  @media ${breakpoints.desktop} {
    height: 60vh;
    object-fit: cover;
  }
`;

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;

  @media ${breakpoints.bigPhone} {
    position: relative;
    padding: 120px 30px 30px;
    width: calc(100% - 40px);
  }

  @media ${breakpoints.tablet} {
    width: calc(100% - 150px);
  }

  @media ${breakpoints.laptop} {
    width: 60%;
    padding: 120px 60px 30px;
  }

  @media ${breakpoints.desktop} {
    width: 60%;
  }

  @media ${breakpoints.fullHD} {
    width: 40%;
  }
`;

export const Header = styled.header`
  @media ${breakpoints.bigPhone} {
    position: absolute;
    background-color: ${colors.white};
    top: -50px;
    padding: 30px;
  }
`;

export const Title = styled(Text)`
  color: ${colors.darkGrey};
  margin: 20px 0;
`;

export const Subtitle = styled(Text)`
  margin: 10px 0;
`;

export const Content = styled.div`
  line-height: ${sizes.xxl};
  margin: 10px 0 0;

  @media ${breakpoints.phone} {
    font-size: ${sizes.m};
  }
`;
