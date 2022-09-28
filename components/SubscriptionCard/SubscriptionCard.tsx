import React from 'react';
import styled from 'styled-components';
import { colors } from 'shared/colors';
import { Button } from 'components';
import { SubscribeResponseDto } from 'api/generated';

type Props = Pick<SubscribeResponseDto, 'currentPeriodEnd' | 'status'> & {
  isSelectedItem: boolean;
  price: string;
  productName: number;
  viewCardCodes: (subscribeId: number, productId: number) => void;
  subscribeId: number;
  productId: number;
};

const statusMap = {
  ACTIVE: 'Active',
  HOLD: 'Hold',
  INACTIVE: 'Inactive',
};

type TContainer = Pick<Props, 'isSelectedItem'>;
export const SubscriptionCard: React.FC<Props> = ({
  isSelectedItem,
  price,
  currentPeriodEnd,
  status,
  productName,
  viewCardCodes,
  subscribeId,
  productId,
}) => {
  return (
    <Container isSelectedItem={isSelectedItem}>
      <TopContainer>
        <Logo>Gscore</Logo>
        <StatusText>{statusMap[status]}</StatusText>
      </TopContainer>
      <BottomContainer>
        <SubscriptionName>{productName}</SubscriptionName>
        <SubscriptionPrice>${price}</SubscriptionPrice>
      </BottomContainer>
      <ValidDateText>valid until {currentPeriodEnd}</ValidDateText>
      <Button
        UIType="secondary"
        padding="20px 42px"
        onClick={() => viewCardCodes(subscribeId, productId)}
      >
        View
      </Button>
    </Container>
  );
};

const Container = styled.div<TContainer>`
  max-width: 524px;
  background: ${colors.neutral.deepGrey};
  border-radius: 12px;
  margin-bottom: 24px;
  padding: 48px 72px 48px 32px;
  position: relative;
  flex-grow: 1;
  filter: brightness(
    ${({ isSelectedItem }) => (isSelectedItem ? '0.75' : '1')}
  );
  ::before {
    content: '';
    position: absolute;
    background-color: ${colors.neutral.grey};
    height: 1px;
    width: 100%;
    left: 0;
    top: 32.3353%;
  }
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 64px;
`;

export const Logo = styled.span`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: ${colors.neutral.white};
`;
const StatusText = styled.span`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: ${colors.system.green};
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
`;

const SubscriptionName = styled.span`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: ${colors.neutral.white};
`;

const SubscriptionPrice = styled(SubscriptionName)`
  margin-right: 20px;
`;

const ValidDateText = styled.p`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: ${colors.neutral.grey};
  margin-bottom: 32px;
`;
