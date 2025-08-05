import React from 'react';
import styles from './Divider.module.scss';

export type DividerProps = {
  vertical?: boolean;
  spacing?: string;
  color?: 'light' | 'default';
  className?: string;
};

export const Divider = ({
  vertical = false,
  spacing = '16px',
  color = 'default',
  className,
}: DividerProps) => {
  const dividerClasses = [
    styles.divider,
    vertical ? styles.vertical : styles.horizontal,
    styles[color],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const dividerStyle = vertical
    ? { margin: `0 ${spacing}` }
    : { margin: `${spacing} 0` };

  return <div className={dividerClasses} style={dividerStyle} />;
};
