import * as S from './styles';

export type TagType = 'success' | 'warning' | 'error' | 'info' | 'default';

type TagProps = S.TagProps & { description: string };

export const Tag = ({ description, ...props }: TagProps) => {
  return <S.StyleTag {...props}>{description}</S.StyleTag>;
};
