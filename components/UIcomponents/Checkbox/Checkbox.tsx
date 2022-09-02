import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, colorMap } from 'shared/colors';
import checkIcon from 'public/svg/check.svg';

type Props = {
  label?: string;
  gap?: string;
  disabled?: boolean;
  status: 'active' | 'hold' | 'inactive';
  initialChecked?: boolean;
};
type Checkbox = Pick<Props, 'disabled'> & {
  checked: boolean;
};
type Label = Pick<Props, 'status'>;

const statusColorMap = {
  active: colors.system.green,
  hold: colors.system.orange,
  inactive: colors.primary,
};

export const Checkbox: React.FC<Props> = ({
  label,
  gap = '15px',
  disabled = false,
  status = 'active',
  initialChecked = false,
}) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleChecked = e => {
    setChecked(prev => !prev);
  };

  return (
    <div style={{ display: 'flex', gap: gap }}>
      <HiddenCheckbox defaultChecked={checked} disabled={disabled} />
      <StyledCheckbox
        onClick={handleChecked}
        disabled={disabled}
        checked={checked}
      />
      <Label status={status}>{label}</Label>
    </div>
  );
};

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  &[type='checkbox'] {
    position: absolute;
    appearance: none;
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
const StyledCheckbox = styled.div<Checkbox>`
  position: relative;
  z-index: 1;
  display: inline-block;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 7px;
  background-image: url(${checkIcon.src});
  background-repeat: no-repeat;
  background-position: center;
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

const Label = styled.label<Label>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: ${({ status }) => statusColorMap[status]};
`;
