import React from 'react';
import { ButtonWithUnderline } from 'components/atoms/ButtonWithUnderline/ButtonWithUnderline';
import {
  AboutUsSection,
  AboutUsInfo,
  StyledTitle,
  StyledParagraph,
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
