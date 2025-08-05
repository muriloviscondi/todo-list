'use client';

import { TaskFilterType } from '..';
import * as S from './styles';

interface TaskFilterProps {
  selected: TaskFilterType;
  onChange: (filter: TaskFilterType) => void;
}

export const FilterInput = ({ selected, onChange }: TaskFilterProps) => {
  return (
    <S.Wrapper>
      <S.Button $active={selected === 'all'} onClick={() => onChange('all')}>
        Todos
      </S.Button>
      <S.Button
        $active={selected === 'concluded'}
        onClick={() => onChange('concluded')}
      >
        Concluídas
      </S.Button>
      <S.Button
        $active={selected === 'pending'}
        onClick={() => onChange('pending')}
      >
        Pendentes
      </S.Button>
    </S.Wrapper>
  );
};
