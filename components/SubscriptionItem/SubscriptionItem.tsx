import React from 'react';
import styled from 'styled-components';
import { colors } from 'shared/colors';
import { Button } from 'components';

export const SubscriptionItem = () => {
  return (
    <Container>
      <TopContainer>
        <Logo>Gscore</Logo>
        <StatusText>Active</StatusText>
      </TopContainer>
      <BottomContainer>
        <SubscriptionName>Single site license</SubscriptionName>
        <SubscriptionPrice>$77</SubscriptionPrice>
      </BottomContainer>
      <ValidDateText>valid until 21.10.2022</ValidDateText>
      <Button UIType="secondary" padding="20px 42px">
        View
      </Button>
    </Container>
  );
};

const Container = styled.div`
  max-width: 620px;
  background: ${colors.neutral.deepGrey};
  border-radius: 12px;
  margin-bottom: 24px;
  padding: 48px 72px 48px 32px;
  position: relative;
  ::before {
    content: '';
    position: absolute;
    background-color: ${colors.neutral.grey};
    height: 1px;
    width: 100%;
    left: 0;
    top: 32.3353%;
  }
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 64px;
`;

export const Logo = styled.span`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: ${colors.neutral.white};
`;
const StatusText = styled.span`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: ${colors.system.green};
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
`;

const SubscriptionName = styled.span`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: ${colors.neutral.white};
`;

const SubscriptionPrice = styled(SubscriptionName)``;

const ValidDateText = styled.p`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: ${colors.neutral.grey};
  margin-bottom: 32px;
`;
