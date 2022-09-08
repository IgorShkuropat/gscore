import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, colorMap } from 'shared/colors';
import checkIcon from 'public/svg/check.svg';

type Props = {
  disabled?: boolean;
  initialChecked?: boolean;
  margin?: string;
};
type TCheckbox = Pick<Props, 'disabled' | 'margin'> & {
  checked?: boolean;
};

export const Checkbox: React.FC<Props> = ({
  disabled = false,
  initialChecked = false,
  margin,
}) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleChecked = e => {
    setChecked(prev => !prev);
  };

  return (
    <>
      <HiddenCheckbox
        margin={margin}
        defaultChecked={checked}
        disabled={disabled}
      />
      <StyledCheckbox
        onClick={handleChecked}
        disabled={disabled}
        checked={checked}
      />
    </>
  );
};

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })<TCheckbox>`
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
const StyledCheckbox = styled.div<TCheckbox>`
  position: relative;
  z-index: 1;
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
