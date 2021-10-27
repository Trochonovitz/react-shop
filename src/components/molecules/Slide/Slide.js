import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledButton, StyledTitle, InfoBox } from './Slide.styles';
import { Description } from 'components/atoms/Description/Description';

const Slide = forwardRef(
  ({ cover, title, children, height, animated, description }, ref) => (
    <Wrapper ref={ref} cover={cover} height={height}>
      {children}
      <InfoBox>
        {description && <Description description>{description}</Description>}
        <StyledTitle animated={animated}>{title}</StyledTitle>
        <StyledButton animated={animated}>Zobacz</StyledButton>
      </InfoBox>
    </Wrapper>
  )
);

Slide.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  animated: PropTypes.bool,
};

export default Slide;
