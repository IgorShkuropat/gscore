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
  onClick?: () => any;
  padding?: string;
  alignSelf?: string;
  margin?: string;
};

type StyledButton = Pick<
  Props,
  'UIType' | 'loading' | 'padding' | 'alignSelf' | 'margin'
> & {};

export const Button: React.FC<Props> = ({
  children,
  UIType: color,
  loading = false,
  disabled = false,
  onClick,
  padding,
  alignSelf,
  margin,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      UIType={color}
      disabled={disabled}
      loading={loading}
      padding={padding}
      alignSelf={alignSelf}
      margin={margin}
    >
      {!loading ? (
        <StyledButtonText
          padding={padding}
          alignSelf={alignSelf}
          UIType={color}
        >
          {children}
        </StyledButtonText>
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
  align-self: ${({ alignSelf }) => alignSelf || 'unset'};
  border-radius: 4px;
  padding: ${({ padding }) => padding || '20px 24px'};
  width: fit-content;
  margin: ${({ margin }) => margin || '0'};
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
    UIType === 'primary' ? colors.neutral.white : colors.primary};
  &:hover {
    color: ${({ UIType }) =>
      UIType === 'primary'
        ? colorMap['secondary'].hover
        : colorMap['primary'].hover};
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
