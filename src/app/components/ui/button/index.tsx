import React from 'react';
import * as S from './styles';
import { StyledButtonProps } from './types';

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
