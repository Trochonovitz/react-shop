import React from 'react';
import { useMediaQuery } from 'react-responsive';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { slides } from 'fixtures';
import Slide from 'components/molecules/Slide/Slide';
import {
  StyledCarousel,
  Wrapper,
} from 'components/organisms/Carousel/Carousel.styles';
import { breakpoints } from 'theme/theme.js';

const ItemsCarousel = () => {
  const carouselConvert = useMediaQuery({ query: breakpoints.bigPhone });

  return (
    <>
      {carouselConvert ? (
        <Wrapper>
          {slides.map((item, index) => (
            <Slide
              height={'500px'}
              cover={item.link}
              title={item.title}
              description={item.description}
              key={`${item.title}${index}`}
            />
          ))}
        </Wrapper>
      ) : (
        <StyledCarousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          emulateTouch={true}
          dynamicHeight={false}
        >
          {slides.map((item, index) => (
            <Slide
              height={'500px'}
              cover={item.link}
              title={item.title}
              description={item.description}
              key={`${item.title}${index}`}
            />
          ))}
        </StyledCarousel>
      )}
    </>
  );
};

export default ItemsCarousel;
