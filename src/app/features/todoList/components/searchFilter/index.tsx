import { Flex } from '@/app/components/layout';
import { Button, SearchInput } from '@/app/components/ui';
import styles from './SearchFilter.module.scss';

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
  const getButtonClass = (filter: TaskFilterType) => {
    return [styles.filterButton, filterInput === filter ? styles.active : '']
      .filter(Boolean)
      .join(' ');
  };

  return (
    <Flex className={styles.container} alignItems="center" gap={'1.5rem'}>
      <SearchInput onChange={onSearch} value={searchTerm} />

      <div className={styles.wrapper}>
        <Button
          active={filterInput === 'all'}
          className={getButtonClass('all')}
          size="sm"
          onClick={() => onChangeFilter('all')}
        >
          Todos
        </Button>
        <Button
          active={filterInput === 'concluded'}
          className={getButtonClass('concluded')}
          size="sm"
          onClick={() => onChangeFilter('concluded')}
        >
          Concluídas
        </Button>
        <Button
          active={filterInput === 'pending'}
          className={getButtonClass('pending')}
          size="sm"
          onClick={() => onChangeFilter('pending')}
        >
          Pendentes
        </Button>
      </div>
    </Flex>
  );
};
