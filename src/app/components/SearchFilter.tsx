'use client';

import React from 'react';
import { Input } from '@/app/components/ui/Input';
import { Button } from '@/app/components/ui/button';
import styles from './SearchFilter.module.scss';

type TaskFilterType = 'all' | 'pending' | 'concluded';

interface SearchFilterProps {
  searchTerm: string;
  filterType: TaskFilterType;
  onSearchChange: (term: string) => void;
  onFilterChange: (type: TaskFilterType) => void;
}

export function SearchFilter({
  searchTerm,
  filterType,
  onSearchChange,
  onFilterChange,
}: SearchFilterProps) {
  const getButtonClass = (type: TaskFilterType) => {
    return [styles.filterButton, filterType === type ? styles.active : '']
      .filter(Boolean)
      .join(' ');
  };

  return (
    <div className={styles.filterContainer}>
      <Input
        type="text"
        placeholder="Buscar tarefas..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <div className={styles.filterButtons}>
        <Button
          size="sm"
          className={getButtonClass('all')}
          onClick={() => onFilterChange('all')}
        >
          Todas
        </Button>
        <Button
          size="sm"
          className={getButtonClass('pending')}
          onClick={() => onFilterChange('pending')}
        >
          Pendentes
        </Button>
        <Button
          size="sm"
          className={getButtonClass('concluded')}
          onClick={() => onFilterChange('concluded')}
        >
          Concluídas
        </Button>
      </div>
    </div>
  );
}
