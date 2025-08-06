import React from 'react';
import { Text, Title } from '@/app/components/ui';
import { EmptyListIcon } from '@/app/components/icons';
import styles from './EmptyState.module.scss';

interface EmptyStateProps {
  title?: string;
  description?: string;
  showIcon?: boolean;
  className?: string;
}

export const EmptyState = ({
  title,
  description,
  showIcon = true,
  className,
  ...props
}: EmptyStateProps) => {
  const emptyStateClasses = [styles.emptyState, className || '']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={emptyStateClasses} {...props}>
      {showIcon && (
        <div className={styles.iconContainer}>
          <EmptyListIcon className={styles.icon} />
        </div>
      )}

      <div className={styles.content}>
        <Title level={3} className={styles.title}>
          {title}
        </Title>

        <Text size="md" className={styles.description}>
          {description}
        </Text>
      </div>
    </div>
  );
};
