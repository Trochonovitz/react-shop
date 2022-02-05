import React from 'react';
import Button from 'components/atoms/Button/Button';
import {
  AboutUsSection,
  AboutUsInfo,
  Paragraph,
  Title,
} from './AboutUs.styles';

const AboutUs = () => (
  <AboutUsSection>
    <AboutUsInfo>
      <Title textType="h3">o nas</Title>
      <Paragraph>
        Chcemy, żeby korzystanie z naszych notesów pomagało w codziennych
        sprawach, a odręczne pisanie dostarczało pozytywnych doznań.
      </Paragraph>
      <Button buttonType="underline">więcej</Button>
    </AboutUsInfo>
  </AboutUsSection>
);

export default AboutUs;
