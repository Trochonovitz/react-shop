import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Wrapper,
  Title,
  Paragraph,
  StyledUl,
  StyledElement,
  TextBox,
  StyledButton,
  Form,
  StyledInput,
} from './Footer.styles';

const options = [
  'FAQ',
  'Dostawa i płatność',
  'Zwroty i reklamacje',
  'Polityka prywatności',
  'Regulamin',
  'Kontakt',
];

const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert(`Gratulacje, ${data.Email}! Zapisałeś się do naszego newslettera!`);
    reset();
  };

  return (
    <Wrapper>
      <TextBox>
        <Title textType="h2">strefa klienta</Title>
        <StyledUl>
          {options.map((option, index) => (
            <StyledElement key={index} as={Link} to="#">
              {option}
            </StyledElement>
          ))}
        </StyledUl>
      </TextBox>
      <TextBox>
        <Title textType="h2">Odwiedź nasz sklep</Title>
        <Paragraph>
          Kraków, ul. Limanowskiego 18
          <br />
          <br />
          godziny otwarcia:
          <br />
          12.00 – 18.00 (pn – pt),
          <br />
          12.00 – 16.00 (sb)
          <br />
          <br />
          tel. 504 865 233
        </Paragraph>
      </TextBox>
      <TextBox>
        <Title textType="h2">newsletter</Title>
        <Paragraph>
          Zapisz się do naszego newslettera i bądź na bieżąco z nowościami.
        </Paragraph>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            type="email"
            placeholder="Podaj adres e-mail"
            {...register('Email', { required: true })}
          />
          <StyledButton type="submit" buttonType="green">
            Zapisz się
          </StyledButton>
        </Form>
      </TextBox>
    </Wrapper>
  );
};

export default Footer;
