import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, InfoBox } from './Slide.styles';
import { Description } from 'components/atoms/Description/Description';
import { Button } from 'components/atoms/Buttton/Button';
import { Title } from 'components/atoms/Title/Title';

const Slide = forwardRef(
  ({ cover, title, height, animated, description, main }, ref) => (
    <Wrapper ref={ref} cover={cover} height={height} main={main}>
      <InfoBox>
        {description && <Description description>{description}</Description>}
        <Title color={'#fff'} animated={animated}>
          {title}
        </Title>
        <Button
          width={'130px'}
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
  title: PropTypes.string.isRequired,
  cover: PropTypes.string,
  animated: PropTypes.bool,
};

export default Slide;
