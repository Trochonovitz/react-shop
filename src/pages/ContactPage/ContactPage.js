import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Form from 'components/molecules/Form/Form';
import { Title, Subtitle, Paragraph, Wrapper } from './ContactPage.styles';

const ContactPage = () => (
  <MainTemplate>
    <Title textType="h2">Kontakt</Title>
    <Wrapper>
      <Subtitle textType="h3">Skontaktuj się z nami</Subtitle>
      <Paragraph>
        telefon: 504 865 233 (poniedziałek–piątek: 12–18)
        <br />
        reklamacje, zwroty, wymiana towaru: help@papierniczeni.pl
        <br />
        pozostałe sprawy: hej@papierniczeni.pl
      </Paragraph>
      <Subtitle textType="h3">Sklep stacjonarny</Subtitle>
      <Paragraph>
        Papierniczeni
        <br />
        ul. Limanowskiego 18
        <br />
        30-534 Kraków
      </Paragraph>
      <Paragraph>
        godziny otwarcia:
        <br />
        poniedziałek–piątek: 12–18
        <br />
        sobota: 12–16
      </Paragraph>
      <Paragraph>
        Parkowanie: jesteśmy w samym sercu starego Podgórza – dzielnicy, która
        słynie z tajemniczych zakątków i ciasnych uliczek. Jeśli będziecie mieli
        problem z zaparkowaniem, najbliższy parking znajdziecie na ul.
        Zamoyskiego 17, tuż przy Klubie Sportowym Korona. Stamtąd dotrzecie do
        nas spacerkiem w ok. 7 minut.
      </Paragraph>
      <Form />
    </Wrapper>
  </MainTemplate>
);

export default ContactPage;
