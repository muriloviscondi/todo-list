import { Flex } from '@layout';
import { SearchInput } from './searchInput';
import { FilterInput } from './filterInput';

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
    <Flex gap={'1.5rem'} alignItems="center">
      <SearchInput onChange={onSearch} value={searchTerm} />
      <FilterInput selected={filterInput} onChange={onChangeFilter} />
    </Flex>
  );
};
