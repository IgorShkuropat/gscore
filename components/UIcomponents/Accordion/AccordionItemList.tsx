import React from 'react';
import { AccordionItem } from './AccordionItem';
import gearIcon from 'public/svg/gear.svg';
import logOutIcon from 'public/svg/logOut.svg';
import { useAppDispatch } from 'utils/hooks';
import { actions } from 'ducks';

export const AccordionItemList = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <AccordionItem
        title="Settings"
        iconSrc={gearIcon.src}
        path={'/settings'}
      />
      <AccordionItem
        onClick={() => dispatch(actions.logout())}
        title="Logout"
        iconSrc={logOutIcon.src}
        path=""
      />
    </>
  );
};
