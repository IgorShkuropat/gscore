import type { NextPage } from 'next';
import React, { useState } from 'react';
import { Layout, Tabs, CreateAccount, LogIn, Checkout } from 'components';
import styled from 'styled-components';

const tabTitles = ['Create account', 'Log in', 'Checkout'];

const auth: NextPage = () => {
  const initalState = Array(tabTitles.length).fill(false);

  initalState[0] = true;

  const [currentTabCounter, setCurrentTabCounter] = useState(1);
  const [activeTabs, setActiveTabs] = useState(initalState);

  const nextTab = () => {
    const newState = [...activeTabs];
    for (let i = 0; i <= currentTabCounter; i++) {
      newState[i] = true;
    }
    if (currentTabCounter === 3) {
      return;
    }
    setCurrentTabCounter(currentTabCounter + 1);
    setActiveTabs(newState);
  };
  const pageMap = {
    1: <CreateAccount nextTab={nextTab} />,
    2: <LogIn nextTab={nextTab} />,
    3: <Checkout />,
  };
  return (
    <Layout>
      <Container>
        <Tabs
          activeTabs={activeTabs}
          setActiveTabs={setActiveTabs}
          tabsTitles={tabTitles}
        />
        {pageMap[currentTabCounter]}
      </Container>
    </Layout>
  );
};

export default auth;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 620px;
  margin: 0 auto;
`;
