import type { NextPage } from 'next';
import React, { useState } from 'react';
import { Layout, Tabs, CreateAccount, LogIn, Checkout } from 'components';
import styled from 'styled-components';
import { useAppSelector } from 'utils/hooks';
import { selectors } from 'ducks';

const tabTitles = ['Create account', 'Log in', 'Checkout'];

const Auth: NextPage = () => {
  const isAuth = useAppSelector(selectors.selectAuth);
  let initialState = Array(tabTitles.length).fill(false);
  if (isAuth) {
    initialState = initialState.map(tab => !tab);
  } else {
    initialState[0] = true;
  }
  console.log(initialState, 'initial');
  const [currentTabCounter, setCurrentTabCounter] = useState(isAuth ? 3 : 1);
  console.log(currentTabCounter, 'dasdsa');
  const [activeTabs, setActiveTabs] = useState(initialState);
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
    <>
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
    </>
  );
};

export default Auth;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 620px;
  margin: 0 auto;
`;

// export const getServerSideProps: GetServerSideProps =
//   wrapper.getServerSideProps(store => async ({ req }) => {
//     store.dispatch(chooseProduct(getCookie('productId')));
//     console.log(getCookie('productId'));
//     req.cookies.token && store.dispatch(actions.loginViaCookie());
//     return {
//       props: {},
//     };
//   });
