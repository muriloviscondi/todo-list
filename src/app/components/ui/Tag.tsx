import React from 'react';
import styles from './Tag.module.scss';

type TagType = 'success' | 'warning' | 'info';

interface TagProps {
  type: TagType;
  description: string;
  className?: string;
}

export const Tag = ({ type, description, className }: TagProps) => {
  const tagClasses = [styles.tag, styles[type], className]
    .filter(Boolean)
    .join(' ');

  return <span className={tagClasses}>{description}</span>;
};
