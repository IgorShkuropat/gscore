import React from 'react';
import styled from 'styled-components';
import { Input, Button } from 'components';
import { colors } from 'shared/colors';

export const CreateAccount = ({ nextTab }) => {
  return (
    <Container>
      <Title>Create account</Title>
      <Subtitle>
        You need to enter your name and email. We will send you a temporary
        password by email
      </Subtitle>
      <Form>
        <Input placeholder="Username" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button
          UIType="primary"
          onClick={nextTab}
          padding="20px 42.5px"
          margin="24px 0 0 0"
        >
          Send password
        </Button>
      </Form>
      <NextStepLinkContainer>
        <Question>Have an account?</Question>
        <NextStepLink onClick={nextTab}>Go to the next step</NextStepLink>
      </NextStepLinkContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 48px;
`;
const Title = styled.h1`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 54px;
  color: ${colors.neutral.white};
  padding-bottom: 16px;
`;
const Subtitle = styled.p`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.neutral.white};
  padding-bottom: 32px;
`;

const NextStepLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 228px;
`;

const Question = styled.span`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: ${colors.neutral.white};
`;

const NextStepLink = styled.a`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  text-decoration-line: underline;
  color: ${colors.primary};
  cursor: pointer;
`;
