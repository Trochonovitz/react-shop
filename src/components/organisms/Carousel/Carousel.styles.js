import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import { breakpoints } from 'theme/theme';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  @media ${breakpoints.tablet} {
    margin: 60px 0 0 0;
  }

  @media ${breakpoints.laptop} {
    margin: 0;
  }
`;
export const StyledCarousel = styled(Carousel)`
  width: 100%;
`;
