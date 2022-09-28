import React from 'react';
import styled from 'styled-components';
import { SubscriptionCard } from 'components';
import { convertTimestampToDate } from 'utils';
import { colors } from 'shared/colors';
import { useAppDispatch, usePagination, useAppSelector } from 'utils/hooks';
import { SubscribeResponseDto } from 'api/generated';
import rightArrow from 'public/svg/rightArrow.svg';

type Props = {
  subscribes: SubscribeResponseDto[];
  selectedSubscribeId: number | null;
  viewCardCodes: (subscribeId: number, productId: number) => void;
};
type TPagButton = {
  orientation: 'right' | 'left';
  paginationCounter: number;
  paginationMaxItemNumber: number;
};

export const SubscribePagination: React.FC<Props> = ({
  subscribes,
  selectedSubscribeId,
  viewCardCodes,
}) => {
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    totalPages,
  } = usePagination({ contentPerPage: 2, count: subscribes?.length });
  return (
    <>
      <PaginationContainer>
        <PaginationItemsContainer>
          {subscribes &&
            subscribes
              .slice(firstContentIndex, lastContentIndex)
              .map(sub => (
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
                  isSelectedItem={selectedSubscribeId !== sub.id ? true : false}
                  viewCardCodes={viewCardCodes}
                  subscribeId={sub.id}
                  productId={sub.productId}
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
    </>
  );
};

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
