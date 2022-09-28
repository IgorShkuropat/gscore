import React from 'react';
import styled from 'styled-components';
import { colors } from 'shared/colors';
import { Checkbox } from 'components';
import copyIcon from 'public/svg/copy.svg';
import { Button } from 'components';
import { actions } from 'ducks';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { selectors } from 'ducks';
import { UseFormRegister } from 'react-hook-form';

type Props = {
  status: string;
  licenseCode: string;
  register: UseFormRegister<any>;
  codeId: number;
  getValues: (payload?: string | string[]) => Object;
};
type TLabel = Pick<Props, 'status'>;

const statusColorMap = {
  ACTIVE: colors.system.green,
  HOLD: colors.system.orange,
  INACTIVE: colors.primary,
};

export const ConnectField: React.FC<Props> = ({
  status,
  licenseCode,
  register,
  getValues,
  codeId,
}) => {
  const dispatch = useAppDispatch();
  const isCodesLoading: boolean = useAppSelector(
    selectors.selectIsCodesLoading,
  );
  const copyLicenseCode = licenseCode => {
    navigator.clipboard.writeText(licenseCode).then(
      () => alert('Code has copied to clipboard!'),
      () => {
        alert('Something gone wrong, code not copied');
      },
    );
  };
  return (
    <Container>
      <div style={{ margin: '35px 48px 0 0' }}>
        <Checkbox register={register} codeId={codeId} getValues={getValues} />
      </div>
      <LicenseContainer>
        <LicenseText>Liscense</LicenseText>
        <LicenseInput placeholder="License key" value={licenseCode} />
        <CopyIcon
          src={copyIcon.src}
          alt="copy icon"
          onClick={() => copyLicenseCode(licenseCode)}
        />
      </LicenseContainer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexGrow: '1',
          gap: '56px',
          marginRight: '41px',
        }}
      >
        <DomainContainer>
          <DomainText>Domain</DomainText>
          <DomainInput placeholder="Domain" />
        </DomainContainer>
        {status === 'INACTIVE' && (
          <Button
            UIType="secondary"
            alignSelf="flex-end"
            padding="20px 24px"
            margin="0 0 5px 0"
            loading={isCodesLoading}
            onClick={() => {
              const chainDispatch = async () => {
                await dispatch(actions.activateCode({ code: licenseCode }));

                await dispatch(actions.getSelfCodes());
              };
              chainDispatch();
            }}
          >
            Activate
          </Button>
        )}
      </div>
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
  gap: 15px;
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
  padding: 25px 75px 25px 24px;
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
  padding-right: 56px;
`;
const DomainText = styled(LicenseText)``;
const DomainInput = styled(LicenseInput)`
  max-width: 595px;
  padding: 25px 34px 25px 24px;
  width: 100%;
`;
const StatusContainer = styled(LicenseContainer)`
  margin: 0;
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
