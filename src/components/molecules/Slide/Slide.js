import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  InfoBox,
  Title,
  StyledButton,
  Subtitle,
} from './Slide.styles';

const Slide = forwardRef(
  ({ cover, title, height, animated, description, main }, ref) => (
    <Wrapper ref={ref} cover={cover} height={height} main={main}>
      <InfoBox>
        {description && <Subtitle textType="p">{description}</Subtitle>}
        <Title textType={'h2'} animated={animated}>
          {title}
        </Title>
        <StyledButton animated={animated} buttonType="transparent">
          Zobacz
        </StyledButton>
      </InfoBox>
    </Wrapper>
  )
);

Slide.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string,
  animated: PropTypes.bool,
};

export default Slide;
