import React from 'react';
import styled from 'styled-components';
import { PromoCard } from 'components';
import { useAppSelector } from 'utils/hooks';
import { selectPrices, selectProducts } from 'ducks/products';

export const PromoCardList = () => {
  const products = useAppSelector(selectProducts);
  const prices = useAppSelector(selectPrices);
  return (
    <Container>
      {products.map((product, index) => (
        <PromoCard
          productId={String(product.id)}
          key={product.id}
          UItype={index === 1 ? 'primary' : 'secondary'}
          title={product.name}
          price={prices ? prices[index] || '' : ''}
          alignSelf={index === 1 ? 'flex-start' : 'flex-end'}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 88.05%;
  min-height: 650px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 28px;
  padding-bottom: 32.77px;
`;
