import React, { useEffect } from 'react';
import styled from 'styled-components';
import upperArrowIcon from 'public/svg/upperArrow.svg';
import { Link } from 'components';
import { colors } from 'shared/colors';
import { Accordion } from 'components';

export const UserAccordion: React.FC<{ username: string }> = ({ username }) => {
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <UserName>{username || ''}</UserName>;
      <Icon
        isClicked={isClicked}
        onClick={() => setIsClicked(prev => !prev)}
        src={upperArrowIcon.src}
        alt="icon"
      />
      {isClicked && (
        <AccordionContainer>
          <Accordion />
        </AccordionContainer>
      )}
    </div>
  );
};

const UserName = styled.span`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  color: ${colors.neutral.white};
  padding-right: 12px;
`;

const Icon = styled.img<{ isClicked: boolean }>`
  position: relative;
  transform: rotate(${({ isClicked }) => (isClicked ? '180deg' : '0deg')});
`;

const AccordionContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50px;
`;
