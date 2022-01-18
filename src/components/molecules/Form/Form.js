import React from 'react';
import { useForm } from 'react-hook-form';
import { Wrapper, StyledInput, StyledButton } from './Form.styles';

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();
  const onSubmit = ({ name }) => {
    alert(
      `Dziękujemy za Twoją wiadomość, ${name}. Przekażemy ją do naszego działu sprzedaży i niezwłocznie się skontaktujemy!`
    );
    reset();
  };
  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <StyledInput placeholder="Imię i nazwisko" {...register('name')} />
      <StyledInput type="email" placeholder="E-mail" {...register('email')} />
      <StyledInput placeholder="Twoja wiadomość" {...register('message')} />
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
    </Wrapper>
  );
};

export default Form;
