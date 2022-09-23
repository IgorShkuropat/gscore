import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from 'shared/colors';
import { AccordionItemList } from './AccordionItemList';
import upperArrow from 'public/svg/upperArrow.svg';

type TContainer = {
  clicked: boolean;
};
type TIcon = TContainer;
export const Accordion = () => {
  return (
    <Container>
      <AccordionItemList />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  background-color: ${colors.neutral.deepGrey};
  padding: 20px 24px;
  box-shadow: 0px 24px 65px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
`;
