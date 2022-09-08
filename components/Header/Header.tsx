import React from 'react';
import styled from 'styled-components';
import logoIcon from 'public/svg/logo.svg';
import { Link } from 'components';

export const Header = () => {
  return (
    <Container>
      <Link href="/">
        <img src={logoIcon.src} alt="logo" />
      </Link>
    </Container>
  );
};

const Container = styled.div`
  margin-left: 5.97%;
  padding: 32px 0;
  display: flex;
  justify-content: space-between;
`;
