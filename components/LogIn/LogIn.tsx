import React from 'react';
import styled from 'styled-components';
import { Input, Button } from 'components';
import { colors } from 'shared/colors';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from 'utils/hooks';
import { signIn } from 'ducks/user';

type Fields = {
  email: string;
  password: string;
};
export const LogIn = ({ nextTab }) => {
  const { register, handleSubmit } = useForm<Fields>();
  const dispatch = useAppDispatch();
  const sendLoginData: SubmitHandler<Fields> = fields => {
    dispatch(signIn({ ...fields }));
    nextTab();
  };

  return (
    <Container>
      <Title>Log in</Title>
      <Form
        method="POST"
        onSubmit={handleSubmit(sendLoginData, error => console.log(error))}
      >
        <Input
          type="text"
          placeholder="Email"
          register={{
            ...register('email', {
              required: true,
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Incorrect email',
              },
            }),
          }}
        />
        <Input
          type="password"
          placeholder="Password"
          register={{ ...register('password', { required: true }) }}
        />
        <Button UIType="primary" padding="20px 77.5px" margin="24px 0 0 0">
          Log in
        </Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  padding-bottom: 426px;
`;

const Title = styled.h1`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 54px;
  color: ${colors.neutral.white};
  padding-bottom: 32px;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
