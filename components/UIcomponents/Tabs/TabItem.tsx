import React from 'react';
import styled from 'styled-components';
import { colors } from 'shared/colors';

type Props = {
  active: boolean;
  title: string;
};
type TBody = Pick<Props, 'active'>;
export const TabItem: React.FC<Props> = ({ active, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Body active={active} />
    </Container>
  );
};

const Container = styled.div`
  flex: 1 0 33%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.span`
  font-family: 'THICCCBOI';
  font-size: 20px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  padding-bottom: 12px;
  color: ${colors.neutral.white};
`;
const Body = styled.div<TBody>`
  height: 0;
  height: 8px;
  background-color: ${({ active }) =>
    active ? colors.primary : colors.neutral.deepGrey};
  border-radius: 8px;
`;
