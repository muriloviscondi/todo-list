import React from 'react';
import styles from './Tag.module.scss';

export type TagType = 'success' | 'warning' | 'error' | 'info' | 'default';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: TagType;
  description: string;
}

export const Tag = ({
  description,
  type = 'default',
  className,
  ...props
}: TagProps) => {
  const tagClasses = [styles.tag, styles[type], className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={tagClasses} {...props}>
      {description}
    </span>
  );
};
