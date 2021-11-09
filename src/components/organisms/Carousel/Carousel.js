import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slide from 'components/molecules/Slide/Slide';
import { slides } from 'fixtures';
import { StyledCarousel } from 'components/organisms/Carousel/Carousel.styles';

const ItemsCarousel = () => (
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
);

export default ItemsCarousel;
