import React from 'react';
import styled from 'styled-components';
import { colors } from 'shared/colors';
import cart from 'public/svg/cart.svg';

type Props = {
  UItype: 'checkout' | 'purchase';
};

type TPackagePrice = Pick<Props, 'UItype'>;
export const PurchaseList = ({ UItype }) => {
  return (
    <Container>
      <TopPurchaseContainer>
        <PackageName>Package name</PackageName>
        <PriceText>Price</PriceText>
      </TopPurchaseContainer>
      <BottomPurchaseContainer>
        <PackageType>Single site license</PackageType>
        <PackagePrice UItype={UItype}>$77</PackagePrice>
      </BottomPurchaseContainer>
    </Container>
  );
};

const Container = styled.div`
  background: ${colors.neutral.lightBlack};
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
    top: 50%;
  }
`;

const TopPurchaseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 64px;
`;

export const PackageName = styled.span`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  color: ${colors.neutral.white};
`;
const PriceText = styled(PackageName)``;
const BottomPurchaseContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PackageType = styled.span`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 38px;
  color: ${colors.neutral.white};
`;

const PackagePrice = styled(PackageType)<TPackagePrice>`
  padding-right: 15px;

  position: relative;
  ::after {
    right: -20px;
    position: absolute;
    content: url(${({ UItype }) => UItype === 'checkout' && cart.src});
  }
`;
