import React from 'react';
import {
  AboutUsSection,
  AboutUsInfo,
  StyledTitle,
  StyledParagraph,
  ButtonWithUnderline,
} from './AboutUs.styles';

const AboutUs = () => (
  <AboutUsSection>
    <AboutUsInfo>
      <StyledTitle>o nas</StyledTitle>
      <StyledParagraph>
        Chcemy, żeby korzystanie z naszych notesów pomagało w codziennych
        sprawach, a odręczne pisanie dostarczało pozytywnych doznań.
      </StyledParagraph>
      <ButtonWithUnderline>więcej</ButtonWithUnderline>
    </AboutUsInfo>
  </AboutUsSection>
);

export default AboutUs;
