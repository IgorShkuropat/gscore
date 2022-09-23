import React, { useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import type { NextPage } from 'next';
import {
  Layout,
  Button,
  ConnectField,
  SubscriptionCard,
  InactiveSubscriptionScreen,
} from 'components';
import styled from 'styled-components';
import { convertTimestampToDate } from 'utils';
import { colors } from 'shared/colors';
import { actions } from 'ducks';
import { selectors } from 'ducks';
import { useAppDispatch, usePagination, useAppSelector } from 'utils/hooks';
import rightArrow from 'public/svg/rightArrow.svg';

type TPagButton = {
  orientation: 'right' | 'left';
  paginationCounter: number;
  paginationMaxItemNumber: number;
};
const Subscriptions: NextPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getSubscribes = async () =>
      await dispatch(actions.getSelfSubscribes());

    getSubscribes().catch(console.error);
  }, []);
  const subscribes = useAppSelector(selectors.selectUserSubscriptions);

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    totalPages,
  } = usePagination({ contentPerPage: 2, count: subscribes?.length });
  const [currentSubscribtionId, setCurrentSubscribtionId] = useState(null);
  const viewCardCodes = susbcribeId => setCurrentSubscribtionId(susbcribeId);
  return (
    <>
      <Layout>
        {subscribes ? (
          <Wrapper>
            <Header>
              <Title>My subscriptions</Title>
              {/* <Button UIType="primary" padding="26px 38px">
                Upgrade
              </Button> */}
            </Header>
            <PaginationContainer>
              <PaginationItemsContainer>
                {subscribes &&
                  subscribes
                    .slice(firstContentIndex, lastContentIndex)
                    .map((sub, index) => (
                      <SubscriptionCard
                        key={sub.id}
                        price={
                          sub.product?.prices?.find((_, index) => index === 0)
                            ?.price || ''
                        }
                        status={sub.status}
                        currentPeriodEnd={convertTimestampToDate(
                          sub.currentPeriodEnd || '',
                        )}
                        productName={sub.product?.name || 0}
                        isSecondaryItem={index === 1 ? true : false}
                        viewCardCodes={viewCardCodes}
                        subscribeId={sub.id}
                      />
                    ))}
              </PaginationItemsContainer>
              <PaginationButtonsContainer>
                <PaginationButton
                  src={rightArrow.src}
                  alt="button"
                  orientation="left"
                  paginationCounter={page}
                  paginationMaxItemNumber={totalPages}
                  onClick={prevPage}
                />
                <PaginationCounter>
                  {page} / {totalPages}
                </PaginationCounter>
                <PaginationButton
                  src={rightArrow.src}
                  alt="button"
                  orientation="right"
                  paginationCounter={page}
                  paginationMaxItemNumber={totalPages}
                  onClick={nextPage}
                />
              </PaginationButtonsContainer>
            </PaginationContainer>
            <CodesListContainer>
              {subscribes
                .find(sub => sub.id === currentSubscribtionId)
                ?.codes?.slice()
                .sort((firstCode, secondCode) =>
                  firstCode.id > secondCode.id ? 1 : -1,
                )
                .map(code => (
                  <ConnectField
                    licenseCode={code.code}
                    key={code.id}
                    status={code.status}
                  />
                ))}
              {/* {subscribes.find(sub => sub.id === currentSubscribtionId) && (
                <ConfirmContainer>
                  <ButtonLabel>Select the domains you want to keep</ButtonLabel>
                  <Button UIType="primary" padding="26px 38px">
                    Confirm
                  </Button>
                </ConfirmContainer>
              )} */}
            </CodesListContainer>
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

const ConfirmContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
`;

const ButtonLabel = styled.p`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: ${colors.neutral.white};
`;

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
const PaginationItemsContainer = styled.div`
  display: flex;
  gap: 28px;
`;
const PaginationButtonsContainer = styled.div`
  max-width: 180px;
  display: flex;
  gap: 12px;
`;
const PaginationButton = styled.img<TPagButton>`
  padding: 10px;
  border: 1px solid ${colors.neutral.grey};
  border-radius: 12px;
  cursor: pointer;
  transform: rotate(
    ${({ orientation }) => (orientation === 'left' ? '180' : '0')}deg
  );
  filter: brightness(
    ${({ paginationCounter, orientation, paginationMaxItemNumber }) => {
      let isLeftButton = orientation === 'left' ? true : false;
      let isFirstItem = paginationCounter === 1;
      let leftButtonInavidValue = isFirstItem && isLeftButton ? '0.3' : '1';
      return paginationCounter === paginationMaxItemNumber && !isLeftButton
        ? '0.3'
        : leftButtonInavidValue;
    }}
  );
`;
const PaginationCounter = styled.span`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: ${colors.neutral.white};
  display: flex;
  align-items: center;
`;
const CodesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

// export const getServerSideProps: GetServerSideProps =
//   wrapper.getServerSideProps(store => async ({ req }) => {
//     if (req.cookies.token) {
//       http.setAuthorizationHeader(req.cookies.token);
//     }
//     await store.dispatch(actions.getSelfSubscribes());
//     req.cookies.token && store.dispatch(actions.loginViaCookie());

//     return {
//       props: { subscribes: store.getState().user.subscribes },
//     };
//   });
