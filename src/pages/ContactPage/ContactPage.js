import React from 'react';
import { useForm } from 'react-hook-form';
import MainTemplate from 'templates/MainTemplate';
import {
  StyledTitle,
  H3Title,
  Paragraph,
  Wrapper,
  Form,
  StyledInput,
  StyledButton,
} from './ContactPage.styles';

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <MainTemplate>
      <StyledTitle color="#595959">Kontakt</StyledTitle>
      <Wrapper>
        <H3Title>Skontaktuj się z nami</H3Title>
        <Paragraph>
          telefon: 504 865 233 (poniedziałek–piątek: 12–18)
          <br />
          reklamacje, zwroty, wymiana towaru: help@papierniczeni.pl
          <br />
          pozostałe sprawy: hej@papierniczeni.pl
        </Paragraph>
        <H3Title>Sklep stacjonarny</H3Title>
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
          słynie z tajemniczych zakątków i ciasnych uliczek. Jeśli będziecie
          mieli problem z zaparkowaniem, najbliższy parking znajdziecie na ul.
          Zamoyskiego 17, tuż przy Klubie Sportowym Korona. Stamtąd dotrzecie do
          nas spacerkiem w ok. 7 minut.
        </Paragraph>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <StyledInput placeholder="Imię i nazwisko" {...register('Name')} />
          <StyledInput
            type="email"
            placeholder="E-mail"
            {...register('Email')}
          />
          <StyledInput placeholder="Twoja wiadomość" {...register('Message')} />
          <StyledButton
            type="submit"
            backgroundColor={'#d4e4d4'}
            backgroundColorHover={'#fff'}
            fontColorMain={'#303030'}
            fontColorHover={'#bbccbb'}
            borderColor={'#bbccbb'}
          >
            Wyślij
          </StyledButton>
        </Form>
      </Wrapper>
    </MainTemplate>
  );
};

export default ContactPage;
