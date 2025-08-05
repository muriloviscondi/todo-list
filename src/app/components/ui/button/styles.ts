// components/ui/Button/styles.ts
import styled from 'styled-components';
import { sizeStyles, variantStyles } from './constants';

export type Variant = 'default' | 'primary' | 'success' | 'danger';
export type Size = 'sm' | 'md' | 'lg';

export interface StyledButtonProps {
  variant?: Variant;
  size?: Size;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-weight: 500;

  background-color: ${({ variant = 'default' }) => variantStyles[variant].bg};
  color: ${({ variant = 'default' }) => variantStyles[variant].color};

  height: ${({ size = 'md' }) => sizeStyles[size].height};
  padding: ${({ size = 'md' }) => sizeStyles[size].padding};
  font-size: ${({ size = 'md' }) => sizeStyles[size].fontSize};

  &:hover {
    background-color: ${({ variant = 'default' }) =>
      variantStyles[variant].hover};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
