import React from 'react';
import styled from 'styled-components';
import { colors } from 'shared/colors';

export type Props = {
  title: string;
  iconSrc: string;
};

export const AccordionItem: React.FC<Props> = ({ title, iconSrc }) => {
  return (
    <Container>
      <img src={iconSrc} alt="icon" />
      <Title>{title}</Title>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  gap: 8px;
  background-color: ${colors.neutral.deepGrey};
`;
const Title = styled.span`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: ${colors.neutral.grey};
`;
