import React from 'react';
import styled from 'styled-components';
import { Input, Button } from 'components';
import { colors } from 'shared/colors';

export const LogIn = ({ nextTab }) => {
  return (
    <Container>
      <Title>Log in</Title>
      <Form>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button
          UIType="primary"
          onClick={nextTab}
          padding="20px 77.5px"
          margin="24px 0 0 0"
        >
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
