'use client';

import { Input } from '@/app/components/ui/Input';
import { Button } from '@/app/components/ui/button';
import styled from 'styled-components';

type TaskFilterType = 'all' | 'pending' | 'concluded';

interface SearchFilterProps {
  searchTerm: string;
  filterType: TaskFilterType;
  onSearchChange: (term: string) => void;
  onFilterChange: (type: TaskFilterType) => void;
}

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const FilterButton = styled(Button)<{ $active: boolean }>`
  background: ${(props) => (props.$active ? '#007bff' : '#f8f9fa')};
  color: ${(props) => (props.$active ? 'white' : '#6c757d')};
  border: 1px solid ${(props) => (props.$active ? '#007bff' : '#dee2e6')};

  &:hover {
    background: ${(props) => (props.$active ? '#0056b3' : '#e9ecef')};
  }
`;

export function SearchFilter({
  searchTerm,
  filterType,
  onSearchChange,
  onFilterChange,
}: SearchFilterProps) {
  return (
    <FilterContainer>
      <Input
        type="text"
        placeholder="Buscar tarefas..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <FilterButtons>
        <FilterButton
          size="sm"
          $active={filterType === 'all'}
          onClick={() => onFilterChange('all')}
        >
          Todas
        </FilterButton>
        <FilterButton
          size="sm"
          $active={filterType === 'pending'}
          onClick={() => onFilterChange('pending')}
        >
          Pendentes
        </FilterButton>
        <FilterButton
          size="sm"
          $active={filterType === 'concluded'}
          onClick={() => onFilterChange('concluded')}
        >
          Concluídas
        </FilterButton>
      </FilterButtons>
    </FilterContainer>
  );
}
