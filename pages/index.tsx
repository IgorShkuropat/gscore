import type { NextPage, GetServerSideProps } from 'next';
import styled from 'styled-components';
import { colors } from 'shared/colors';
import { Layout, PromoCardList } from 'components';
import { wrapper } from 'store';
import { actions } from 'ducks';
import { getCookie } from 'services/cookie';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Main>
          <H1>Get started with Gscore today!</H1>
          <PromoCardList />
          <ContactContainer>
            <Question>Have more than 10 sites?</Question>
            <ContactLink href="#">Contact us</ContactLink>
          </ContactContainer>
        </Main>
      </Layout>
    </>
  );
};

export default Home;

const H1 = styled.h1`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 54px;
  text-align: center;
  color: ${colors.neutral.white};
  padding-bottom: 48.43px;
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  gap: 0;
  margin-bottom: 40px;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 42px;
`;
const Question = styled.span`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: ${colors.neutral.white};
`;
const ContactLink = styled.a`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  text-decoration-line: underline;
  color: ${colors.primary};
`;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(store => async ({ req }) => {
    await store.dispatch(actions.getProducts());
    req.cookies.token && store.dispatch(actions.loginViaCookie());
    return {
      props: {},
    };
  });
