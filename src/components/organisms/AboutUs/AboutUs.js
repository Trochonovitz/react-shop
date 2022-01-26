import React from 'react';
import Button from 'components/atoms/Button/Button';
import Text from 'components/atoms/Text/Text';
import { AboutUsSection, AboutUsInfo, Paragraph } from './AboutUs.styles';

const AboutUs = () => (
  <AboutUsSection>
    <AboutUsInfo>
      <Text textType="h3">o nas</Text>
      <Paragraph>
        Chcemy, żeby korzystanie z naszych notesów pomagało w codziennych
        sprawach, a odręczne pisanie dostarczało pozytywnych doznań.
      </Paragraph>
      <Button buttonType="underline">więcej</Button>
    </AboutUsInfo>
  </AboutUsSection>
);

export default AboutUs;
