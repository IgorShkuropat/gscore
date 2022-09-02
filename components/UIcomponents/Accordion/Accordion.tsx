import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from 'shared/colors';
import { AccordionItemList } from './AccordionItemList';
import upperArrow from 'public/svg/upperArrow.svg';

type TContainer = {
  clicked: boolean;
};
type TIcon = TContainer;
export const Accordion = ({ title }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = e => setClicked(prev => !prev);
  return (
    <Container clicked={clicked} onClick={handleClick}>
      <HeadeContainer clicked={clicked}>
        <Title>{title}</Title>
        <Icon clicked={clicked} src={upperArrow.src} alt="upperArrow" />
      </HeadeContainer>
      {clicked && <AccordionItemList />}
    </Container>
  );
};
const Container = styled.div<TContainer>`
  display: flex;
  flex-direction: column;
  gap: 25px;
  background-color: ${({ clicked }) =>
    clicked ? colors.neutral.deepGrey : colors.neutral.lightBlack};
  padding: 20px 24px;
  box-shadow: 0px 24px 65px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
`;
const HeadeContainer = styled.div<TContainer>`
  margin-bottom: ${({ clicked }) => (clicked ? '8.26px' : '0')};
  background-color: inherit;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: ${colors.neutral.white};
`;
const Icon = styled.img<TIcon>`
  transform: ${({ clicked }) => (clicked ? 'rotate(180deg)' : 'rotate(90deg)')};
`;
