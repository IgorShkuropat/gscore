import styled from 'styled-components';
import { colors } from 'shared/colors';

type Props = {
  padding?: string;
  disabled?: boolean;
  alignSelf?: string;
  placeholder?: string;
};

export const Input: React.FC<Props> = props => {
  return <StyledInput {...props} />;
};

const StyledInput = styled.input<Props>`
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
  width: 250px;
  &::placeholder {
    color: ${colors.neutral.grey};
  }
`;
