import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { NavigationHeightContext } from 'templates/MainTemplate/MainTemplate';
import {
  Wrapper,
  InfoBox,
  Title,
  StyledButton,
  Subtitle,
} from './Slide.styles';

const Slide = forwardRef(
  ({ cover, title, height, animated, description, main }, ref) => {
    const { heightNav } = useContext(NavigationHeightContext);

    return (
      <Wrapper
        ref={ref}
        cover={cover}
        height={height}
        main={main}
        $navHeight={heightNav}
      >
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
    );
  }
);

Slide.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
  animated: PropTypes.bool,
  description: PropTypes.string,
  main: PropTypes.bool,
};

export default Slide;
