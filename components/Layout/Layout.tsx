import React from 'react';
import { Header, Footer } from 'components';

export const Layout: React.FC<{
  serverSideUsername?: string;
  children: React.ReactNode;
}> = ({ children, serverSideUsername }) => {
  return (
    <>
      <header>
        <Header serverSideUsername={serverSideUsername} />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
