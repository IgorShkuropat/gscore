import React from 'react';
import styled from 'styled-components';
import { colors } from 'shared/colors';
import { Link } from 'components';

export type Props = {
  title: string;
  iconSrc: string;
  path: string;
  onClick?: () => void;
};

export const AccordionItem: React.FC<Props> = ({
  title,
  iconSrc,
  path,
  onClick,
}) => {
  return (
    <>
      {path ? (
        <Link href={path}>
          <Container>
            <img src={iconSrc} alt="icon" />
            <Title>{title}</Title>
          </Container>
        </Link>
      ) : (
        <Container onClick={onClick}>
          <img src={iconSrc} alt="icon" />
          <Title>{title}</Title>
        </Container>
      )}
    </>
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
  color: ${colors.neutral.white};
`;
