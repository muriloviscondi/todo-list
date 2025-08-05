import React from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  const containerClasses = [styles.container, className]
    .filter(Boolean)
    .join(' ');

  return <div className={containerClasses}>{children}</div>;
};
