import React from 'react';
import { useMediaQuery } from 'react-responsive';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { slides } from 'fixtures';
import { breakpoints } from 'theme/theme.js';
import Slide from 'components/molecules/Slide/Slide';
import {
  Wrapper,
  StyledCarousel,
} from 'components/organisms/Carousel/Carousel.styles';

const Carousel = () => {
  const carouselConvert = useMediaQuery({ query: breakpoints.bigPhone });

  return (
    <>
      {carouselConvert ? (
        <Wrapper>
          {slides.map((item, index) => (
            <Slide
              key={index}
              height={'500px'}
              cover={item.link}
              title={item.title}
              description={item.description}
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
              key={index}
              height={'500px'}
              cover={item.link}
              title={item.title}
              description={item.description}
            />
          ))}
        </StyledCarousel>
      )}
    </>
  );
};

export default Carousel;
