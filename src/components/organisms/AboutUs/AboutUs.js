import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/o nas">
        <Button buttonType="underline">więcej</Button>
      </Link>
    </AboutUsInfo>
  </AboutUsSection>
);

export default AboutUs;
