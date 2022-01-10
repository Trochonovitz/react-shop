import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Wrapper,
  StyledTitle,
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
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert(`Gratulacje, ${data.Email}! Zapisałeś się do naszego newslettera!`);
    reset();
  };

  return (
    <Wrapper>
      <TextBox>
        <StyledTitle color={'#303030'}>strefa klienta</StyledTitle>
        <StyledUl>
          {options.map((option, index) => (
            <StyledElement key={`${option}${index}`} as={Link} to="#">
              {option}
            </StyledElement>
          ))}
        </StyledUl>
      </TextBox>
      <TextBox>
        <StyledTitle color={'#303030'}>Odwiedź nasz sklep</StyledTitle>
        <Paragraph>Kraków, ul. Limanowskiego 18</Paragraph>
        <br />
        <Paragraph>
          godziny otwarcia:
          <br />
          12.00 – 18.00 (pn – pt),
          <br /> 12.00 – 16.00 (sb)
        </Paragraph>
        <br />
        <Paragraph>tel. 504 865 233</Paragraph>
      </TextBox>
      <TextBox>
        <StyledTitle color={'#303030'}>newsletter</StyledTitle>
        <Paragraph>
          Zapisz się do naszego newslettera i bądź na bieżąco z nowościami.
        </Paragraph>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            type="email"
            placeholder="Podaj adres e-mail"
            {...register('Email', { required: true })}
          />
          <StyledButton
            type="submit"
            backgroundColor={'#d4e4d4'}
            backgroundColorHover={'#f3f3f3'}
            fontColorMain={'#303030'}
            fontColorHover={'#bbccbb'}
            borderColor={'#bbccbb'}
          >
            Zapisz się
          </StyledButton>
        </Form>
      </TextBox>
    </Wrapper>
  );
};

export default Footer;
