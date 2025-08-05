import styled from 'styled-components';
import { IconButtonProps, Size, Variant } from './types';

const variantStyles: Record<
  Variant,
  { bg: string; color: string; hover: string }
> = {
  danger: { bg: '#fdecea', color: '#d32f2f', hover: '#f9d1cc' },
  default: { bg: 'transparent', color: '#676f7e', hover: '#e0e0e0' },
  primary: { bg: '#e8f0fe', color: '#1a73e8', hover: '#d2e3fc' },
  success: { bg: '#e6f4ea', color: '#388e3c', hover: '#c8e6c9' },
  warning: { bg: '#fff3e0', color: '#f57c00', hover: '#ffe0b2' },
};

const sizeMap: Record<Size, string> = {
  sm: '32px',
  md: '40px',
  lg: '48px',
};

export const StyledButton = styled.button
  .withConfig({
    shouldForwardProp: (prop) => !['variant', 'size'].includes(prop),
  })
  .attrs<IconButtonProps>(() => ({
    type: 'button',
  }))<IconButtonProps>`
  align-items: center !important;
  justify-content: center !important;
  background-color: ${({ variant = 'default' }) =>
    variantStyles[variant].bg} !important;
  color: ${({ variant = 'default' }) =>
    variantStyles[variant].color} !important;
  width: ${({ size = 'md' }) => sizeMap[size]} !important;
  height: ${({ size = 'md' }) => sizeMap[size]} !important;
  border: none !important;
  border-radius: 50% !important;
  outline: none !important;
  box-shadow: none !important;
  appearance: none !important;
  -webkit-appearance: none !important;
  -moz-appearance: none !important;

  &:hover {
    border-style: none !important;
    background-color: ${({ variant = 'default' }) =>
      variantStyles[variant].hover} !important;
  }
  `;
