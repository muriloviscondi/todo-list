'use client';

import React from 'react';
import * as S from './styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: S.Variant;
  size?: S.Size;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  size = 'md',
  ...props
}) => {
  return (
    <S.StyledButton variant={variant} size={size} {...props}>
      {children}
    </S.StyledButton>
  );
};
