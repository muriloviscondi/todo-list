'use client';

import * as S from './styles';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchInput = ({
  value,
  onChange,
  placeholder = 'Pesquisar...',
}: SearchInputProps) => {
  return (
    <S.Wrapper>
      <S.Icon />

      <S.Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </S.Wrapper>
  );
};
