import React from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import { Layout, Input, Button } from 'components';
import styled from 'styled-components';
import { colors } from 'shared/colors';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from 'utils/hooks';
import { actions } from 'ducks';
import { wrapper } from 'store';

type Fields = {
  username: string;
  email: string;
  currentPassword: string;
  newPassword: string;
};
const Settings: NextPage<{ serverSideUsername: string }> = ({
  serverSideUsername,
}) => {
  console.log(serverSideUsername);
  const { register, handleSubmit, reset } = useForm<Fields>();
  const dispatch = useAppDispatch();
  const saveAllChanges: SubmitHandler<Fields> = fields => {
    dispatch(
      actions.updatePersonalData({
        username: fields.username,
        email: fields.email,
      }),
    );
    dispatch(
      actions.updatePassword({
        currentPassword: fields.currentPassword,
        newPassword: fields.newPassword,
      }),
    );
    reset();
  };
  return (
    <Layout serverSideUsername={serverSideUsername}>
      <Container>
        <Title>Settings</Title>
        <Form method="POST" onSubmit={handleSubmit(saveAllChanges)}>
          <div style={{ display: 'flex', gap: '60px' }}>
            <PersonalInfo>
              <PersonalInfoTitle>Personal Info</PersonalInfoTitle>
              <Input
                type="text"
                placeholder="Username"
                register={{ ...register('username', { required: true }) }}
              />
              <Input
                type="email"
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
            </PersonalInfo>
            <ChangePassword>
              <ChangePasswordTitle>Change Password</ChangePasswordTitle>
              <Input
                type="password"
                placeholder="Current Password"
                register={{
                  ...register('currentPassword', { required: true }),
                }}
              />
              <Input
                type="password"
                placeholder="New Password"
                register={{ ...register('newPassword', { required: true }) }}
              />
            </ChangePassword>
          </div>
          <Button padding="26px 42px" UIType="primary">
            Save all changes
          </Button>
        </Form>
      </Container>
    </Layout>
  );
};

export default Settings;

const Container = styled.div`
  max-width: 1262px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 444px;
`;
const Title = styled.h1`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 64px;
  color: ${colors.neutral.white};
`;
const Form = styled.form`
  display: flex;
  gap: 60px;
  margin-top: 48px;
  flex-direction: column;
`;
const PersonalInfo = styled.div`
  max-width: 484px;
  flex-grow: 1;
  display: flex;
  gap: 24px;
  flex-direction: column;
`;
const PersonalInfoTitle = styled.h2`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  color: ${colors.neutral.white};
`;

const ChangePassword = styled(PersonalInfo)``;
const ChangePasswordTitle = styled(PersonalInfoTitle)``;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(store => async ({ req }) => ({
    props: { serverSideUsername: req.cookies.username },
  }));
