import React from 'react';
import styled from 'styled-components';
import { Button, Link, PurchaseList } from 'components';
import { colors } from 'shared/colors';

export const Checkout = () => {
  return (
    <Container>
      <Title>Checkout</Title>
      <PurchaseList UItype="checkout" />
      <TotalContainer>
        <TotalText>Total:</TotalText>
        <TotalSum>$77</TotalSum>
      </TotalContainer>
      <div style={{ alignSelf: 'flex-start' }}>
        <Link href="/purchase">
          <Button UIType="primary" padding="20px 65.55px">
            Purchase
          </Button>
        </Link>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  margin-bottom: 310px;
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

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
`;
const TotalText = styled.span`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  color: ${colors.neutral.white};
`;

const TotalSum = styled.span`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  color: ${colors.neutral.white};
`;
