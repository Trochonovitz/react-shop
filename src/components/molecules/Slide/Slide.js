import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, InfoBox } from './Slide.styles';
import { Description } from 'components/atoms/Description/Description';
import { Button } from 'components/atoms/Buttton/Button';
import { Title } from 'components/atoms/Title/Title';

const Slide = forwardRef(
  ({ cover, title, children, height, animated, description }, ref) => (
    <Wrapper ref={ref} cover={cover} height={height}>
      {children}
      <InfoBox>
        {description && <Description description>{description}</Description>}
        <Title animated={animated}>{title}</Title>
        <Button
          width={'100px'}
          backgroundColor={'#fff'}
          backgroundColorHover={'transparent'}
          fontColorMain={'#363636'}
          fontColorHover={'#fff'}
          borderColor={'#fff'}
          animated={animated}
        >
          Zobacz
        </Button>
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
