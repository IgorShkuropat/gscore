import React from 'react';
import styled from 'styled-components';
import { colors } from 'shared/colors';
import primaryMarker from 'public/svg/primaryMarker.svg';
import secondaryMarker from 'public/svg/secondaryMarker.svg';
import { Button, Link } from 'components';
import { actions } from 'ducks';
import { useAppDispatch } from 'utils/hooks';
import { setCookie } from 'services/cookie';

type Props = {
  price: string;
  title: string;
  alignSelf?: string;
  UItype: 'primary' | 'secondary';
  productId: string;
};

type TContainer = Pick<Props, 'UItype' | 'alignSelf'>;
type TBenefitItem = Pick<Props, 'UItype'>;
export const PromoCard: React.FC<Props> = ({
  price,
  title,
  alignSelf,
  UItype,
  productId,
}) => {
  const dispatch = useAppDispatch();
  const setProductIdInCookie = productId => setCookie('productId', productId);
  const handleChooseProduct = productId => {
    dispatch(actions.chooseProduct(productId));
    setProductIdInCookie(productId);
  };
  return (
    <Container UItype={UItype} alignSelf={alignSelf}>
      <Wrapper>
        <Price>${price}</Price>
        <Title>{title}</Title>
        <Text>
          Get the advanced WordPress plugin that optimizes content with GSC
          keywords at one low annual price
        </Text>
        <InnerBottomContainer>
          <BenefitsList>
            <BenefitItem UItype={UItype}>All features for 3 sites</BenefitItem>
            <BenefitItem UItype={UItype}>
              Special introductory pricing
            </BenefitItem>
            <BenefitItem UItype={UItype}>
              Unlimited Pages and Keywords
            </BenefitItem>
            <BenefitItem UItype={UItype}>Billed annually</BenefitItem>
          </BenefitsList>
          <Link href="/auth">
            {UItype === 'primary' ? (
              <Button
                onClick={() => handleChooseProduct(productId)}
                UIType="secondary"
                padding="26px 106.05px"
                margin="0 auto"
              >
                Get Gscore
              </Button>
            ) : (
              <Button
                onClick={() => handleChooseProduct(productId)}
                UIType="secondary"
                padding="26px 106.05px"
                margin="0 auto"
              >
                <span style={{ color: `${colors.neutral.black}` }}>
                  Get Gscore
                </span>
              </Button>
            )}
          </Link>
        </InnerBottomContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div<TContainer>`
  padding: 42px 48px;
  background-color: ${({ UItype }) =>
    UItype === 'primary' ? colors.primary : colors.neutral.lightBlack};
  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  align-self: ${({ alignSelf }) => alignSelf || 'flex-end'};
`;
const Wrapper = styled.div`
  width: 308px;
  display: flex;
  flex-direction: column;
`;
const Price = styled.span`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 66px;
  text-align: center;
  color: #ffffff;
`;
const Title = styled.span`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  text-align: center;
  color: ${colors.neutral.white};
  padding-bottom: 8px;
`;

const Text = styled.span`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: ${colors.neutral.white};
  padding-bottom: 40px;
`;

const InnerBottomContainer = styled.div`
  border-top: 1px solid ${colors.neutral.white};
  padding-top: 38px;
`;

const BenefitsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding-bottom: 32px;
`;

const BenefitItem = styled.li<TBenefitItem>`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  position: relative;
  padding-left: 5px;
  color: ${colors.neutral.white};
  ::before {
    content: ${({ UItype }) =>
      UItype === 'primary'
        ? `url(${primaryMarker.src})`
        : `url(${secondaryMarker.src})`};
    position: absolute;
    left: -35px;
    top: -4px;
  }
`;
