import React from 'react';
import styled from 'styled-components';
import { colors } from 'shared/colors';
import { ConnectField, Button } from 'components';
import { selectors, actions } from 'ducks';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { useForm, SubmitHandler } from 'react-hook-form';
import type { SubscribeResponseDto } from 'api/generated';
import type { LicenceCodeResponseDto } from 'api/generated';
import type { ProductResponseDto } from 'api/generated';

type Props = {
  subscribes: SubscribeResponseDto[];
  selectedSubscribeId: number | null;
};
export const CodesList: React.FC<Props> = ({
  subscribes,
  selectedSubscribeId,
}) => {
  const dispatch = useAppDispatch();

  const sitesCount = useAppSelector(
    selectors.selectCurrentSubcribe(selectedSubscribeId || 0),
  ).product?.sitesCount;
  const isCodesLoading = useAppSelector(selectors.selectIsCodesLoading);
  const { register, getValues } = useForm();

  const codes = useAppSelector(
    selectors.selectAttachedCodes(selectedSubscribeId || 0),
  );

  const getSelectedCodes = (
    codes: LicenceCodeResponseDto[] | null | undefined,
  ) => {
    const selectedCodes: number[] = [];
    const attachedCodes = codes?.filter(
      code => code.subscribeId === selectedSubscribeId,
    );
    for (const key in getValues()) {
      let codeId = +key.replace(/[^0-9]/g, '');
      if (
        getValues()[key] &&
        attachedCodes?.map(code => code.id).includes(codeId)
      ) {
        selectedCodes.push(codeId);
      }
    }
    return selectedCodes;
  };

  const manageCodes = () => {
    if (selectedSubscribeId === null) {
      return;
    }
    const isAvailableCodesNumber =
      sitesCount || 0 >= getSelectedCodes(codes).length;

    if (isAvailableCodesNumber) {
      const chainDispatch = async () => {
        await dispatch(
          actions.manageCodes({
            codesIds: getSelectedCodes(codes),
            subscribeId: selectedSubscribeId,
          }),
        );
        await dispatch(actions.getSelfCodes());
      };
      chainDispatch();
    }
  };

  return (
    <CodesListContainer>
      {subscribes
        .find(sub => sub.id === selectedSubscribeId)
        ?.codes?.slice()
        .sort((firstCode, secondCode) =>
          firstCode.id > secondCode.id ? 1 : -1,
        )
        .map(code => (
          <ConnectField
            licenseCode={code.code}
            key={code.id}
            status={code.status}
            register={register}
            getValues={getValues}
            codeId={code.id}
          />
        ))}
      {subscribes.find(sub => sub.id === selectedSubscribeId) && (
        <ConfirmContainer>
          <ButtonLabel>Select the domains you want to keep</ButtonLabel>
          <Button
            UIType="primary"
            padding="26px 38px"
            onClick={manageCodes}
            disabled={isCodesLoading}
            loading={isCodesLoading}
          >
            Confirm
          </Button>
        </ConfirmContainer>
      )}
    </CodesListContainer>
  );
};
const ConfirmContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
`;

const ButtonLabel = styled.p`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: ${colors.neutral.white};
`;

const CodesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
