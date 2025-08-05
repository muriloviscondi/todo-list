import { JSX } from 'react';
import { TitleProps } from './types';

import * as S from './styles';

export const Title = ({ level = 2, children, ...rest }: TitleProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <S.StyledTitle as={Tag} level={level} {...rest}>
      {children}
    </S.StyledTitle>
  );
};
