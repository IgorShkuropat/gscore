import React from 'react';
import styled from 'styled-components';
import { PromoCard } from 'components';

export const PromoCardList = () => {
  return (
    <Container>
      <PromoCard UItype="secondary" price="77" title="Single site license" />
      <PromoCard
        alignSelf="flex-start"
        UItype="primary"
        price="117"
        title="3 Site license"
      />
      <PromoCard UItype="secondary" price="167" title="10 Site license" />
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
