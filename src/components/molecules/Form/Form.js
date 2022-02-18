import React from 'react';
import { useForm } from 'react-hook-form';
import { Wrapper, StyledInput, StyledButton } from './Form.styles';

const Form = ({ ...props }) => {
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
    <Wrapper onSubmit={handleSubmit(onSubmit)} {...props}>
      <StyledInput placeholder="Imię i nazwisko" {...register('name')} />
      <StyledInput type="email" placeholder="E-mail" {...register('email')} />
      <StyledInput placeholder="Twoja wiadomość" {...register('message')} />
      <StyledButton type="submit" buttonType="green">
        Wyślij
      </StyledButton>
    </Wrapper>
  );
};

export default Form;
