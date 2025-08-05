'use client';

import { DeleteIcon } from '@/app/components/icons';
import { Flex } from '@/app/components/layout';
import { IconButton, Tag, Text, Title } from '@/app/components/ui';
import { StatusType } from '@/app/data/mock';
import TaskToggleButton from '@/app/features/todoList/components/taskToggleButton';
import { useCallback } from 'react';
import styles from './Card.module.scss';

type CardProps = {
  id: string;
  title: string;
  footer: string;
  status: StatusType;
  onToggle?: (id: string) => void;
  onDelete: (id: string) => void;
};

const statusLabels = {
  concluded: 'CONCLUÍDA',
  pending: 'PENDENTE',
} as const;

export const Card = ({
  id,
  title,
  footer,
  status,
  onToggle,
  onDelete,
}: CardProps) => {
  const isConcluded = status === 'concluded';

  const handleToggle = useCallback(() => {
    onToggle?.(id);
  }, [id, onToggle]);

  const handleDelete = useCallback(() => {
    onDelete(id);
  }, [id, onDelete]);

  const containerClasses = [
    styles.container,
    isConcluded ? styles.concluded : styles.pending,
  ].join(' ');

  return (
    <div className={containerClasses}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2rem auto',
          gap: '1.5rem',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        <TaskToggleButton isConcluded={isConcluded} onToggle={handleToggle} />

        <Flex direction="column" gap="0.75rem" style={{ width: '100%' }}>
          <Flex justifyContent="space-between" alignItems="center">
            <Title level={5} $isLineThrough={isConcluded}>
              {title}
            </Title>
            <IconButton
              size="sm"
              variant="danger"
              aria-label="Delete item"
              onClick={handleDelete}
            >
              <DeleteIcon size={16} />
            </IconButton>
          </Flex>

          <Flex alignItems="center" justifyContent="space-between">
            <Text size="sm" $isLineThrough={isConcluded}>
              {footer}
            </Text>
            <Tag
              type={status === 'concluded' ? 'success' : 'warning'}
              description={statusLabels[status]}
            />
          </Flex>
        </Flex>
      </div>
    </div>
  );
};
