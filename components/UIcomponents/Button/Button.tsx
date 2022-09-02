import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { colors, colorMap } from '../../../shared/colors';
import primaryLoader from 'public/svg/primaryLoader.svg';
import secondaryLoader from 'public/svg/secondaryLoader.svg';

type Props = {
  UIType: 'primary' | 'secondary' | 'text';
  loading?: boolean;
  disabled?: boolean;
  children: ReactNode;
};

type StyledButton = Pick<Props, 'UIType' | 'loading'> & {
  alignSelf?: string;
  padding?: string;
  margin?: string;
};

export const Button: React.FC<Props> = ({
  children,
  UIType: color,
  loading = false,
  disabled = false,
}) => {
  return (
    <StyledButton UIType={color} disabled={disabled} loading={loading}>
      {!loading ? (
        <StyledButtonText UIType={color}>{children}</StyledButtonText>
      ) : (
        <Loader
          src={color === 'primary' ? primaryLoader.src : secondaryLoader.src}
        />
      )}
    </StyledButton>
  );
};

const StyledButton = styled.button<StyledButton>`
  display: flex;
  align-items: center;
  width: 308px;
  height: 72px;
  border-radius: 4px;
  padding: 20px 24px;
  border: 0;
  box-shadow: ${({ UIType }) =>
    UIType === 'text' ? 'none' : '0px 10px 28px rgba(252, 88, 66, 0.2)'};
  cursor: ${({ disabled, loading }) =>
    disabled || loading ? 'unset' : 'pointer'};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
  background-color: ${({ UIType }) => colorMap[UIType].initial};
  &:hover {
    background-color: ${({ UIType }) => colorMap[UIType].hover};
  }
  &:focus {
    outline: 4px solid ${({ UIType }) => colorMap[UIType].focus};
  }
  display: flex;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? '0.6' : '1')};
`;

const StyledButtonText = styled.span<StyledButton>`
  font-family: 'THICCCBOI';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: ${({ UIType }) =>
    UIType !== 'primary' ? colors.primary : colors.neutral.white};
  &:hover {
    color: ${({ UIType }) => colorMap[UIType].hover};
  }
`;

const Loader = styled.img`
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
