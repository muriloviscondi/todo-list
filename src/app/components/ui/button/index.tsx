import React from 'react';
import { StyledButtonProps, Variant } from '@/app/components/ui/button/types';
import * as S from './styles';

export interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    StyledButtonProps {}

export const Button = ({
  children,
  variant = 'default',
  size = 'md',
  type = 'button',
  shape = 'default',
  active = false,
  ...props
}: Props) => {
  return (
    <S.StyledButton
      variant={variant}
      size={size}
      type={type}
      shape={shape}
      active={active}
      {...props}
    >
      {children}
    </S.StyledButton>
  );
};

export type { Variant, StyledButtonProps };
