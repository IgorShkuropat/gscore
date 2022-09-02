import React from 'react';
import styled from 'styled-components';
import logoIcon from 'public/svg/logo.svg';

export const Header = () => {
  return (
    <Container>
      <Logo src={logoIcon.src} />
    </Container>
  );
};

const Container = styled.div`
  padding: 32px 87px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img``;
