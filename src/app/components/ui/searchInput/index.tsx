'use client';

import React from 'react';
import { SearchIcon } from '../../icons';
import styles from './SearchInput.module.scss';

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
    <div className={styles.wrapper}>
      <SearchIcon className={styles.icon} />

      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};
