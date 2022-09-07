import React from 'react';
import { Header, Footer } from 'components';

export const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </>
  );
};
