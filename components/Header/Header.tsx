import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logoIcon from 'public/svg/logo.svg';
import { Link } from 'components';
import { colors } from 'shared/colors';
import { UserAccordion } from 'components';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { getCookie } from 'services/cookie';
import { actions } from 'ducks';

export const Header: React.FC<{ serverSideUsername?: string }> = ({
  serverSideUsername,
}) => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState(serverSideUsername);

  useEffect(() => {
    setUsername(getCookie('username'));
    dispatch(actions.loginViaCookie());
  }, []);

  return (
    <Container>
      <Link href="/">
        <img src={logoIcon.src} alt="logo" />
      </Link>
      {username && (
        <UserBlock>
          <Link href="/subscriptions">
            <SubscriptionsLink>My subscriptions</SubscriptionsLink>
          </Link>
          <UserAccordion username={username} />
        </UserBlock>
      )}
    </Container>
  );
};

const Container = styled.div`
  max-width: 1266px;
  margin: 0 auto;
  padding: 32px 0;
  display: flex;
  justify-content: space-between;
`;

const UserBlock = styled.div`
  display: flex;
  gap: 32px;
`;

const SubscriptionsLink = styled.a`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;

  text-align: center;
  color: ${colors.neutral.white};
`;
