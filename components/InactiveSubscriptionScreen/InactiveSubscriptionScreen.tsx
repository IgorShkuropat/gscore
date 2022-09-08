import React from 'react';
import { Button, Link } from 'components';
import styled from 'styled-components';
import crossIcon from 'public/svg/cross.svg';
import { colors } from 'shared/colors';

export const InactiveSubscriptionScreen = () => {
  return (
    <>
      <Container>
        <PageTitle>My subscriptions</PageTitle>
        <Cross src={crossIcon.src} alt="cross icon" />
        <Title>No active subscriptions</Title>
        <SubTitle>
          You can subscribe right now by clicking on the button below
        </SubTitle>
        <Link href="/">
          <Button UIType="primary">Get Gscore</Button>
        </Link>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1268px;
  margin: 0 auto;
  padding: 32px 15px 240px 15px;
`;
const Cross = styled.img`
  background-color: ${colors.neutral.deepGrey};
  border-radius: 50%;
  margin-top: 200px;
  padding: 35px;
`;

const PageTitle = styled.h1`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 64px;
  color: ${colors.neutral.white};
  align-self: flex-start;
`;
const Title = styled.h2`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  padding-top: 24px;
  padding-bottom: 8px;
  color: ${colors.neutral.white};
  text-align: center;
`;
const SubTitle = styled.p`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: ${colors.neutral.white};
  padding-bottom: 32px;
  max-width: 263px;
  text-align: center;
`;
