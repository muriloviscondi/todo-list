import { JSX } from 'react';
import * as S from './styles';

export const Title: React.FC<S.TitleProps> = ({
  level = 2,
  children,
  ...rest
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <S.StyledTitle as={Tag} level={level} {...rest}>
      {children}
    </S.StyledTitle>
  );
};
