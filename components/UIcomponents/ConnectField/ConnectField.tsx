import React from 'react';
import styled from 'styled-components';
import { colors } from 'shared/colors';
import { Checkbox } from 'components';
import copyIcon from 'public/svg/copy.svg';

type Props = {
  status: 'Active' | 'Hold' | 'Inactive';
};
type TLabel = Pick<Props, 'status'>;

const statusColorMap = {
  Active: colors.system.green,
  Hold: colors.system.orange,
  Inactive: colors.primary,
};

export const ConnectField: React.FC<Props> = ({ status }) => {
  return (
    <Container>
      <div style={{ margin: '35px 48px 0 0' }}>
        <Checkbox />
      </div>
      <LicenseContainer>
        <LicenseText>Liscense</LicenseText>
        <LicenseInput placeholder="License key" />
        <CopyIcon src={copyIcon.src} alt="copy icon" />
      </LicenseContainer>
      <DomainContainer>
        <DomainText>Domain</DomainText>
        <DomainInput placeholder="Domain" />
      </DomainContainer>
      <StatusContainer>
        <StatusText>Status</StatusText>
        <StatusType status={status}>{status}</StatusType>
      </StatusContainer>
    </Container>
  );
};

const Container = styled.div`
  background: ${colors.neutral.lightBlack};
  border-radius: 12px;
  display: flex;
  padding: 24px 90px 31px 32px;
  align-items: center;
`;

const LicenseContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 12px;
  margin-right: 28px;
`;

const LicenseText = styled.span`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: ${colors.neutral.grey};
`;
const LicenseInput = styled.input`
  outline: none;
  padding: 25px 90px 25px 24px;
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: ${colors.neutral.grey};
  background: ${colors.neutral.deepGrey};
  box-shadow: 0px 2px 12px rgba(20, 20, 43, 0.06);
  border-radius: 6px;
  border: 0;
  max-height: 296px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const CopyIcon = styled.img`
  position: absolute;
  content: url(${copyIcon.src});
  right: 23px;
  top: 48px;
  cursor: pointer;
`;
const DomainContainer = styled(LicenseContainer)`
  margin: 0;
  flex-grow: 1;
`;
const DomainText = styled(LicenseText)``;
const DomainInput = styled(LicenseInput)`
  padding: 25px 34px 25px 24px;
  width: 100%;
  max-width: 619.99px;
`;
const StatusContainer = styled(LicenseContainer)`
  margin: 0;
  margin-left: 56px;
  gap: 32px;
  align-self: flex-start;
`;
const StatusText = styled(LicenseText)``;
const StatusType = styled.span<TLabel>`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: ${({ status }) => statusColorMap[status]};
`;
