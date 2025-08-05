import React from 'react';
import styles from './Text.module.scss';

type TextSize = 'sm' | 'md' | 'lg';

interface TextProps {
  children: React.ReactNode;
  size?: TextSize;
  $isLineThrough?: boolean;
  className?: string;
}

export const Text = ({
  children,
  size = 'md',
  $isLineThrough = false,
  className,
  ...props
}: TextProps) => {
  const textClasses = [
    styles.text,
    styles[size],
    $isLineThrough ? styles.lineThrough : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={textClasses} {...props}>
      {children}
    </span>
  );
};
