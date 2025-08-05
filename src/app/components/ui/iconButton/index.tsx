import React from 'react';
import styles from './IconButton.module.scss';
import { IconButtonProps } from './types';

export const IconButton = ({
  children,
  variant = 'warning',
  size = 'md',
  className,
  ...props
}: IconButtonProps) => {
  const buttonClasses = [
    styles.iconButton,
    styles[variant],
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type="button" className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
