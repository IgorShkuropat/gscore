import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import {
  Layout,
  Button,
  CodesList,
  SubscribePagination,
  InactiveSubscriptionScreen,
} from 'components';
import styled from 'styled-components';
import { colors } from 'shared/colors';
import { selectors, actions } from 'ducks';
import { useAppDispatch, useAppSelector } from 'utils/hooks';

const Subscriptions: NextPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getSubscribesAndProducts = async () => {
      await dispatch(actions.getSelfSubscribes());
      await dispatch(actions.getProducts());
    };

    getSubscribesAndProducts().catch(console.error);
  }, []);

  const subscribes = useAppSelector(selectors.selectUserSubscriptions);

  const [selectedSubscribeId, setSelectedSubscribeId] = useState<number | null>(
    null,
  );

  const viewCardCodes = susbcribeId => setSelectedSubscribeId(susbcribeId);
  const changeProduct = () => {
    let productId = prompt('Choose product id: 1, 2 or 3') || 0;
    if ([1, 2, 3].includes(+productId)) {
      const chainDispatch = async () => {
        if (selectedSubscribeId !== null) {
          await dispatch(
            actions.changeProduct({
              subscribeId: selectedSubscribeId,
              productId: +productId,
            }),
          );
          await dispatch(actions.getSelfSubscribes());
          await dispatch(actions.getProducts());
        }
      };
      chainDispatch();
    } else {
      alert('Id must be number from 1 to 3');
    }
  };
  return (
    <>
      <Layout>
        {subscribes ? (
          <Wrapper>
            <Header>
              <Title>My subscriptions</Title>
              <Button
                UIType="primary"
                padding="26px 38px"
                disabled={selectedSubscribeId === null}
                onClick={changeProduct}
              >
                Upgrade
              </Button>
            </Header>
            <SubscribePagination
              subscribes={subscribes}
              selectedSubscribeId={selectedSubscribeId}
              viewCardCodes={viewCardCodes}
            />
            <CodesList
              subscribes={subscribes}
              selectedSubscribeId={selectedSubscribeId}
            />
          </Wrapper>
        ) : (
          <InactiveSubscriptionScreen />
        )}
      </Layout>
    </>
  );
};

export default Subscriptions;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px 86px 120px 86px;
  max-width: 1270px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 44px;
`;

const Title = styled.h1`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 64px;
  color: ${colors.neutral.white};
`;
