import styled from 'styled-components';
import { breakpoints, colors, sizes } from 'theme/theme';
import Text from 'components/atoms/Text/Text';
import Button from 'components/atoms/Button/Button';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.65rem;
  justify-content: space-between;
  margin: 0 0 20px 0;
`;

export const Image = styled.img`
  width: 100%;

  @media ${breakpoints.tablet} {
    height: 35%;
    object-fit: cover;
  }

  @media ${breakpoints.laptop} {
    height: 25%;
  }

  @media ${breakpoints.desktop} {
    height: 35%;
  }
`;

export const TextBox = styled.div`
  @media ${breakpoints.desktop} {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled(Text)`
  font-size: ${sizes.xl};
  color: ${colors.darkGrey};
  padding: 10px 0 20px 0;
`;

export const Category = styled(Text)`
  color: ${colors.darkGrey};
  padding: 10px 0 0;
`;

export const StyledButton = styled(Button)`
  margin: 20px 0 0;
`;
