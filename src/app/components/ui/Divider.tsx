import React from 'react';
import styles from './Divider.module.scss';

interface DividerProps {
  margin?: string;
  className?: string;
}

export const Divider = ({ margin, className }: DividerProps) => {
  const dividerClasses = [styles.divider, className].filter(Boolean).join(' ');
  const dividerStyle = margin ? { margin } : {};

  return <hr className={dividerClasses} style={dividerStyle} />;
};
