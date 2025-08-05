import { SearchInput } from '@ui';

import * as S from './styles';

export type TaskFilterType = 'all' | 'concluded' | 'pending';

type Props = {
  filterInput: TaskFilterType;
  searchTerm: string;
  onChangeFilter: (filter: TaskFilterType) => void;
  onSearch: (value: string) => void;
};

export const SearchFilter = ({
  filterInput,
  searchTerm,
  onChangeFilter,
  onSearch,
}: Props) => {
  return (
    <S.Container
      gap={'1.5rem'}
      alignItems="center"
      style={{ display: 'inline-flex' }}
    >
      <SearchInput onChange={onSearch} value={searchTerm} />

      <S.Wrapper>
        <S.Button
          $active={filterInput === 'all'}
          onClick={() => onChangeFilter('all')}
        >
          Todos
        </S.Button>
        <S.Button
          $active={filterInput === 'concluded'}
          onClick={() => onChangeFilter('concluded')}
        >
          Concluídas
        </S.Button>
        <S.Button
          $active={filterInput === 'pending'}
          onClick={() => onChangeFilter('pending')}
        >
          Pendentes
        </S.Button>
      </S.Wrapper>
    </S.Container>
  );
};
