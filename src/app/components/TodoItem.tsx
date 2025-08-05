'use client';

import { Button } from '@/app/components/ui/button';
import { Tag } from '@/app/components/ui/Tag';
import { Text } from '@/app/components/ui/Text';
import { TodoItem as TodoItemType } from '@/app/types/todo';
import { useCallback } from 'react';
import styled from 'styled-components';

interface TodoItemProps {
  todo: TodoItemType;
  footer: string;
  onToggleStatus: (id: string) => void;
  onDelete: (id: string) => void;
}

const ItemContainer = styled.div<{ $isConcluded: boolean }>`
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  padding: 1rem;
  background: ${(props) => (props.$isConcluded ? '#f8f9fa' : 'white')};
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ItemContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: center;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ToggleButton = styled.button<{ $isConcluded: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.$isConcluded ? '#28a745' : '#6c757d')};
  background: ${(props) => (props.$isConcluded ? '#28a745' : 'transparent')};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  &::after {
    content: '✓';
    color: white;
    font-size: 12px;
    font-weight: bold;
    opacity: ${(props) => (props.$isConcluded ? 1 : 0)};
  }
`;

const StyledText = styled(Text)<{ $isConcluded: boolean }>`
  text-decoration: ${(props) => (props.$isConcluded ? 'line-through' : 'none')};
  color: ${(props) => (props.$isConcluded ? '#6c757d' : 'inherit')};
`;

export function TodoItem({
  todo,
  footer,
  onToggleStatus,
  onDelete,
}: TodoItemProps) {
  const isConcluded = todo.status === 'concluded';

  const handleToggle = useCallback(() => {
    onToggleStatus(todo.id);
  }, [todo.id, onToggleStatus]);

  const handleDelete = useCallback(() => {
    onDelete(todo.id);
  }, [todo.id, onDelete]);

  return (
    <ItemContainer $isConcluded={isConcluded}>
      <ItemContent>
        <ToggleButton
          $isConcluded={isConcluded}
          onClick={handleToggle}
          aria-label={
            isConcluded ? 'Marcar como pendente' : 'Marcar como concluída'
          }
        />

        <ItemInfo>
          <ItemHeader>
            <StyledText size="lg" $isConcluded={isConcluded}>
              {todo.task}
            </StyledText>
            <Button
              size="sm"
              variant="danger"
              onClick={handleDelete}
              aria-label="Excluir tarefa"
            >
              ×
            </Button>
          </ItemHeader>

          <ItemFooter>
            <StyledText size="sm" $isConcluded={isConcluded}>
              {footer}
            </StyledText>
            <Tag
              type={isConcluded ? 'success' : 'warning'}
              description={isConcluded ? 'CONCLUÍDA' : 'PENDENTE'}
            />
          </ItemFooter>
        </ItemInfo>
      </ItemContent>
    </ItemContainer>
  );
}
