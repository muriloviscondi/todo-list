'use client';

import React, { useCallback } from 'react';
import { Button } from '@/app/components/ui/button';
import { Tag } from '@/app/components/ui/Tag';
import { Text } from '@/app/components/ui/Text';
import { TodoItem as TodoItemType } from '@/app/types/todo';
import styles from './TodoItem.module.scss';

interface TodoItemProps {
  todo: TodoItemType;
  footer: string;
  onToggleStatus: (id: string) => void;
  onDelete: (id: string) => void;
}

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

  const getContainerClass = () => {
    return [styles.itemContainer, isConcluded ? styles.concluded : '']
      .filter(Boolean)
      .join(' ');
  };

  const getToggleButtonClass = () => {
    return [styles.toggleButton, isConcluded ? styles.concluded : '']
      .filter(Boolean)
      .join(' ');
  };

  const getTextClass = () => {
    return [styles.text, isConcluded ? styles.concluded : '']
      .filter(Boolean)
      .join(' ');
  };

  return (
    <div className={getContainerClass()}>
      <div className={styles.itemContent}>
        <button
          className={getToggleButtonClass()}
          onClick={handleToggle}
          aria-label={
            isConcluded ? 'Marcar como pendente' : 'Marcar como concluída'
          }
        />

        <div className={styles.itemInfo}>
          <div className={styles.itemHeader}>
            <Text size="lg" className={getTextClass()}>
              {todo.task}
            </Text>
            <Button
              size="sm"
              variant="danger"
              onClick={handleDelete}
              aria-label="Excluir tarefa"
            >
              ×
            </Button>
          </div>

          <div className={styles.itemFooter}>
            <Text size="sm" className={getTextClass()}>
              {footer}
            </Text>
            <Tag
              type={isConcluded ? 'success' : 'warning'}
              description={isConcluded ? 'CONCLUÍDA' : 'PENDENTE'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
