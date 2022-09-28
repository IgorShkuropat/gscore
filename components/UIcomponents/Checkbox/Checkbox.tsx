import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, colorMap } from 'shared/colors';
import checkIcon from 'public/svg/check.svg';
import { UseFormRegister } from 'react-hook-form';

type Props = {
  disabled?: boolean;
  initialChecked?: boolean;
  margin?: string;
  register: UseFormRegister<any>;
  getValues: (payload?: string | string[]) => Object;
  codeId: number;
};
type TCheckbox = Pick<Props, 'disabled' | 'margin'> & {
  checked?: boolean;
};

export const Checkbox: React.FC<Props> = ({
  disabled = false,
  initialChecked = false,
  margin,
  register,
  getValues,
  codeId,
}) => {
  const [checked, setChecked] = useState(
    getValues()[`checkboxId${codeId}`] || false,
  );

  const handleChecked = e => {
    setChecked(getValues()[`checkboxId${codeId}`]);
  };

  return (
    <>
      <HiddenCheckbox
        margin={margin}
        disabled={disabled}
        {...register(`checkboxId${codeId}`, {
          onChange: handleChecked,
        })}
      />
      <StyledCheckbox disabled={disabled} checked={checked} />
    </>
  );
};

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })<TCheckbox>`
  &[type='checkbox'] {
    position: absolute;
    appearance: none;
    z-index: 1;

    cursor: pointer;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 7px;
    margin: 0;
    cursor: pointer;
    background-color: none;
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
    &:focus {
      outline: 4px solid
        ${({ defaultChecked }) =>
          defaultChecked ? colorMap.primary.focus : colorMap.secondary.focus};
    }
  }
`;
const StyledCheckbox = styled.div<TCheckbox>`
  position: relative;
  display: inline-block;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 7px;
  background-image: url(${checkIcon.src});
  background-repeat: no-repeat;
  background-position: center;
  margin: ${({ margin }) => margin || '0'};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
  cursor: ${({ disabled }) => (disabled ? 'unset' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  &:hover {
    background-color: ${({ checked }) =>
      checked ? colors.secondaryDeepRed : colors.neutral.almostWhite};
  }

  background-size: ${({ checked }) => (checked ? '65%' : 0)};
  background-color: ${({ checked }) =>
    checked ? colorMap.primary.initial : colorMap.secondary.initial};
`;
