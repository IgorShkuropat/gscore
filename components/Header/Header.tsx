import React from 'react';
import styled from 'styled-components';
import logoIcon from 'public/svg/logo.svg';

export const Header = () => {
  return (
    <Container>
      <img src={logoIcon.src} alt="logo" />
    </Container>
  );
};

const Container = styled.div`
  margin-left: 5.97%;
  padding: 32px 0;
  display: flex;
  justify-content: space-between;
`;
