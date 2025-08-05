// components/ui/Button/styles.ts
import styled, { css } from 'styled-components';
import { sizeStyles, variantStyles } from './constants';
import { StyledButtonProps } from './types';

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !['variant', 'shape', 'size', 'active'].includes(prop),
})<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;

  background-color: ${({ variant = 'default', active }) =>
    active ? variantStyles[variant].activeBg : variantStyles[variant].bg};
  color: ${({ variant = 'default', active }) =>
    active ? variantStyles[variant].activeColor : variantStyles[variant].color};
  border-color: ${({ variant = 'default', active }) =>
    active ? variantStyles[variant].activeBorder : 'transparent'};

  height: ${({ size = 'md' }) => sizeStyles[size].height};
  padding: ${({ size = 'md' }) => sizeStyles[size].padding};
  font-size: ${({ size = 'md' }) => sizeStyles[size].fontSize};

  ${({ shape }) =>
    shape === 'circle' &&
    css`
      border-radius: 50%;
    `}

  &:hover {
    background-color: ${({ variant = 'default', active }) =>
      active
        ? variantStyles[variant].activeHover
        : variantStyles[variant].hover};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
