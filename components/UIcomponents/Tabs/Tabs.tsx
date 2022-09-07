import React, { useState } from 'react';
import styled from 'styled-components';
import { TabItem } from './TabItem';

type Props = {
  tabsTitles: string[];
  activeTabs: boolean[];
  setActiveTabs: React.Dispatch<React.SetStateAction<Array<boolean>>>;
};
export const Tabs: React.FC<Props> = ({
  tabsTitles,
  activeTabs,
  setActiveTabs,
}) => {
  return (
    <Nav>
      {tabsTitles.map((tabTitle, index) => (
        <TabItem key={tabTitle} active={activeTabs[index]} title={tabTitle} />
      ))}
    </Nav>
  );
};

const Nav = styled.nav`
  max-width: 620px;
  display: flex;
  gap: 16px;
`;
