import * as S from './styles';
import { TextAreaProps } from './types';

export const TextArea = (props: TextAreaProps) => {
  return <S.StyledTextArea {...props} />;
};
