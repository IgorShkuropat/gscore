import React from 'react';
import styled from 'styled-components';
import { colors } from 'shared/colors';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  padding?: string;
  disabled?: boolean;
  alignSelf?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  type: string;
};
type TStyledInput = Omit<Props, 'register'>;

export const Input: React.FC<Props> = ({
  register,
  type,
  padding,
  alignSelf,
  disabled,
  placeholder,
}) => {
  const inputProps = {
    type,
    padding,
    alignSelf,
    disabled,
    placeholder,
  };

  return <StyledInput {...inputProps} {...register} />;
};
const StyledInput = styled.input<TStyledInput>`
  background-color: ${colors.neutral.white};
  color: ${colors.neutral.deepGrey};
  caret-color: ${colors.primary};
  outline: none;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
  opacity: ${({ disabled }) => (disabled ? '0.6' : '1')};
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  border: 1px solid #969696;
  padding: ${({ padding }) => padding || '25px 0 25px 23px'};
  box-shadow: 0px 2px 12px rgba(20, 20, 43, 0.06);
  border-radius: 6px;
  width: 100%;
  &::placeholder {
    color: ${colors.neutral.grey};
  }
`;
