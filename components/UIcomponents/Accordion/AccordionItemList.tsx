import React from 'react';
import { AccordionItem } from './AccordionItem';
import gearIcon from 'public/svg/gear.svg';
import logOutIcon from 'public/svg/logOut.svg';

const iconsSrcs = [gearIcon.src, logOutIcon.src];
const titles = ['Settings', 'Logout'];

export const AccordionItemList = () => {
  return (
    <>
      {titles.map((title, index) => (
        <AccordionItem title={title} iconSrc={iconsSrcs[index]} />
      ))}
    </>
  );
};
