import React from 'react';
import type { NextPage } from 'next';
import { Layout, PurchaseList, Button, Link } from 'components';
import { colors } from 'shared/colors';
import styled from 'styled-components';
import { useAppSelector } from 'utils/hooks';
import { selectChoosenProduct } from 'ducks/products';

const Purchase: NextPage = () => {
  const product = useAppSelector(selectChoosenProduct);
  const price = product.prices[0].price;
  return (
    <>
      <Layout>
        <Container>
          <TitleContainer>
            <Title>Start your subscription</Title>
            <Subtitle>
              We have sent you a payment receipt by e-mail and a link to
              download the plugin with a license key.
            </Subtitle>
          </TitleContainer>
          <PurchaseList
            UItype="purchase"
            productName={product.name}
            price={price}
          />
          <Link href="/subscriptions">
            <Button UIType="primary" padding="26px 213.5px">
              <ButtonText>Go to my subscriptions</ButtonText>
            </Button>
          </Link>
        </Container>
      </Layout>
    </>
  );
};

export default Purchase;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 620px;
  padding: 32px 0 390px 0;
  margin: 0 auto;
  gap: 48px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 640px;
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
`;

const ButtonText = styled.span`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: ${colors.neutral.white};

  text-align: center;
`;
