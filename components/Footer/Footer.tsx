import React from 'react';
import logo from 'public/svg/logo.svg';
import twitter from 'public/svg/twitter.svg';
import facebook from 'public/svg/facebook.svg';
import linkedin from 'public/svg/linkedin.svg';
import { colors } from 'shared/colors';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <Container>
      <SloganContainer>
        <Logo src={logo.src} alt="logo" />
        <SloganText>
          Ut enim ad minim veniam quis nostrud exercitation ea commodo
        </SloganText>
      </SloganContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright © 2022 GScore | All Rights Reserved |
          <Cookies> Cookies</Cookies>|<Policy> Privacy Policy</Policy>
        </CopyrightText>
        <LinksContainer>
          <a href="#">
            <img src={facebook.src} alt="icon" />
          </a>
          <a href="#">
            <img
              src={twitter.src}
              style={{ width: '25.44px', height: '20.64px' }}
              alt="icon"
            />
          </a>
          <a href="#">
            <img src={linkedin.src} alt="icon" />
          </a>
        </LinksContainer>
      </BottomContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${colors.neutral.black};
  border-top: 1px solid ${colors.neutral.deepGrey};
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
const SloganContainer = styled.div`
  margin-left: 5.97%;
  margin-top: 4.16%;
  display: flex;
  flex-direction: column;
  background-color: inherit;
  width: 322px;
  gap: 24px;
`;
const SloganText = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: ${colors.neutral.lightGrey};
`;

const Logo = styled.img`
  width: 167px;
  height: 42px;
`;

const BottomContainer = styled.div`
  border-top: 1px solid ${colors.neutral.deepGrey};
  width: 88.8%;
  height: 116px;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CopyrightText = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: ${colors.neutral.lightGrey};
`;
const LightedText = styled(CopyrightText)`
  color: ${colors.neutral.white};
  position: relative;
`;

const Cookies = styled(LightedText)`
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 69px;
    background-color: ${colors.neutral.white};
    bottom: -1px;
    left: 5px;
  }
`;
const Policy = styled(LightedText)`
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 120px;
    background-color: ${colors.neutral.white};
    bottom: -1px;
    left: 5px;
  }
`;
const LinksContainer = styled.div`
  display: flex;
  gap: 27px;
`;
