'use client';

import * as S from './styles';
import { IconButtonProps } from './types';

export const IconButton = ({
  children,
  variant = 'default',
  size = 'md',
  ...props
}: IconButtonProps) => {
  return (
    <S.StyledButton {...props} size={size} variant={variant}>
      {children}
    </S.StyledButton>
  );
};
